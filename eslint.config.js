import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.es2015,
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-cond-assign": 0,
      "no-fallthrough": ["error", {"commentPattern": "break omitted"}],
    },
  },
];
