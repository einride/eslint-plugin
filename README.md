# @einride/eslint-plugin

[![license](https://img.shields.io/npm/l/@einride/eslint-plugin.svg)](https://github.com/einride/eslint-plugin/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@einride/eslint-plugin.svg)](https://www.npmjs.com/package/@einride/eslint-plugin) [![total npm downloads](https://img.shields.io/npm/dt/@einride/eslint-plugin.svg)](https://www.npmjs.com/package/@einride/eslint-plugin)

This package provides an extensible ESLint configuration used by Einride.

## Installation

Install this ESLint plugin together with its peer dependencies as dev dependencies:

```bash
# npm
npm install @einride/eslint-plugin eslint prettier --save-dev

# yarn
yarn add @einride/eslint-plugin eslint prettier --dev
```

## Usage

### Enable all default rules

Add `plugin:@einride/default` to the `extends` array in your ESLint configuration file. In `.eslintrc.js`:

```js
module.exports = {
  extends: ["plugin:@einride/default"],
};
```

Note that you can omit the `/eslint-plugin` part of the package name, since it will be automatically assumed by ESLint.

To override a rule, add it to the `rules` object:

```js
module.exports = {
  extends: ["plugin:@einride/default"],
  rules: {
    "no-restricted-globals": "off",
  },
};
```

### Enable a subset of rules

Add `@einride` to the `plugins` array in your ESLint configuration file. In `.eslintrc.js`:

```js
module.exports = {
  plugins: ["@einride"],
};
```

Then configure the rules you want to use in the `rules` object:

```js
module.exports = {
  plugins: ["@einride"],
  rules: {
    "react/jsx-curly-newline": "error",
  },
};
```

## License

@einride/eslint-plugin is licensed under the [MIT License](LICENSE).
