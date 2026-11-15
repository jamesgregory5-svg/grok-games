# Tour Sim v4 Final

Tour Sim v4 (v4.48), a WebGL golf simulator. Play: https://jamesgregory5-svg.github.io/tour-sim-v4-final/

## Features
- **Password gate** when the page opens (remembered for the browser session only).
- **Career mode:** four tiers, world ranking, rivals, Ryder Cup every other season, press conferences, injuries, Monday qualifiers, season recap, sponsors, caddies, pro shop, Hall of Fame levels.
- **Modes:** Play a course, Tournament, Endless, Bird Hunt, Topgolf Classic (colored bullseye targets), Driving range, Closest to the pin, Long drive, Cart Part Only (Cart Chase).
- **Courses** on real DEM terrain (Golf Digest top U.S. courses + home courses), day/night, wildlife, launch monitor, customization (ball color, trail, hole explosion).
- Six swing difficulty levels. Saves and settings use the same `ts.*` localStorage keys as the v4 test link.

## Offline
Download `tour-sim-v4-final-offline.zip` from the "Tour Sim v4 Final" release, unzip it, and open `index.html` in Chrome, Edge, Firefox or Safari. It needs no internet connection.

## Saves
Saves are kept in the browser (localStorage, keys `ts.*`). The final site and the v4 test link are on the same website address (jamesgregory5-svg.github.io), so in the same browser they share saves: progress carries over automatically. The offline file opened from disk is a different address, so it starts with empty saves.
