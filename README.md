# eslint-plugin-einride

Einride ESLint rules

## Installation

You need both this plugin and ESLint installed.

```bash
yarn add eslint@6.8.0
yarn add ssh://git@github.com:einride/eslint-plugin.git#5f56a246667abdea3ea26169ed8a97a67a66a784
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

## Developing

To try out rules without changing this repo, add them to your local `.eslintrc.js`.

```diff
 module.exports = {
   extends: [
     "plugin:einride/default"
   ],
+  rules: {
+    "no-restricted-globals": 0,
+  },
 };
 ```


Making changes to rules in this repository may follow the recommended path.

1. Make the change in this repository.

1. Push changes to branch.

1. Test install from branch using `yarn add ssh://git@github.com:einride/eslint-plugin.git#[branch name]`

1. Create Pull Request and get buy in from peers.

1. Ensure we release a new version and help ensuring we upgrade all projects using this plugin.


