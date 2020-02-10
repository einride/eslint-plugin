# eslint-plugin-einride

Einride Eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-einride`:

```
$ npm install eslint-plugin-einride --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-einride` globally.

## Usage

Add `einride` to the plugins section of your `.eslintrc.js` configuration file. You can omit the `eslint-plugin-` prefix:

```js
module.exports = {
  extends: [
    "plugin:einride/default"
  ]
};
```
