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
        "react/jsx-key": [
            1,
            {
                checkFragmentShorthand: true
            }
        ],
        // FixMe https://github.com/benmosher/eslint-plugin-import/issues/1558
        "import/extensions": ["error", "never", { "svg": "always" }],
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".tsx"] }
        ],
        // Rules to remove to move to Airbnb Eslint Config
        quotes: [2, "double", { avoidEscape: true }],
        "no-underscore-dangle": [2, { allow: ["__typename"] }],
        "react/prop-types": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "react/jsx-curly-brace-presence": 0,
        "react/jsx-boolean-value": 0,
        "prefer-destructuring": 0,
        "no-shadow": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "import/prefer-default-export": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "react/jsx-one-expression-per-line": 0,
        "no-restricted-syntax": 0,
        "react/no-array-index-key": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "prefer-template": 0,
        "react/jsx-wrap-multilines": 0,
        "react/jsx-props-no-spreading": 0,
        "no-restricted-globals": 0,
        "default-case": 0,
        "no-else-return": 0,
        "import/no-unresolved": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "object-shorthand": 0,
        "consistent-return": 0, // Seems to be in conflict with Eslint
        "import/no-named-as-default": 0,
        "no-nested-ternary": 0,
        "react/destructuring-assignment": 0,
        "react/no-render-return-value": 0,
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
