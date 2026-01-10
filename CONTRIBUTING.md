# Contributing to better-themes

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

## Prerequisites

This project uses [pnpm](https://pnpm.io/) and [Turborepo](https://turborepo.com/). Please ensure you have pnpm installed on your machine.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SaviruFr/better-themes.git
    cd better-themes
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run development servers:**
    ```bash
    pnpm dev
    ```

## Project Structure

- `web`: The documentation site.
- `better-themes`: The core library.
- `examples/*`: Various framework examples.

## Development Workflow

- **Linting & Formatting**: We use [Biome](https://biomejs.dev/) for linting and formatting.
  ```bash
  pnpm lint
  pnpm format
  ```

- **Making Changes**: 
  - Create a new branch for your changes.
  - If you're modifying `better-themes`, please add a changeset to describe your changes for the release notes.
    ```bash
    pnpm changeset
    ```

## Pull Request Process

1.  Ensure your code passes linting and tests.
2.  If applicable, add or update documentation.
3.  Submit a PR with a clear description of your changes.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

By contributing, you agree that your contributions will be licensed under its [MIT License](LICENSE.md).
