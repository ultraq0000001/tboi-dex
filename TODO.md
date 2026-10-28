# TBOI PockeDEX — To-Do

Concrete, ready-to-schedule development tasks, dictated one at a time. For
broader scope/backlog context (why each category exists, feature scoping)
see `REQUIREMENTS.md`.

## Done

### 1. Replace main page with a content-category hub

App currently opens directly into the Items list (`ItemListScreen` is the
initial route in `App.tsx`). Change the landing page to a category menu
instead, listing:

- Achievements
- Bosses
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

Wire categories with icons in assets/media/Content/{category_name}-button.webp

**Open question:** Items isn't in the list above, but it's the only
category with working data/screens today. Assuming it still gets its own
tile on the hub (just not repeated in this list since it already exists) —
flag if that's wrong.

**Implementation note:** none of the 13 categories above have a schema,
data, or screens yet (tracked as not-started in `REQUIREMENTS.md`). Tapping
into one before its data exists will need some placeholder/"coming soon"
treatment rather than a broken navigation target.

**Resolution:** `HomeScreen` is now the initial route, showing Items plus
all 13 categories as tiles (14 total — went with the assumption above since
it wasn't corrected). Tapping Items opens the existing `ItemListScreen`;
every other category opens a generic `ComingSoonScreen`. Icons follow the
requested `assets/media/Content/{category_name}-button.webp` convention via
a `categoryIcons.ts` registry (same pattern as `itemIcons.ts`) — initially
empty since no button icons had been supplied yet, so all tiles showed
placeholder initials until icons were added and registered.

### 2. Add Trinkets to the category hub

Add a "Trinkets" tile to the home hub, placed directly after "Items", with
`Trinkets-button.webp` as its element icon (`src/data/categories.ts` +
`src/data/categoryIcons.ts`).

### 3. Relocate hub icon assets

Move `/assets/icons/content` to `/assets/media/Content` and refactor the
fast `require()` paths + docs to the new location.

### 4. Implement the Trinkets category (mirrors Items/Collectibles)

Full Trinkets implementation wired end-to-end, following the item pattern:

- `src/types/trinket.ts` — `Trinket` type (id, name, quote, effect, unlock,
  quality, pools, iconKey, addedIn, synergies)
- `src/data/trinkets.ts` — loads/normalizes `trinkets_rebirth.json` (60 trinkets)
- `src/data/generatedTrinketIcons.ts` (via `scripts/generate-trinket-icons.mjs`)
  + `src/data/trinketIcons.ts` — id-based icon registry under
  `assets/media/Trinkets/` (`trinket_<id>_icon.png`; 59 of 60 present,
  "???'s Soul" degrades to initials)
- `src/data/icons.ts` — merged item + trinket registry consumed by `PixelIcon`
- `src/components/TrinketTile.tsx`, `src/screens/TrinketListScreen.tsx`
  (search grid), `src/screens/TrinketDetailScreen.tsx`
- Routing: `TrinketList`/`TrinketDetail` added to `App.tsx` +
  `src/types/navigation.ts`; the home Trinkets tile now navigates to the list;
  `implemented: true` in `categories.ts`

### 5. Redesign the Item Detail page

Reordered Item Detail content to: icon → `#<id>` + name → quote → colored type
→ quality stars → effect (`item_effect`) → unlock → synergies ("None" when
empty) → found-in pools. Added `itemId`, `effect`, and `synergies` to the
`Item` type + `items.ts` mapping; extracted shared `TYPE_LABELS`/`TYPE_COLORS`
into `src/data/itemTypes.ts` (used by `ItemTile` and the detail screen).

### 6. Add 6 mocked categories to the hub (alpha scope)

Added mock implementations for Achievements, Familiars, Challenges, Objects, Pickups, Pills:

- `src/types/{achievement,familiar,challenge,object,pickup,pill}.ts` — simple mock types
- `src/data/{achievements,familiars,challenges,objects,pickups,pills}.ts` — 5 mock entries each
- `src/screens/*ListScreen.tsx` + `src/screens/*DetailScreen.tsx` — searchable list + detail
- Routing added to `App.tsx` + `src/types/navigation.ts`
- `HomeScreen` routes implemented categories to their list screens; others to `ComingSoon`
- `categories.ts`: marked achievements/challenges/objects/pickups/familiars/pills as `implemented: true`
- Note: `categoryIcons.ts` does NOT yet require `Familiars-button.webp` / `Pills-button.webp` — those files don't exist in `assets/media/Content/` yet, so tiles fall back to placeholder initials

## Backlog (not yet scheduled)

- EAS cloud build setup: create free expo.dev account, `npx eas-cli login`, `npx eas-cli init` (links project, adds `extra.eas.projectId` to `app.json`), then `npx eas-cli build --profile development --platform android` to produce the alpha APK. EAS has a free ("Starter") tier with a monthly build-minute allowance; check expo.dev/pricing for current limits.
- Produce alpha .apk (Items + Trinkets + 6 mocked categories).
- Asset rearrangement: icons live in `assets/icons` (gitignored, ~10 files only); missed icons need downloading, duplicates deleted, assets moved to `assets/media/Content/` for hub buttons and `assets/media/Collectibles/`/`assets/media/Trinkets/` for item sprites.
- Play Store release signing — lowest priority, separate milestone.
