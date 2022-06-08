"use strict"

module.exports = {
  configs: {
    default: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      ignorePatterns: [".eslintrc.js"],
      extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
      ],
      plugins: ["deprecation"],
      rules: {
        "max-depth": ["warn", 3],
        "max-nested-callbacks": ["warn", 3],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        // Make it flexible to use typescript enum
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        // Forbid the use of extraneous packages
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              "src/lib/test.ts", // test helper
              "**/__tests__/**", // test folder
              "**/*.test.{ts,tsx}", // test file
              "**/.eslintrc.js", // eslint config
              "**/setupTests.ts", // setup tests file
              "**/vite.config.ts", // vite config
            ],
          },
        ],
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "import/extensions": ["error", "never", { svg: "always", json: "always", png: "always" }],
        "react/jsx-key": [
          "error",
          {
            checkFragmentShorthand: true,
          },
        ],
        "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "no-use-before-define": "off",
        "no-underscore-dangle": ["error", { allow: ["__typename"] }],
        quotes: ["error", "double", { avoidEscape: true }],
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-no-useless-fragment": [
          "error",
          {
            allowExpressions: true,
          },
        ],
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "deprecation/deprecation": "error",
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
}
