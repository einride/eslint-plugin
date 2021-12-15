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
        "prettier",
        "plugin:prettier/recommended",
      ],
      rules: {
        "max-depth": ["warn", 3],
        "max-nested-callbacks": ["warn", 3],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
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
          "error",
          {
            checkFragmentShorthand: true,
          },
        ],
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".js", ".jsx", ".tsx"] },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",
        "no-underscore-dangle": ["error", { allow: ["__typename"] }],
        quotes: ["error", "double", { avoidEscape: true }],
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
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
