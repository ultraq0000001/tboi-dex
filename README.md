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
src/
├── app/           # App configuration and navigation setup
├── components/    # Reusable UI components
├── data/          # Data models, API calls, utilities
├── screens/       # Screen components for React Navigation
└── types/         # TypeScript type definitions

utils/             # Utility functions and helpers
assets/            # Images, icons, and templates
```

## Features & Capabilities

- Cross-platform support (iOS, Android, Web)
- iOS tablet support enabled
- Custom navigation structure using React Native Stack Navigator
- Responsive design with dark mode interface
- Web scraping capabilities for data fetching
- TypeScript-first development for type safety

## Development

### Scripts

| Script | Description |
|--------|-------------|
| `start` | Start Expo development server |
| `android` | Start development server for Android |
| `ios` | Start development server for iOS |
| `web` | Start development server for Web |

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

## License

Private project - Proprietary code.
