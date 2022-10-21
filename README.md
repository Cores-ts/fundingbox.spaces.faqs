# Documentation

The documentation is built using [Docusaurus 2](https://docusaurus.io/). The deployment is done through a centralized build from [FundingBox Central KB](https://github.com/Cores-ts/fundingbox.central.kb). To run a local instance the [FB WIKI CLI](https://github.com/Cores-ts/fundingbox.wiki.cli) is used.

## Prerequisites

- [Node.js v14.14+](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/getting-started/install)

## Installation

```console
yarn
```

This command installs all necessary dependencies.

## Local Development

```console
yarn start
```

This command starts a local, wiki themed development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Including .md file

```console
{@import <file path>}
```

Example:

```console
{@import ../../../../bindings/wasm/docs/api-reference}
```