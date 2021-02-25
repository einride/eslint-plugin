# @einride/eslint-plugin

This package provides an extensible ESLint configuration used by Einride.

## Installation

Install this ESLint plugin together with ESLint as dev-dependencies:

```bash
# npm
npm install eslint @einride/eslint-plugin --save-dev

# yarn
yarn add eslint @einride/eslint-plugin --dev
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
    "no-restricted-globals": 1,
  },
};
```

### Enable a subset of rules

Add `@einride` to the `plugin` array in your ESLint configuration file. In `.eslintrc.js`:

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
    "react/jsx-curly-newline": 0,
  },
};
```

## License

@einride/eslint-plugin is licensed under the [MIT License](LICENSE).
