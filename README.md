# ViveUI

**ViveUI** is a React component library created by [ktcotz](https://github.com/ktcotz) for internal use. It includes a set of styled, reusable components and a CLI tool for downloading components to your projects.

---

## Contents

- [Installation](#installation)
- [Architecture](#architecture)
- [Usage](#usage)
- [Building](#building)
- [CLI](#cli)
- [Testing](#testing)
- [License](#license)

---

## Installation

You can install the package from npm :

```bash
npm install vive-ui
```

Or use the local build version.

## Architecture

This monorepo is organized into three main folders, each serving a distinct purpose:

### 1. `packages`

- **Purpose:**  
  Contains all reusable libraries and core packages that power the project.
- **Description:**  
  The main package here is `ui`, a React component library built with TypeScript. It includes:
  - UI components styled using **Tailwind CSS**.
  - Build system powered by **Rollup** for bundling and ers**Ter** for minification.
  - Testing with **Vitest**.
  - CLI utilities built with **Node.js** and **Inquirer**.
  - Path aliasing for cleaner imports using Rollup plugins.

- **Technologies used:**
  - React
  - TypeScript
  - Rollup + Terser
  - Tailwind CSS + PostCSS + Autoprefixer
  - Vitest
  - Node Fetch
  - Inquirer (CLI)
  - ESLint & Prettier

---

### 2. `docs`

- **Purpose:**  
  Documentation and style guides for the project.

- **Description:**  
  This folder contains NextJS setup for docs site.

- **Technologies used:**
  - NextJS
  - MDX for documentation
  - Tailwind CSS for consistent styling

## Usage

Import components directly from the package :

```bash
import { Button } from 'vive-ui';

function App() {
  return <Button>Click me</Button>;
}
```

## Building

The project uses Rollup to bundle the library:

```bash
  npm run build
```

The output files will be generated in the dist folder.

## CLI

The package includes a simple CLI tool to download components and utility files:

```bash
  npx vive-ui
```

Example commands:

- **add** — download a component to your local project

## Testing

Tests are run using Vitest:

```bash
  npm run test
```

Storybook is used for component preview and documentation:

```bash
  npm run storybook:dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
