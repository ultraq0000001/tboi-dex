# TBOI PockeDEX

A Pokédex-style Android app for browsing The Binding of Isaac items — searchable
list view, tap into a detail view with effect, quality rating, item pools, and
unlock info.

@AGENTS.md

See `REQUIREMENTS.md` for the planned content-scope expansion (Bosses,
Characters, Monsters, etc.) and feature backlog (camera item lookup, version
filter, personal collection stash) beyond this baseline. See `TODO.md` for
concrete, scheduled tasks dictated one at a time as work is planned.

## Stack

- Expo SDK 57 (React Native 0.86, React 19) + TypeScript, `blank-typescript` template
- React Navigation (`@react-navigation/native` + `native-stack`) for list → detail navigation
- No backend — all item data is bundled locally as a TypeScript module (no network calls)

## Commands

- `npm start` — launch Metro/Expo dev server (scan QR with Expo Go on Android)
- `npm run android` — launch dev server targeting a connected device/emulator
- `npx tsc --noEmit` — type-check
- `npx expo export --platform android` — verify the app bundles without a device (cleanup: delete `dist/` after)

## Structure

- `App.tsx` — navigation container + stack (`Home` → `ItemList` → `ItemDetail`, or `Home` → `ComingSoon`)
- `src/screens/HomeScreen.tsx` — landing page; category hub grid (Items + 13 planned categories)
- `src/screens/ComingSoonScreen.tsx` — generic placeholder for categories without data/screens yet
- `src/data/categories.ts` — category list backing the hub (`key`, `label`, `iconKey`, `implemented`)
- `src/data/categoryIcons.ts` — `iconKey → require(...)` registry for hub button icons (see Asset conventions below)
- `src/components/CategoryTile.tsx` — hub grid tile, dims + placeholder initials when unimplemented or no icon registered
- `src/types/item.ts` — `Item` shape: id, name, type (`passive`/`active`/`trinket`/`familiar`), quality (0–4), description, pools, unlock text, iconKey
- `src/types/navigation.ts` — `RootStackParamList` for typed navigation
- `src/data/items.ts` — the bundled item dataset (see below)
- `src/data/itemIcons.ts` — explicit `iconKey → require(...)` registry for bundled item icons (Metro needs static `require()` calls, so each new icon needs one line added here)
- `src/screens/ItemListScreen.tsx` — searchable 3-column grid
- `src/screens/ItemDetailScreen.tsx` — full item detail view
- `src/components/ItemTile.tsx` — grid tile (placeholder icon = item initials, no sprite assets yet)
- `src/components/QualityStars.tsx` — 0–4 star quality indicator

## Data set — important caveat

`src/data/items.ts` currently holds a **hand-curated starter set (~25 items)**,
not the full item pool (the real game has 700+ items as of Repentance). It
exists to exercise the schema/UI end-to-end with recognizable items (Sad
Onion, Brimstone, Sacred Heart, Mom's Knife, etc.).

Treat `quality` ratings and `unlock` text as best-effort approximations, not
verified against a wiki/data-mine source — double-check before treating them
as authoritative. To expand the data set: add more objects matching the
`Item` type in `src/types/item.ts`. Item `id` is an arbitrary slug (not the
in-game numeric ID) so it's safe to add entries without cross-referencing
exact game IDs.

Icon/sprite assets are added manually by the user into `assets/icons/`
(see `REQUIREMENTS.md` for the full per-entity folder map, e.g.
`assets/icons/items/passives/`). Icons only render once registered in
`src/data/itemIcons.ts` — items without a registry entry fall back to
placeholder initials in `ItemTile.tsx` / `ItemDetailScreen.tsx`. Filenames
don't need to match `iconKey`; the registry maps them explicitly (e.g.
`brimstone: require('../../assets/icons/items/passives/Brimstone_Icon.webp')`).

Hub button icons (the `HomeScreen` category tiles) are separate: a flat
`assets/icons/content/` folder, filename convention
`{category_name}-button.webp`, registered in `src/data/categoryIcons.ts`
the same way. Currently empty/unregistered, so hub tiles show placeholder
initials.

## Android config

- `app.json`: package id `com.kukushioku.tboipockedex`, dark UI style by default
- No EAS/build config set up yet — `npx expo run:android` or Expo Go is the
  current way to test on-device; a production build would need `eas build`
  configured first
