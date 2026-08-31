# TBOI PockeDEX

An Expo (v57) React Native mobile application built with TypeScript.

## Overview

TBOI PockeDEX is a cross-platform mobile application developed using Expo. The project uses React Navigation for navigation and utilizes the latest versions of React and React Native (v19.2.3 and v0.86.0 respectively).

## Tech Stack

- **Framework**: Expo SDK 57.0.0
- **Language**: TypeScript (strict mode enabled)
- **Navigation**: React Navigation (v7.3.14 - native, v7.18.6 - stack)
- **State Management**: [openai-agents](https://github.com/openai/openai-agents) v1.1.0
- **Web Scrapping**: Cheerio v1.2.0

## Project Structure

```
App.tsx               # Navigation container + stack
src/
├── components/       # Reusable UI components (PixelIcon, ItemTile, CategoryTile, QualityStars)
├── data/             # Bundled item data (items_rebirth.json, items.ts) + icon registries
├── screens/          # Home, ItemList, ItemDetail, ComingSoon
└── types/            # TypeScript type definitions (item, navigation)

assets/
  media/Collectibles/ # Item icon PNG sprites (source for generated registry)
  templates/          # HTML/CSS scraping templates
scripts/              # Data/icon generation tooling (e.g. generate-item-icons.mjs)
```

## Features & Capabilities

- Cross-platform support (iOS, Android, Web)
- iOS tablet support enabled
- Custom navigation structure using React Native Stack Navigator
- Responsive design with dark mode interface
- 341-item Rebirth dataset with searchable grid + detail view
- Native pixel-perfect (nearest-neighbor) icon rendering via `expo-pixel-perfect`
- Web scraping capabilities for data fetching
- TypeScript-first development for type safety

## Application pages

- **Home** — category hub grid (Items + 13 planned categories; non-Items open a "Coming Soon" placeholder)
- **Items** — searchable 3-column grid with type filter chips (All / Active / Passive / Familiars)
- **Item Detail** — effect, quality stars, item pools, unlock info
- **Coming Soon** — generic placeholder for categories without data yet

## Data

The app ships a **~341-item Rebirth dataset** bundled locally in
`src/data/items_rebirth.json`, loaded statically by `src/data/items.ts` (no
network calls). Item icons live in `assets/media/Collectibles/` as
`collectible_<id>_icon.png`.

Icon registrations are **auto-generated** — don't hand-edit
`src/data/generatedItemIcons.ts`. After adding/removing icon files or changing
the item JSON, regenerate it:

```bash
node scripts/generate-item-icons.mjs
```

`src/data/trinkets_rebirth.json` is a candidate dataset not wired up yet.

## Development

### Scripts

| Script | Description |
|--------|-------------|
| `start` | Start Expo development server |
| `android` | Build + run on Android (`expo run:android` — needs a native build/dev build) |
| `ios` | Build + run on iOS (`expo run:ios` — needs Xcode) |
| `web` | Start Expo dev server for Web |

### Available from CLI

```bash
# Run on specific platform
npm run android   # Android emulator/device
npm run ios       # iOS simulator/device
npm run web       # Web browser

# Start server without platform targeting
npm start
```

## Configuration

- **Package**: `com.kukushioku.tboipockedex` (Android)
- **Orientation**: Portrait
- **Interface Style**: Dark mode
- **Tablet Support**: Enabled (iOS only)

## Development Guidelines

- Follow TypeScript strict mode rules
- Use React Navigation patterns for navigation state management
- Integrate openai-agents for agent-based workflows when needed
- Handle data fetching using Cheerio APIs as required

## Pixel-perfect rendering

Item icons use **nearest-neighbor scaling** so the pixel art stays crisp. This is
handled by the `PixelIcon` component (`src/components/PixelIcon.tsx`), which wraps
the native `expo-pixel-perfect` module on iOS/Android and falls back to a plain
`<Image>` with `imageRendering: 'pixelated'` on web.

### Why a development build is required

`expo-pixel-perfect` ships **native (Kotlin/Swift) code** with an
`expo-module.config.json` for autolinking. Expo Go cannot load custom native
modules, so **it will not render pixel-perfect (and will error) in Expo Go**.
You must run a development build.

This machine has **no Android SDK / Android Studio / JDK installed**, so the
recommended path is a **cloud build with EAS** (no local toolchain needed).
A pre-configured `eas.json` (development / preview / production profiles) is
already in the repo.

First-time setup (interactive — requires your Expo account):

```bash
npx eas-cli login          # or: npx eas-cli logout first if re-linking
npx eas-cli init           # creates a project and adds extra.eas.projectId to app.json

# Build the development client in the cloud (installable APK linked in the terminal)
npx eas-cli build --profile development --platform android

# Then run the JS from the dev server:
npm start
```

> Note: `newArchEnabled` is set to `true` in `app.json` (SDK 57 requires the New
> Architecture for this module).

> Note: `PixelIcon` **degrades gracefully** — if the `ExpoPixelPerfect` native
> module isn't linked (e.g. running in Expo Go), it falls back to a regular
> `<Image>` instead of crashing. Pixel-perfect rendering only appears in a
> development build.

**Alternative – local build** (requires installing Android Studio + JDK, then
setting `ANDROID_HOME`):

```bash
npx expo prebuild        # generates native android/ + ios/ (autolinks the module)
npx expo run:android     # local compile + install on device/emulator
```

### Icon sizing

Pixel icons are tiny source sprites (typically 32×32). `PixelIcon` takes a
`size` prop and uses `scale={{ targetWidth: size, targetHeight: size }}` with
non-integer downscaling handled by the module's `scaleMode="nearest"`. To tweak
render sizes, edit the `size` passed in `src/components/ItemTile.tsx` (52) and
`src/screens/ItemDetailScreen.tsx` (96).

## License

Private project - Proprietary code.
