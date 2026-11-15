# Grok Games

A fan-made game hub by James. One download for [Tour Sim](games/tour-sim/), [City Sim](games/city-sim/), and any game added later.

This is not an official xAI or Grok product.

## Play

- **Download:** unzip the [latest release](https://github.com/jamesgregory5-svg/grok-games/releases) and open `index.html` in Chrome. It works from `file://` on Windows — no server required.
- **Online:** https://jamesgregory5-svg.github.io/grok-games/

Tour Sim is included unchanged from Tour Sim v4 Final (v4.48), including its existing password gate. City Sim is v3.7.5.

The wordmark uses [Inter Tight](https://github.com/googlefonts/inter-tight) (SIL Open Font License 1.1).

## How to add a game

1. Create a folder `games/your-game/`.
2. Put a self-contained `index.html` in that folder, plus any assets the game needs. Use **relative links only**. Do not fetch local JSON files — that fails on `file://`.
3. Add one entry to the `GAMES` array in the root `index.html`:

```js
{
  id: "your-game",
  title: "Your Game",
  description: "One line about it.",
  href: "games/your-game/index.html",
  accent: "linear-gradient(160deg, #eee 0%, #999 100%)"
}
```

4. Commit the folder and the new array entry, then ship a new release zip so the one-download copy stays in sync with the site.
