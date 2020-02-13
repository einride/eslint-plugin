# eslint-plugin-einride

Einride ESLint rules

## Installation

You need both this plugin and ESLint installed.

```bash
yarn add eslint@6.8.0
yarn add ssh://git@github.com:einride/einride-eslint-plugin.git#5f56a246667abdea3ea26169ed8a97a67a66a784
```

## Usage

Add `einride` to the plugins section of your `.eslintrc.js` configuration file. You can omit the `eslint-plugin-` prefix:

```js
module.exports = {
  extends: [
    "plugin:einride/default"
  ]
};
```
