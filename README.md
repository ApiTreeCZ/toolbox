<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# Toolbox

### Shared configurations and utilities for ApiTree projects

Powered by [Turbo](https://turbo.build/repo/docs)

</div>

## Getting Started

### Prerequisites

- node.js `>=20`
- pnpm `>=8`

> **Note:** This repository contains [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) packages.

### Installation

```bash
git clone git@github.com:ApiTreeCZ/toolbox.git
cd toolbox
pnpm install
```

### Workspaces

This monorepo is structured as follows:

- `packages/`
  - `cli/`: Contains the CLI for ApiTree projects.
  - `eslint-config/`: Contains the ESLint configurations.
  - `prettier-config/`: Contains the Prettier configuration.
  - `testing-library/`: Contains the React Testing Library setup.
  - `ts-config/`: Contains the TypeScript configurations.
  - `ts-utils/`: Contains the TypeScript utility functions.
  - `typedoc-config/`: Contains the TypeDoc configuration.
  - `vitest-config/`: Contains the Vitest configurations.

## Authors

- Vít Rozsíval ([vit.rozsival@apitree.cz](mailto:vit.rozsival@apitree.cz))

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see
the [tags on this repository](https://github.com/ApiTreeCZ/toolbox/tags).

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull
requests.
