# Tour Sim (Grok Games hub copy)

Tour Sim v1.12, the hub copy of the WebGL golf simulator. Play it from the Grok Games hub: https://jamesgregory5-svg.github.io/grok-games/ (open Tour Sim after unlocking the hub).

This folder is part of [grok-games](https://github.com/jamesgregory5-svg/grok-games). It uses the hub password gate (`../../auth.js`) and does not have a separate password of its own.

## v1.12

- Reworked cup physics (capture radius, ~1.6 m/s max holeable speed, partial-edge lip rolls, no pop-outs once below the rim).
- Putt-meter suggested-pace zone and caddie line share one simulation (pace that finishes ~0.3–0.5 m past the hole).
- Tree hits dampen speed and deflect; a sample-timing bug that could add energy through the canopy is fixed.
- Career crash guards with autosave recovery, live leaderboard score sync, and tournament purses that climb with the career (majors still the richest events).
- Visible “what you need next” panel on the career hub and after events.
- Expanded pro shop (woods, irons, wedges, putters, balls, gloves, shoes, training aids, fitness, luxury/legend tiers) with clearer ball-flight stats, upgrades through 10, and late-career money sinks (jet, home course, staff, brand, trophy wing, charity).
- Career Casino: lottery, blackjack, and Texas Hold’em, all billed against career money.
- Menu layout fixes for 1280×720, 1366×768, 1920×1080 and similar laptops, plus frame-rate caps (pixel ratio, shadows, auto quality).

## Features
- **Career mode:** four tiers, world ranking, rivals, Ryder Cup every other season, press conferences, injuries, Monday qualifiers, season recap, sponsors, caddies, pro shop, Hall of Fame levels (through Mythic), estate, and casino.
- **Modes:** Play a course, Tournament, Endless, Bird Hunt, Topgolf Classic, Driving range, Closest to the pin, Long drive, Cart Part Only (Cart Chase).
- **Courses** on real DEM terrain (Golf Digest top U.S. courses + home courses), day/night, wildlife, launch monitor, customization.
