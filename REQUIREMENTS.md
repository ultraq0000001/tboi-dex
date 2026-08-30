# TBOI PockeDEX — Requirements & Roadmap

Tracks planned scope beyond the working baseline (searchable Item list/detail,
~25 seed items, Expo + React Navigation). See `CLAUDE.md` for current
structure/commands.

## Data set policy

Current ~25-item seed set is intentionally frozen — the user will extend it
manually over time using the existing `Item` shape in `src/types/item.ts`.
No further seeding work is planned here.

## Content scope

### Items (existing, needs a schema gap closed)

Item sub-types per the icon structure below: **Passives, Actives, Trinkets,
Pills**. The current `ItemType` in `src/types/item.ts` is
`'passive' | 'active' | 'trinket' | 'familiar'` — **it has no `'pill'`
value**, and `'familiar'` isn't reflected in the icon folder structure the
user requested. This needs a decision before pills can be added as data:

- Add `'pill'` to `ItemType`.
- Decide whether `familiar` stays a distinct type (icon folder
  `items/familiars` was created preemptively, matching existing schema) or
  gets folded into `passive`.

### New content categories (not started)

Each of the following needs its own TypeScript type, seed data, list/detail
screens, and a navigation entry — same pattern as `Item`. None of this is
built yet; treat this as a backlog, roughly in an order that reuses the
Item list/detail pattern most directly first:

- Achievements
- Bosses (Standard / Unlockable / Mini)
- Challenges
- Chapters
- Characters
- Mechanics
- Monsters
- Objects
- Pick Ups
- Rooms
- Sequences
- Stats
- Transformations

Bosses split into three sub-groups (standard, unlockable, mini) matching
the icon folders below — same three-way split as Items' sub-types.

A top-level navigation change (tabs or a category picker screen) will be
needed once more than one content type exists — the current stack only
knows about Items.

## Feature requirements

### 1. Camera-based item lookup

Point the camera at an in-game item pedestal/sprite and identify which item
it is. Scoping needed before implementation:

- Requires a reference image per item to match against — depends on the
  manually-added icon/sprite assets (see below), so this is naturally
  gated on icon coverage growing.
- Approach unresolved: on-device ML model (e.g. a small classifier bundled
  with the app) vs. calling a cloud vision API vs. simpler perceptual-hash/
  template matching against bundled sprites. Needs a decision once there's
  enough reference art to test against.
- Will need `expo-camera` (or equivalent) added as a dependency.

### 2. Filter by game version

Filter content by which game version introduced it (e.g. Vanilla / Wrath of
the Lamb / Rebirth / Afterbirth / Afterbirth+ / Repentance / Repentance+).
Needs:

- A `version` field added to `Item` (and every future content type's
  schema).
- A version-filter control on list screens, alongside the existing search.
- Canonical version enum/list to be confirmed before implementation.

### 3. Personal collection ("stash")

On an item's detail screen, a "Collected" button that adds it to a personal
stash; a new screen lists everything collected so far. Needs:

- Persistent local storage (`@react-native-async-storage/async-storage` or
  `expo-sqlite`) — nothing is persisted today, all state is in-memory.
- A `collected` boolean tracked per item id, toggle wired into
  `ItemDetailScreen`.
- A new `StashScreen` + navigation entry.
- Same pattern extends to every future content type once they exist.

## Asset directory structure

Base icon assets live under `assets/icons/`. Folders are created and empty
(`.gitkeep` placeholders) — drop image files directly into the matching
folder as they're sourced. No code currently loads from these paths; wiring
up actual image rendering (replacing the placeholder initials in
`ItemTile.tsx`) is follow-up work once files exist.

```
assets/icons/
  items/
    passives/
    actives/
    trinkets/
    pills/
    familiars/
  achievements/
  bosses/
    standard/
    unlockable/
    mini/
  challenges/
  chapters/
  characters/
  mechanics/
  monsters/
  objects/
  pickups/
  rooms/
  sequences/
  stats/
  transformations/
```

## Open questions

- `familiar` vs folding into `passive` (affects both schema and the
  `items/familiars` icon folder above).
- Canonical list of game versions for the version filter.
- Camera-lookup approach (on-device vs cloud vs template-matching) — revisit
  once icon coverage is large enough to test against.
