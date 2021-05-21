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
        "plugin:prettier/recommended",
      ],
      rules: {
        "react/jsx-uses-react": 0,
        "react/react-in-jsx-scope": 0,
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "import/extensions": [
          "error",
          "never",
          { svg: "always", json: "always", png: "always" },
        ],
        "react/jsx-key": [
          2,
          {
            checkFragmentShorthand: true,
          },
        ],
        "react/jsx-filename-extension": [
          1,
          { extensions: [".js", ".jsx", ".tsx"] },
        ],
        // Rules to remove to move to Airbnb Eslint Config
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-explicit-any": 2,

        // Handled by tsconfig.json
        "@typescript-eslint/no-unused-vars": 2,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,

        // Handled by tsconfig.json
        "no-use-before-define": 0,
        "no-underscore-dangle": [2, { allow: ["__typename"] }],
        quotes: [2, "double", { avoidEscape: true }],
        "react/prop-types": 0,
        "react/require-default-props": 0,
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
      env: {
        browser: true,
      },
    },
  },
};
