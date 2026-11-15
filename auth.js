/**
 * Grok Games auth.
 *
 * Default backend: one account per device, stored in localStorage.
 * Username + salted SHA-256 password hash (WebCrypto). Session in sessionStorage.
 *
 * To swap in an online backend later (for example Firebase, for cross-device
 * locking), implement the same methods as LocalBackend and call:
 *   GrokAuth.setBackend(yourBackend)
 *
 * Backend contract:
 *   hasDeviceLock() -> boolean
 *   linkedUsername() -> string|null
 *   createAccount(username, password) -> Promise<account>
 *     must reject with { code: "DEVICE_LOCKED", message: "This device is already linked to another account." }
 *     if this device is already bound to an account
 *   signIn(username, password) -> Promise<account>
 *     must reject with { code: "DEVICE_LOCKED" } and the same message when the
 *     username is not the one linked to this device
 *     must reject with { code: "BAD_PASSWORD" } on a wrong password
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "gg.auth.v1";
  var SESSION_KEY = "gg.session";
  var LOCK_MESSAGE = "This device is already linked to another account.";

  function bytesToHex(buf) {
    var u8 = new Uint8Array(buf);
    var out = "";
    for (var i = 0; i < u8.length; i++) out += u8[i].toString(16).padStart(2, "0");
    return out;
  }

  function hexToBytes(hex) {
    var a = new Uint8Array(hex.length / 2);
    for (var i = 0; i < a.length; i++) a[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    return a;
  }

  function concat(a, b) {
    var o = new Uint8Array(a.length + b.length);
    o.set(a, 0);
    o.set(b, a.length);
    return o;
  }

  function sha256Salted(password, saltBytes) {
    var data = concat(saltBytes, new TextEncoder().encode(password));
    return crypto.subtle.digest("SHA-256", data).then(bytesToHex);
  }

  function fail(code, message) {
    var err = new Error(message);
    err.code = code;
    return err;
  }

  function normalizeUsername(u) {
    return String(u || "").trim();
  }

  var LocalBackend = {
    name: "local",

    loadAccount: function () {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    saveAccount: function (account) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(account));
    },

    hasDeviceLock: function () {
      return !!this.loadAccount();
    },

    linkedUsername: function () {
      var a = this.loadAccount();
      return a ? a.username : null;
    },

    createAccount: function (username, password) {
      if (this.hasDeviceLock()) return Promise.reject(fail("DEVICE_LOCKED", LOCK_MESSAGE));
      var salt = crypto.getRandomValues(new Uint8Array(16));
      var self = this;
      return sha256Salted(password, salt).then(function (hash) {
        var account = {
          version: 1,
          username: username,
          usernameNorm: username.toLowerCase(),
          salt: bytesToHex(salt),
          hash: hash,
          algo: "SHA-256",
          createdAt: Date.now()
        };
        self.saveAccount(account);
        return account;
      });
    },

    signIn: function (username, password) {
      var account = this.loadAccount();
      if (!account) return Promise.reject(fail("NO_ACCOUNT", "No account on this device."));
      var linked = (account.usernameNorm || String(account.username).toLowerCase());
      if (username.toLowerCase() !== linked) {
        return Promise.reject(fail("DEVICE_LOCKED", LOCK_MESSAGE));
      }
      return sha256Salted(password, hexToBytes(account.salt)).then(function (hash) {
        if (hash !== account.hash) return Promise.reject(fail("BAD_PASSWORD", "Incorrect password."));
        return account;
      });
    }
  };

  var backend = LocalBackend;

  function getSession() {
    try {
      var raw = sessionStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setSession(session) {
    if (!session) sessionStorage.removeItem(SESSION_KEY);
    else sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function launcherUrl() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var s = scripts[i];
      var src = s.src || "";
      if (src && /auth\.js(\?.*)?$/.test(src)) {
        try { return new URL("index.html", src).href; } catch (e) {}
      }
    }
    return "../../index.html";
  }

  var GrokAuth = {
    setBackend: function (b) { backend = b; },
    getBackend: function () { return backend; },

    hasAccount: function () { return backend.hasDeviceLock(); },

    isSignedIn: function () {
      var s = getSession();
      return !!(s && s.ok && s.username);
    },

    currentUser: function () {
      var s = getSession();
      return s && s.ok ? s.username : null;
    },

    linkedUsername: function () { return backend.linkedUsername(); },

    createAccount: function (username, password, confirm) {
      username = normalizeUsername(username);
      if (!username) return Promise.reject(fail("VALIDATION", "Enter a username."));
      if (!password) return Promise.reject(fail("VALIDATION", "Enter a password."));
      if (password !== confirm) return Promise.reject(fail("VALIDATION", "Passwords do not match."));
      if (password.length < 4) return Promise.reject(fail("VALIDATION", "Password must be at least 4 characters."));
      return backend.createAccount(username, password).then(function (account) {
        setSession({ ok: true, username: account.username, at: Date.now() });
        return account;
      });
    },

    signIn: function (username, password) {
      username = normalizeUsername(username);
      if (!username || !password) {
        return Promise.reject(fail("VALIDATION", "Enter your username and password."));
      }
      return backend.signIn(username, password).then(function (account) {
        setSession({ ok: true, username: account.username, at: Date.now() });
        return account;
      });
    },

    signOut: function () {
      setSession(null);
    },

    requireSession: function () {
      if (this.isSignedIn()) return true;
      // Chrome treats each file:// path as its own origin, so the launcher
      // session cannot be read from a game page. Gate only the launcher then.
      if (location.protocol === "file:") return true;
      var url = launcherUrl();
      try { location.replace(url); } catch (e) { location.href = url; }
      return false;
    }
  };

  global.GrokAuth = GrokAuth;
})(typeof window !== "undefined" ? window : this);
