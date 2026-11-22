# Tour Sim (Grok Games hub copy)

Tour Sim v1.12.3, the hub copy of the WebGL golf simulator. Play it from the Grok Games hub: https://jamesgregory5-svg.github.io/grok-games/ (open Tour Sim after unlocking the hub).

This folder is part of [grok-games](https://github.com/jamesgregory5-svg/grok-games). It uses the hub password gate (`../../auth.js`) and does not have a separate password of its own.

## v1.12.3

- Retuned distances so a well-struck stock driver totals about 260 yd on flat ground with no wind, and a fully maxed career bag (combined cap 10) totals about 330 yd. Mid-level power upgrades step up smoothly between those. Other clubs were scaled with the driver so bag gapping still makes sense.

## v1.12.2

- On St Andrews (and any other course with a double/shared green), the cup stays on this hole's lobe of the green instead of sometimes landing on the other hole's half. The flagstick, the cup in the turf, the capture point, the aim/caddie line, and the minimap pin all use that same position in career, quick play, and practice.
- Pebble Beach 18: a forced “landmark” cypress was planted in the middle of the fairway (4 yd off the centerline) and, after the v1.12 tree-damping fix, was eating tee shots. The landmark tree right of the green stays; nothing is forced onto the landing zone. Carmel Bay remains along the left with the seawall/cliff at the shoreline.
- Career driver distance: stock is unchanged (about 258 yd carry / 288 yd total, in line with v1.11.6). Combined shop/estate power, accuracy, and consistency now cap at 10, so a fully loaded bag is long (about 286 / 309) rather than long-drive territory (was about 314 / 331 with 21 stacked power points at +2.5% each).

## v1.12.1

- Restored OSM cart-path bridge meshes (`f.br`) that were missing from the packed course data since the v2/v4 GEO rebuild (the draw/build code was still there, but every course's `br` list was empty). Bridges stay visible even if the frame-rate object cut trims wildlife.

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
