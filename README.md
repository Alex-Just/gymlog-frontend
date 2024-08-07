# Gymlog Frontend

[![Backend](https://img.shields.io/badge/backend-repo-blue)](https://github.com/Alex-Just/gymlog-backend)
[![CI](https://github.com/Alex-Just/gymlog-frontend/actions/workflows/ci.yml/badge.svg?branch=stage)](https://github.com/Alex-Just/gymlog-frontend/actions/workflows/ci.yml)

Gymlog is a fitness application that helps users track their workouts, monitor progress, and stay motivated. This repository contains the frontend of the Gymlog application, built with React Native.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Atomic Design](#atomic-design)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Workout Tracking**: Log exercises, sets, and reps for different workouts.
- **Progress Monitoring**: View progress over time with charts and stats.
- **Custom Routines**: Create and manage custom workout routines.
- **Profile Management**: Update personal information and track personal bests.

## Technologies Used

- **React Native**: For building cross-platform mobile applications.
- **TypeScript**: For type-safe development.
- **React Navigation**: For navigating between screens.
- **react-native-mmkv**: For state management.
- **Reactotron**: For debugging and inspecting state.
- **Jest**: For unit testing.
- **Eslint & Prettier**: For code linting and formatting.
- **Patch-package**: For managing patches to npm packages.

## Project Structure

The project follows a structured and organized layout to ensure scalability and maintainability. Here are some important directories and files:

```plaintext
src
├── App.tsx
├── components
│   ├── atoms
│   │   ├── Avatar
│   │   ├── Button
│   │   ...
│   ├── molecules
│   │   ├── ButtonGroup
│   │   ├── HeaderButtons
│   │   ...
│   ├── organisms
│   │   ├── TabBarIcon
│   │   ...
│   └── templates
│       ├── SafeScreen
│       ...
├── navigators
│   ├── Application
│   └── TabNavigator
├── screens
│   ├── Home
│   │   └── Home.tsx
│   ├── Profile
│   │   └── Profile.tsx
│   ├── Routines
│   │   ├── Routines.styles.ts
│   │   └── Routines.tsx
│   │   ...
├── services
│   ├── instance.ts
│   ├── routines
│   │   ...
│   └── users
│       ...
├── theme
│   ├── ThemeProvider
│   │   ...
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   ├── backgrounds.ts
│   ├── borders.ts
│   ├── components.ts
│   ├── fonts.ts
│   ├── gutters.ts
│   ├── hooks
│   │   └── useTheme.ts
│   ├── index.ts
│   └── layout.ts
├── translations
│   ├── en/
│   ├── fr/
└── types
    ├── guards
    ├── schemas
    └── theme
```

- **src/App.tsx**: The entry point of the application.
- **src/components**: Contains reusable UI components following the atomic design methodology.
- **src/navigators**: Manages the navigation logic of the app.
- **src/screens**: Contains the main screens/views of the application.
- **src/services**: API service calls and business logic.
- **src/theme**: Theming and styling related files.
- **src/translations**: Localization files.
- **src/types**: TypeScript type definitions.

## Atomic Design

The project implements the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology to create a scalable and maintainable UI component library. Components are divided into:

- **Atoms**: Basic building blocks (e.g., buttons, inputs).
- **Molecules**: Combinations of atoms (e.g., form groups, cards).
- **Organisms**: Groups of molecules forming distinct sections of the UI (e.g., navigation bars, sidebars).
- **Templates**: Page-level components that combine organisms to form a complete screen.

## Getting Started

### Prerequisites

- Node.js
- Yarn
- React Native CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Alex-Just/gymlog-frontend.git
cd gymlog-frontend
```

2. Install dependencies:

```bash
yarn install
```

3. Apply patches:

```bash
npx patch-package
```

4. Run the application:

```bash
npx react-native run-android # For Android
npx react-native run-ios     # For iOS
```

## Contributing

We welcome contributions to improve Gymlog. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Open a pull request.

Ensure your code adheres to the existing style and passes linting and testing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
