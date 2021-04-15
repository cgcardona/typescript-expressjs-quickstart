# Typescript ExpressJS Quickstart

This repo is a basic [ExpressJS](https://expressjs.com) app with full test coverage, webpack integration and an accompanying [POSTMAN](https://www.postman.com) collection.

## Prerequisites

* [NodeJS](https://nodejs.org) >= v14.16.0
* [Yarn](https://classic.yarnpkg.com) v1.x
* [Postman](https://www.postman.com)

## Getting Started

First clone the repo.

```zsh
git clone https://github.com/cgcardona/typescript-expressjs-quickstart.git
cd typescript-expressjs-quickstart/
```

Install dependencies.

```zsh
yarn install
```

Run the tests.

```zsh
yarn test --coverage
```

Start the app. This transpiles .ts -> .js and watches all files. Anytime a file is saved everything is retranspiled.

```zsh
yarn start:dev
```

## Tests

[Supertest](https://www.npmjs.com/package/supertest) for HTTP assertions.

To run the tests and output a coverage report.

```zsh
yarn test --coverage
```