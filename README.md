# eslint-plugin-einride

Einride ESLint rules

## Installation

You need both this plugin and ESLint installed.

```bash
yarn add eslint@6.8.0
yarn add ssh://git@github.com:einride/eslint-plugin.git#master
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

Add an entry to `scripts` in `package.json`

```json
{
  "scripts": {
    "lint": "eslint './src/**/*.{ts,tsx}'"
   }
}
```

Run with `yarn lint` or `yarn lint --fix`
