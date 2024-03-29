"use strict"

module.exports = {
  configs: {
    default: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      ignorePatterns: [".eslintrc.*js"],
      extends: [
        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js
        "airbnb",

        // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/hooks.js
        "airbnb/hooks",

        // Turns off rules that are enabled by `eslint-config-airbnb` that are not relevant in React 18 or higher: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/index.js#L171-L185
        "plugin:react/jsx-runtime",

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        "plugin:@typescript-eslint/recommended",

        // https://github.com/prettier/eslint-plugin-prettier/blob/master/eslint-plugin-prettier.js
        "plugin:prettier/recommended",
      ],
      plugins: [
        // https://github.com/gund/eslint-plugin-deprecation
        "deprecation",
      ],
      rules: {
        // Enforce explicit function return types
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            // Allow expressions without explicit function return types
            allowExpressions: true,
          },
        ],

        // Disallow empty functions
        // https://typescript-eslint.io/rules/no-empty-function
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",

        // Disallow empty interfaces
        // https://typescript-eslint.io/rules/no-empty-interface
        "@typescript-eslint/no-empty-interface": "error",

        // Disallow inferrable types
        // https://typescript-eslint.io/rules/no-inferrable-types
        "@typescript-eslint/no-inferrable-types": "error",

        // Disallow variable declarations from shadowing variables declared in the outer scope, with support for TypeScript features
        // https://typescript-eslint.io/rules/no-shadow
        "@typescript-eslint/no-shadow": "error",

        // Warn against using deprecated code
        // Not disallowed because code can be deprecated at any moment and it should not break CI
        // https://github.com/gund/eslint-plugin-deprecation
        "deprecation/deprecation": "warn",

        // Disallow using file extensions in imports
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
        "import/extensions": [
          "error",
          "never",
          // Enforce file extensions in these file types
          { svg: "always", json: "always", png: "always" },
        ],

        // Forbid default exports
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
        "import/no-default-export": "error",

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
              "**/vite.config.{ts,mts}", // vite config
              "**/vitest.config.{ts,mts}", // vitest config
              "**/rollup.config.{js,mjs}", // rollup config
              "**/*.stories.tsx", // storybook story files
              "**/*.cy.ts", // cypress test files
              "cypress.config.ts", // cypress config file
            ],
          },
        ],

        // Enabled by `eslint-config-airbnb`: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L35-L37
        // Disabled since we're not using Node or Webpack as module bundler
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
        "import/no-unresolved": "off",

        // Enforce consistent ordering of imports. Used in conjunction with `sort-imports`.
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

        // Enabled by `eslint-config-airbnb`: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L155-L157
        // Disabled becaise named imports are always preferred
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
        "import/prefer-default-export": "off",

        // Warn against too many levels of nesting of blocks
        // Not disallowed because it would be too intrusive, but useful as a hint that it might be time to refactor
        // https://eslint.org/docs/latest/rules/max-depth
        "max-depth": ["warn", 3],

        // Warn against too many levels of nesting of callbacks
        // Not disallowed because it would be too intrusive, but useful as a hint that it might be time to refactor
        // https://eslint.org/docs/latest/rules/max-nested-callbacks
        "max-nested-callbacks": ["warn", 3],

        // Enabled by `eslint-config-airbnb`: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js#L33-L34
        // Disabled in favor of "@typescript-eslint/no-shadow": https://typescript-eslint.io/rules/no-shadow
        // https://eslint.org/docs/latest/rules/no-shadow
        "no-shadow": "off",

        // Disallow dangling underscores in identifiers
        // https://eslint.org/docs/latest/rules/no-underscore-dangle
        "no-underscore-dangle": [
          "error",
          {
            // Allow dangling underscores in these identifiers
            allow: ["__typename"],
          },
        ],

        // Enabled by `eslint-config-airbnb`: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js#L53-L54
        // Disabled because there is no actual problem with using something before it's defined
        // https://eslint.org/docs/latest/rules/no-use-before-define
        "no-use-before-define": "off",

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

        // Disallow JSX generally
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-filename-extension": [
          "error",
          {
            // Allow JSX in these file types
            extensions: [".tsx"],
          },
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

        // Disallow unnecessary fragments
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
        "react/jsx-no-useless-fragment": [
          "error",
          {
            // Allow single expressions in fragments for type correctness: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md#allowexpressions
            allowExpressions: true,
          },
        ],

        // Enabled by `eslint-config-airbnb`: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L220-L226
        // Disabled because we're using TypeScript
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/prop-types": "off",

        // Enabled by `eslint-config-airbnb`: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L390-L394
        // Disabled because we're using TypeScript and don't want to enforce default props
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        "react/require-default-props": "off",

        // Enforce consistent ordering of import members. Used in conjunction with `import/order`.
        // https://eslint.org/docs/latest/rules/sort-imports
        "sort-imports": [
          "error",
          {
            // Ignore sorting of import declarations that are already handled by `import/order`: https://eslint.org/docs/latest/rules/sort-imports#ignoredeclarationsort
            ignoreDeclarationSort: true,
          },
        ],
      },
      overrides: [
        // Allow default exports in config files that require them
        {
          files: [
            "*.d.ts", // type declaration files might require default exports
            "*.stories.tsx", // storybook requires exporting component story metadata as default
            "rollup.config.{js,mjs}", // rollup requires exporting config as default
            "vite.config.{ts,mts}", // vite requires exporting config as default
            "vitest.config.{ts,mts}", // vite requires exporting config as default
            "cypress.config.ts", // cypress requires exporting config as default
          ],
          rules: {
            "import/no-default-export": "off",
          },
        },
      ],
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
