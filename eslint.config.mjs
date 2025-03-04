import { fixupConfigRules } from "@eslint/compat";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const compat     = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["./src/app/services/subgraph/generated.ts"],
  }, ...fixupConfigRules(compat.extends(
    "plugin:prettier/recommended",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
  )).map(config => ({
    ...config,
    files: ["**/*.ts"],
  })), {
    files: ["**/*.ts"],

    plugins: {
      "unused-imports": unusedImports,
    },

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
    },

    rules: {
      "@angular-eslint/directive-selector": [
        "error", {
          type: "attribute",
          prefix: ["iq"],
          style: "camelCase",
        },
      ],

      "@angular-eslint/component-selector": [
        "error", {
          type: "element",
          prefix: ["iq"],
          style: "kebab-case",
        },
      ],

      "no-duplicate-imports": "error",
      "import/prefer-default-export": 0,
      "import/extensions": 0,
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/no-named-as-default": "off",
      "import/export": "warn",

      "import/order": [
        "error", {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "no-unused-vars": "off",
      eqeqeq: "error",
      "no-undef-init": "error",
      "prefer-destructuring": "warn",
      "no-class-assign": "error",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      "unused-imports/no-unused-vars": [
        "warn", {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  }, ...fixupConfigRules(compat.extends("plugin:@angular-eslint/template/recommended")).map(config => ({
    ...config,
    files: ["**/*.html"],
  })), {
    files: ["**/*.html"],
    rules: {},
  }, ...fixupConfigRules(compat.extends("plugin:prettier/recommended")).map(config => ({
    ...config,
    files: ["**/*.html"],
    ignores: ["**/*inline-template-*.component.html"],
  })), {
    files: ["**/*.html"],
    ignores: ["**/*inline-template-*.component.html"],

    rules: {
      "prettier/prettier": [
        "error", {
          parser: "angular",
        },
      ],
    },
  },
];
