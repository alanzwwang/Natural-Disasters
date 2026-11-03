# Natural Disasters 🌍

**Version:** V.1.6

<!-- WHATS-NEW:README:START -->
## 🆕 What's New in V.1.6

- NEW!!! Adult Mode: press "Switch to adult mode" at the top right of any page
- All 10 hazards rewritten as graduate-level courses: the physics, measurement, forecasting and risk reduction
- 10 technical lessons per hazard with worked exercises, plus detailed case studies of major historical disasters
- References for further reading in every course
- A calm, compact Arial design for grown-up readers, with new scientific pictures
- Kid Mode is still the default, and you can switch back any time

### Earlier updates

- **V.1.5:** NEW!!! This What's New pop-up: every update now tells you what changed
- **V.1.4:** Version badge on every page, New README

_When you open it, a What's New pop-up shows this once per version. Add `?whatsnew` to the address to see it again._
<!-- WHATS-NEW:README:END -->

An educational website about Earth's wildest events, with two modes:

- **Kid Mode** (the default): 10 kinds of natural disasters, each with Facts & History, Pictures, and Famous Disasters. All photos come from Wikimedia Commons, with a Picture Sources section on every slide. Open `index.html` to start.
- **Adult Mode** (`adult/`, or press "Switch to adult mode" at the top right of any page): the same 10 hazards as graduate-level courses — 10 technical lessons each with worked exercises, detailed case studies of major disasters, and references.

## How Adult Mode is made

- Each hazard's course is written in `adult-lessons/<Hazard>.md` (plain text: Introduction, Lesson N, Case Studies, References).
- `tools/adult/<hazard>.json` holds its one-line description and 2 pictures (files in `img/adult/`, from Wikimedia Commons, credited on each course's overview page).
- `node tools/build-adult.cjs` builds the `adult/` pages (style: `adult/adult.css`, Arial) and keeps the "Switch to adult mode" button on every kid page. Don't edit `adult/**/*.html` by hand.
