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

Wire categories with icons in assets/icons/content/{category_name}-button.webp

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
requested `assets/icons/content/{category_name}-button.webp` convention via
a `categoryIcons.ts` registry (same pattern as `itemIcons.ts`) — currently
empty since no button icons have been supplied yet, so all tiles show
placeholder initials until icons are added and registered.
