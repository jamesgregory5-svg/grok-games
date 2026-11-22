# Grok Games

A fan-made game hub by James. One download for [Tour Sim](games/tour-sim/), [City Sim](games/city-sim/), [Grok Casino](games/casino/), [Grok Blast](games/grok-blast/), [Grok Snake](games/grok-snake/), [2048](games/2048/), [MLB GM Mode](games/mlb-gm/), [Grok Life](games/grok-life/), [Grok Asylum](games/grok-asylum/), [Grok Tycoon](games/grok-tycoon/), and any game added later.

This is not an official xAI or Grok product.

## Play

- **Download:** unzip the [latest release](https://github.com/jamesgregory5-svg/grok-games/releases) and open `index.html` in Chrome. It works from `file://` on Windows — no server required.
- **Online:** https://jamesgregory5-svg.github.io/grok-games/

The first time you open the hub, create an account (username and password). That account is stored on this device only — one account per device. Sign out and sign back in anytime; a different username is rejected.

Tour Sim is included from Tour Sim v4 Final (v4.48). The copy in this hub does not use Tour Sim's original password gate. City Sim is v3.7.8 (the player is invulnerable while in a car). Grok Casino combines Hold'em, blackjack, European roulette, and original slots on one play-money bankroll that starts at $1,000 — your highest bankroll is your score. Grok Blast is an original 8×8 gem puzzle: drag three pieces at a time, clear full rows and columns, and chain combos. Pieces do not rotate. Grok Snake is a classic snake game on a green checkered board, with apples, a gliding snake with eyes, and walls that end the run. 2048 is the standard sliding-number puzzle, with your best score saved. MLB GM Mode is a fan-made franchise game (not affiliated with Major League Baseball): pick any of the 30 clubs, use current 40-man rosters and 2026 stats baked from the public MLB Stats API, make trades and free-agent moves, and try to win the World Series. Other clubs reject unfair trades. Grok Life is an original, teen-appropriate life simulator: a random birth, yearly events with choices, school and work, family, houses, health, and a ribbon summary when the life ends. You can continue as a child and keep more than one save. It is not a copy of any commercial life game. Grok Asylum is an original first-person horror escape: get out of a darkened asylum, or last as long as you can in Survival. Fan-made, not a copy of another horror game. Grok Tycoon is an original business game: pick a founder background and a company type, then run a weekly loop of prices, staff, stock, marketing, loans, and expansion in the city of Harborline. Endings include bankruptcy, a sale, an IPO, lasting ten years, and millionaire or billionaire net worth. Fan-made, not a copy of any commercial tycoon game.

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
