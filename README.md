# @einride/eslint-plugin

[![license](https://img.shields.io/npm/l/@einride/eslint-plugin.svg)](https://github.com/einride/eslint-plugin/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@einride/eslint-plugin.svg)](https://www.npmjs.com/package/@einride/eslint-plugin)
[![total npm downloads](https://img.shields.io/npm/dt/@einride/eslint-plugin.svg)](https://www.npmjs.com/package/@einride/eslint-plugin)

Einride's default ESLint config

## Installation

Install `@einride/eslint-plugin` as a dev dependency:

```bash
yarn add @einride/eslint-plugin --dev
```

Make sure ESLint and Prettier are also installed in your project.

## Usage

### Enable all default rules

Add `plugin:@einride/default` to the `extends` array in your ESLint configuration file. In
`.eslintrc.js`:

```js
module.exports = {
  extends: ["plugin:@einride/default"],
}
```

Note that you can omit the `/eslint-plugin` part of the package name, since it will be automatically
assumed by ESLint.

To override a rule, add it to the `rules` object:

```js
module.exports = {
  extends: ["plugin:@einride/default"],
  rules: {
    "max-depth": "off",
  },
}
```

## Contribute

See [Contributing Guide](https://github.com/einride/eslint-plugin/blob/main/CONTRIBUTING.md).

## License

MIT
