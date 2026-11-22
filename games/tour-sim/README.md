# Tour Sim (Grok Games hub copy)

Tour Sim v1.14.1-hotfix, the hub copy of the WebGL golf simulator. Play it from the Grok Games hub: https://jamesgregory5-svg.github.io/grok-games/ (open Tour Sim after unlocking the hub).

This folder is part of [grok-games](https://github.com/jamesgregory5-svg/grok-games). It uses the hub password gate (`../../auth.js`) and does not have a separate password of its own.

## v1.14.1-hotfix

- **Crash/blank-screen fix.** Graphics failures no longer leave a frozen or empty canvas. Post-processing (MSAA, bloom, grading) and instancing are wrapped in try/catch. If a shader fails to compile, a framebuffer can't be created, or the WebGL context is lost, the game drops to the Low preset (direct rendering, no post) and keeps going. Auto now starts at Medium rather than High, then may still step up if frames hold. Ultra MSAA is capped at 4x. The WebGL2 canvas listens for context loss and reloads cleanly after a restore.

## v1.14

- **Graphics presets** in Options (and the G key): Low, Medium, High, Ultra, and Auto (the default). Auto runs a short startup benchmark aimed at about 60 fps and quietly steps down one notch mid-round if frames dip. The choice is saved.
- **Performance:** terrain tile LOD, instanced grass on High/Ultra, fewer/simpler trees on Low (billboards only), next-hole precompute so the following hole is ready before you get there.
- **Visuals:** fairway mowing stripes, green sheen, swaying rough grass, water reflections and waves (flat water on Low), distance fog, hemisphere/golden-hour lighting, bloom, colour grading and MSAA on High and Ultra. Low skips baked shadows and post-processing.
- **FPS counter** in Options, also toggled with F (does not conflict with other keys).
- Bridges stay visible on every preset. Tree, bridge and cup logic is unchanged.
- The putt meter now draws reliably in the live frame loop: when you start putting, the same big meter switches to putt pace (no leftover swing meter).

## v1.13.1

- **Broadcast cameras removed.** The v1.13 TV-style cameras (chase, landing, approach, putt-follow and trouble cams), the slow motion, the automatic instant replays, the CAM button, the B key and the camera Options screen are all gone. The camera is back to the original behind-the-ball follow camera in every mode. The original manual REPLAY button is unchanged.
- **New Modern Clean title screen:** Outfit font, the flag-in-cup mark with the "tour sim" wordmark, pill buttons, the live rolling-green course behind a light veil, a new favicon and a new launcher card.
- **Bigger swing meter**, and the **putt meter is the very same meter** (same size and spot, showing putt length and the pace zone), so nothing resizes when you start putting. The strike/launch-contact panel sits beside the meter instead of on top of it or the launch monitor.
- **Putt aiming fixed:** the pace zone and preview line follow the line you set (same 0.004 rad step, no camera jumps) and nudging is no longer laggy.
- **Screen fit:** panels and menus fit 1280x720 to 1920x1080 without the page scrolling behind them, buttons wrap instead of truncating, and the left-hand buttons no longer overlap the shot panel.
- Kept the v1.13 start-up fix: the Career Casino, purse clamping and estate/shop hooks load again (two stray references to private variables, `injTick` and `loop`, used to abort that block).

## v1.13 (superseded by v1.13.1)

- Added broadcast cameras (removed again in v1.13.1) and fixed the v1.12 start-up bug described above.

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
