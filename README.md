# Walk to Mount Doom 🌋 — a Middle-earth walking tracker

Log your real-world kilometres and watch a marker walk Frodo's road from **Bag End to the Cracks of Doom** — on the *actual* Lord of the Rings Online map.

### ▶ Live: **https://mirsellus.github.io/walk-to-mt-doom-tracker/**

A fan take on the classic **"Walk to Mordor" / Éowyn Challenge**: instead of just a running total, you get the whole journey laid out on a real Middle-earth map, with a "you are here" dot that moves along Frodo's exact route as your kilometres add up.

---

## What it does

- **Walk log** — add each walk (with an optional note); it sums to your total.
- **Landmark checklist** — all 36 stops from Bag End to Mount Doom, ticking off as you pass them, with the real cumulative distance and the distance still to go.
- **Pace & ETA** — set a weekly pace and see roughly when you'll reach the next landmark and Mount Doom.
- **Full-resolution map** — pan/zoom the whole game world; a red marker sits exactly on each landmark as your total climbs, and gold ★ stars mark the four great stages (Rivendell, Lothlórien, Rauros, Mount Doom).
- **Offline & private** — everything runs in your browser; your progress is saved locally. **Export/Import** buttons move it between devices.

## How to use it

1. Open the link above.
2. Set your **weekly pace**, then **log each walk's km** as you go.
3. Watch the dot advance and the landmarks tick off.
4. **On a phone:** open the link, then **Share → Add to Home Screen** — it behaves like an app and works on data or wifi.

> Tip: progress is stored per-device. If you use it on both a phone and a computer, use **Export** on one and **Import** on the other to keep them in sync.

## The distances

The full journey is **1,779 miles / 2,863 km** (Bag End → Mount Doom), the figure used by the **Éowyn Challenge**, derived from Barbara Strachey's *Journeys of Frodo* and Karen Wynn Fonstad's *Atlas of Middle-earth*. Stage 1 uses that source's verified mile-by-mile distances; stages 2–4 split each verified stage total along the **actual on-map route distance** between landmarks. (Note: the in-game map isn't perfectly to scale, so stages 2–4 are best-effort estimates anchored to the verified stage totals.)

## Credits

- **Map tiles & in-game place data** — from the **TerrainMap** plugin for LOTRO by **Garan**: <https://www.lotrointerface.com/downloads/info846>. The underlying map imagery is from *The Lord of the Rings Online*.
- **Distances** — the **Éowyn Challenge** ("Walk to Mordor").
- **Map engine** — [Leaflet](https://leafletjs.com/) (BSD-2-Clause; its notice is retained in `lib/leaflet.js`).

## Licence

The **tracker's own code** (`index.html`, `_data/route.js`) is released under the **MIT Licence** — see [`LICENSE`](LICENSE). MIT covers **only the application code**.

It does **not** cover the map tiles or in-game data in `tiles/` and `_data/`, which are derived from *The Lord of the Rings Online* and remain the property of their owners.

### Disclaimer — unofficial fan project

*The Lord of the Rings Online* and its map imagery are © **Standing Stone Games LLC**. Middle-earth and related names and places are trademarks of **Middle-earth Enterprises**. This is an **unofficial, non-commercial fan project**, not affiliated with or endorsed by Standing Stone Games, Middle-earth Enterprises, the Tolkien Estate, or Garan. The map tiles are included for non-commercial fan use only; all rights to the game art remain with their owners. If you are a rights-holder and would like a change, please open an issue.
