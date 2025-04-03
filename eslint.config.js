import cypress from "eslint-plugin-cypress";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      cypress,
    },
    rules: {
      "no-console": "warn",
      "cypress/no-unnecessary-waiting": "error",
    },
  },
];
