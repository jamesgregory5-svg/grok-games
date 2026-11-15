# Grok Games

A fan-made game hub by James. One download for [Tour Sim](games/tour-sim/), [City Sim](games/city-sim/), [Hold'em](games/holdem/), and any game added later.

This is not an official xAI or Grok product.

## Play

- **Download:** unzip the [latest release](https://github.com/jamesgregory5-svg/grok-games/releases) and open `index.html` in Chrome. It works from `file://` on Windows — no server required.
- **Online:** https://jamesgregory5-svg.github.io/grok-games/

The first time you open the hub, create an account (username and password). That account is stored on this device only — one account per device. Sign out and sign back in anytime; a different username is rejected.

Tour Sim is included from Tour Sim v4 Final (v4.48). The copy in this hub does not use Tour Sim's original password gate. City Sim is v3.7.8 (the player is invulnerable while in a car). Hold'em is play-money Texas Hold'em: start with $1,000 and go as high as you can — your highest bankroll is your score.

The wordmark uses [Inter Tight](https://github.com/googlefonts/inter-tight) (SIL Open Font License 1.1).

## How to add a game

1. Create a folder `games/your-game/`.
2. Put a self-contained `index.html` in that folder, plus any assets the game needs. Use **relative links only**. Do not fetch local JSON files — that fails on `file://`.
3. At the top of the game's `<head>`, add the hub sign-in check. On the online site a closed session sends the player back to the launcher. From `file://` the check is skipped, because the browser cannot share the session across local files, and the launcher itself is still gated:

```html
<script src="../../auth.js"></script>
<script>GrokAuth.requireSession();</script>
```

4. Add one entry to the `GAMES` array in the root `index.html`:

```js
{
  id: "your-game",
  title: "Your Game",
  description: "One line about it.",
  href: "games/your-game/index.html",
  accent: "linear-gradient(160deg, #eee 0%, #999 100%)"
}
```

5. Commit the folder and the new array entry, then ship a new release zip so the one-download copy stays in sync with the site.

Auth lives in `auth.js`. The default backend keeps a salted SHA-256 password hash in `localStorage` and the session in `sessionStorage`. To use an online backend later (for example Firebase, for cross-device locking), implement the backend contract documented in that file and call `GrokAuth.setBackend(...)`.
