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
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js
        "airbnb",

        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/hooks.js
        "airbnb/hooks",

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        "plugin:@typescript-eslint/recommended",

        // https://github.com/prettier/eslint-config-prettier/blob/main/index.js
        // TODO: Remove this, since it's already configured through `plugin:prettier/recommended`?
        "prettier",

        // https://github.com/prettier/eslint-plugin-prettier/blob/master/eslint-plugin-prettier.js
        "plugin:prettier/recommended",
      ],
      plugins: ["deprecation"],
      rules: {
        // Warn against too many levels of nesting of blocks
        // Not disallowed because it would be too intrusive, but useful as a hint that it might be time to refactor
        // https://eslint.org/docs/latest/rules/max-depth
        "max-depth": ["warn", 3],

        // Warn against too many levels of nesting of callbacks
        // Not disallowed because it would be too intrusive, but useful as a hint that it might be time to refactor
        // https://eslint.org/docs/latest/rules/max-nested-callbacks
        "max-nested-callbacks": ["warn", 3],

        // Disabled because since React 17, importing React is not required for JSX transform: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-react": "off",

        // Disabled because since React 17, React does not have to be in scope: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/react-in-jsx-scope": "off",

        // Disabled in favor of "@typescript-eslint/no-shadow": https://typescript-eslint.io/rules/no-shadow
        // https://eslint.org/docs/latest/rules/no-shadow
        "no-shadow": "off",

        // Disallow variable declarations from shadowing variables declared in the outer scope, with support for TypeScript features
        // https://typescript-eslint.io/rules/no-shadow
        "@typescript-eslint/no-shadow": "error",

        // Disallow using extraneous dependencies
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": [
          "error",
          {
            // Usage of dev dependencies are allowed in these dev related files and folders
            devDependencies: [
              "src/lib/test.{ts,tsx}", // test helper
              "**/__tests__/**", // test folder
              "**/*.test.{ts,tsx}", // test file
              "**/.eslintrc.js", // eslint config
              "**/setupTests.ts", // setup tests file
              "**/vite.config.ts", // vite config
            ],
          },
        ],

        // Enforce consistent ordering of imports
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        "import/order": [
          "error",
          {
            // Sort in ascending alphabetical order ignoring letter casing
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],

        // Disallow using file extensions in imports
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
        "import/extensions": [
          "error",
          "never",
          // Enforce file extensions in these file types
          { svg: "always", json: "always", png: "always" },
        ],

        // Validate JSX has key prop when in array or iterator
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-key": [
          "error",
          {
            // Check if usage of shorthand fragments require a key
            checkFragmentShorthand: true,
          },
        ],

        // Disallow JSX generally
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-filename-extension": [
          "error",
          {
            // Allow JSX in these file types
            // TODO: Remove .js (and .jsx)?
            extensions: [".js", ".jsx", ".tsx"],
          },
        ],

        // Enforce explicit function return types
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            // Allow expressions without explicit function return types
            allowExpressions: true,
          },
        ],

        // Disallow explicit `any` types
        // https://typescript-eslint.io/rules/no-explicit-any
        "@typescript-eslint/no-explicit-any": "error",

        // Disallow unused variables
        // https://typescript-eslint.io/rules/no-unused-vars
        "@typescript-eslint/no-unused-vars": "error",

        // Disabled to avoid false positive reports of missing dependencies
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
        // TODO: Enable?
        "import/no-unresolved": "off",

        // Disabled becaise named imports are always preferred
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
        "import/prefer-default-export": "off",

        // Forbid default exports
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
        "import/no-default-export": "error",

        // Disabled because there is no actual problem with using something before it's defined
        // https://eslint.org/docs/latest/rules/no-use-before-define
        "no-use-before-define": "off",

        // Disallow dangling underscores in identifiers
        // https://eslint.org/docs/latest/rules/no-underscore-dangle
        "no-underscore-dangle": [
          "error",
          {
            // Allow dangling underscores in these identifiers
            allow: ["__typename"],
          },
        ],

        // Enforce consistent use of quotes
        // https://eslint.org/docs/latest/rules/quotes
        quotes: [
          "error",
          "double",
          {
            // Allow single quotes inside another quote
            avoidEscape: true,
          },
        ],

        // Disabled because we're using TypeScript
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        // TODO: Enable since it supports prop validation with TypeScript?
        "react/prop-types": "off",

        // Disabled because we're using TypeScript
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        // TODO: Enable since it supports prop validation with TypeScript?
        "react/require-default-props": "off",

        // Disallow unnecessary fragments
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
        "react/jsx-no-useless-fragment": [
          "error",
          {
            // Allow single expressions in fragments for type correctness: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md#allowexpressions
            allowExpressions: true,
          },
        ],

        // Enforce a specific function type for function components
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        "react/function-component-definition": [
          "error",
          {
            // Enforce arrow functions in named components
            namedComponents: "arrow-function",
            // Enforce arrow functions in named components
            unnamedComponents: "arrow-function",
          },
        ],

        // Warn against using deprecated code
        // Not disallowed because code can be deprecated at any moment and it should not break CI
        // https://github.com/gund/eslint-plugin-deprecation
        "deprecation/deprecation": "warn",
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
