"use strict";

module.exports = {
  configs: {
    default: {
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:jest/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
      ],
      rules: {
        // FixMe https://github.com/benmosher/eslint-plugin-import/issues/1558
        "import/extensions": [
          "error",
          "never",
          { "svg": "always", "json": "always", "png": "always" }
        ],
        "react/jsx-key": [
          1,
          {
            checkFragmentShorthand: true
          }
        ],
        "react/jsx-filename-extension": [
          1,
          { extensions: [".js", ".jsx", ".tsx"] }
        ],
        // Rules to remove to move to Airbnb Eslint Config
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": 0,

        // Handled by tsconfig.json
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "consistent-return": 0, // Seems to be in conflict with Eslint
        "default-case": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "no-else-return": 0,
        "no-restricted-globals": 0,
        "no-restricted-syntax": 0,

        // Handled by tsconfig.json
        "no-undef": 0,
        "no-use-before-define": 0,
        "no-shadow": 0,
        "no-underscore-dangle": [2, { allow: ["__typename"] }],
        "object-shorthand": 0,
        "prefer-destructuring": 0,
        "prefer-template": 0,
        "quotes": [2, "double", { avoidEscape: true }],
        "react/jsx-boolean-value": 0,
        "react/jsx-curly-brace-presence": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-wrap-multilines": 0,
        "react/no-array-index-key": 0,
        "react/prop-types": 0,
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      },
      env: {
        "jest/globals": true,
        browser: true
      }
    }
  }
};
