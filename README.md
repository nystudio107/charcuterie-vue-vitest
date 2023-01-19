# Charcuterie Vue + Vitest example

This project uses [Vue 3](https://vuejs.org/), [Vite 4](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [TypeScript](https://www.typescriptlang.org/) to demonstrate test-driven development with Vitest.

The [`no-code-just-tests`](https://github.com/nystudio107/charcuterie-vue-vitest/tree/no-code-just-tests) branch has just the tests, so you can use TDD to write the code that satisfies them.

# Requirements

This project has its devops shrink-wrapped with the project via Docker, and runs inside of a Docker container. You do not need `npm` or `node` installed.

You'll need only the following installed locally:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

# Commands

To use this project, use the following `make` commands from the project root:

* `make dev` - Run the development server via `npm run dev`
* `make test` - Run tests via `npm run test`
* `make test-coverage` - Run tests with coverage via `npm run test-coverage`
* `make test-ui` - Run tests with the Vitest UI via `npm run test-ui`
* `make build` - Perform a dist build via `npm run build`
* `make npm xxx` - runs the `npm` command passed in, e.g.: `make npm install`
* `make ssh` - Open a shell inside of the container
* `make clean` - Remove node_modules/ & package-lock.json
* `make image-build` - Build the Docker image & run `npm install`

Port `3000` needs to be available to run the Vite dev server, and port `51204` needs to be available to run the Vitest UI.

Each command runs in a separate container, so you can use as many of them simultaneously as you want.
