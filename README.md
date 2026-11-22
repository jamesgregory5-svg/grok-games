# Grok Games

A fan-made game hub by James. One download for [Tour Sim](games/tour-sim/), [City Sim](games/city-sim/), [Grok Casino](games/casino/), [Grok Blast](games/grok-blast/), [Grok Snake](games/grok-snake/), [2048](games/2048/), [MLB GM Mode](games/mlb-gm/), [Grok Life](games/grok-life/), [Grok Asylum](games/grok-asylum/), [Grok Tycoon](games/grok-tycoon/), and any game added later.

This is not an official xAI or Grok product.

## Play

- **Download:** unzip the [latest release](https://github.com/jamesgregory5-svg/grok-games/releases) and open `index.html` in Chrome. It works from `file://` on Windows — no server required.
- **Online:** https://jamesgregory5-svg.github.io/grok-games/

The first time you open the hub, enter the shared password. After a correct entry, this browser stays unlocked, so the launcher and every game open straight away, even after you close the browser. Clearing browser data, or using another browser or device, will ask once again. Passwords chosen on a device before this update no longer unlock the hub.

Tour Sim in this hub is v1.14.2 (chip shots and club recommendations use your actual career distances, including gear upgrades; safer graphics: post-processing and instancing are try/caught, Auto starts at Medium, shader or context-loss failures drop to Low instead of a blank screen; graphics presets Low/Medium/High/Ultra/Auto, performance LOD and instancing, visual upgrades, FPS counter; original ball camera, no broadcast cameras; new Modern Clean title screen; career casino now loads; stock driver about 260 yd total, fully maxed career bag about 330 yd; St Andrews double-green pins stay on the correct lobe, with the flag, cup, capture point, aim line and minimap sharing one position; Pebble 18 no longer plants a cypress in the driving line; bridges restored; cup physics, shared putt-pace meter, tree collisions, career stability, a growing pro shop and estate, and a career casino). The copy does not use a separate password gate. City Sim is v3.7.9 (pedestrians spawn around you across the whole city; running people over does not damage the car; the player is invulnerable while in a car). Grok Casino combines Hold'em, blackjack, European roulette, and original slots on one play-money bankroll that starts at $1,000 — your highest bankroll is your score. Grok Blast is an original 8×8 gem puzzle: drag three pieces at a time, clear full rows and columns, and chain combos. Pieces do not rotate. Grok Snake is a classic snake game on a green checkered board, with apples, a gliding snake with eyes, and walls that end the run. 2048 is the standard sliding-number puzzle, with your best score saved. MLB GM Mode is a fan-made franchise game (not affiliated with Major League Baseball): pick any of the 30 clubs, use current 40-man rosters and 2026 stats baked from the public MLB Stats API, make trades and free-agent moves, and try to win the World Series. Other clubs reject unfair trades and evaluate deals using age, projection, surplus value, years of control, and whether they are buying or selling. Free-agent asking prices follow the 2025–26 market (stars want long $25–40M+ deals; mid-tier $8–20M; role players $1–5M; older players take shorter guarantees). Lowballs are rejected, and other clubs make competing offers. Grok Life is an original, teen-appropriate life simulator: a random birth, yearly events with choices, school and work, family, houses, health, and a ribbon summary when the life ends. You can continue as a child and keep more than one save. It is not a copy of any commercial life game. Grok Asylum is an original first-person horror escape: get out of a darkened asylum, or last as long as you can in Survival. Fan-made, not a copy of another horror game. Grok Tycoon is an original business game: pick a founder background and a company type, then run a weekly loop of prices, staff, stock, marketing, loans, and expansion in the city of Harborline. Endings include bankruptcy, a sale, an IPO, lasting ten years, and millionaire or billionaire net worth. Fan-made, not a copy of any commercial tycoon game.

The wordmark uses [Inter Tight](https://github.com/googlefonts/inter-tight) (SIL Open Font License 1.1).

## How to add a game

1. Create a folder `games/your-game/`.
2. Put a self-contained `index.html` in that folder, plus any assets the game needs. Use **relative links only**. Do not fetch local JSON files — that fails on `file://`.
3. At the top of the game's `<head>`, add the hub unlock check. On the online site, a browser that has not been unlocked yet is sent back to the launcher. From `file://` the check is skipped, because the browser cannot share localStorage across local files, and the launcher itself is still gated:

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

Auth lives in `auth.js`. The default backend verifies the shared password against a salted SHA-256 hash baked into that file, then stores a persistent unlock token in `localStorage` after the first correct entry. To use an online backend later (for example Firebase, for cross-device locking), implement the backend contract documented in that file and call `GrokAuth.setBackend(...)`.
