# Tour Sim (Grok Games hub copy)

Tour Sim v1.13, the hub copy of the WebGL golf simulator. Play it from the Grok Games hub: https://jamesgregory5-svg.github.io/grok-games/ (open Tour Sim after unlocking the hub).

This folder is part of [grok-games](https://github.com/jamesgregory5-svg/grok-games). It uses the hub password gate (`../../auth.js`) and does not have a separate password of its own.

## v1.13

- **TV-broadcast shot cameras.** New camera setting: **Broadcast** (default), **Classic** (the original behind-the-ball follow camera) or **Behind only** (stays behind the ball, no cuts, no automatic replays). It is saved, changeable from **Options** on the main menu, the in-game **CAM** button or the **B** key, and works in every ball mode (career, quick play, practice/range, closest to the pin, long drive).
- Broadcast cuts, all planned from the same sampled ball path and predicted landing the physics already produces:
  - Tee-shot chase cam that starts behind the player, follows the ball up, then swings its look-at to the landing area as the ball descends, and cuts to a landing cam to watch the bounce and roll.
  - Landing cam for long non-tee shots, beside the predicted landing spot.
  - Low green-side cam for approaches, to see the ball check or spin back.
  - Putt follow cam (low, tracking the roll) that moves to a behind-the-cup view looking back at the ball for the last few feet.
  - Water and tree/trouble cams for balls headed for water, trees or out of bounds.
  - Slow motion into the cup plus an instant replay from a second angle for hole-outs, aces, eagles, long putts and lip-outs. Tap, click or press any key to skip a replay; a tap also cancels slow motion.
- Short camera moves are eased; long cuts are straight TV cuts with a quick dip. The camera is kept above the terrain, out of tree canopies and building footprints and inside the hole, and the camera never waits on or swallows input.
- Fixed a v1.12 start-up bug: two references to variables that were private to other parts of the code (`injTick`, `loop`) threw while the v1.12 add-ons were loading, which aborted the rest of that block. The Career Casino, purse clamping, estate/shop hooks and several exports never actually started. They now load.

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
