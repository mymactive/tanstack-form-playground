module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.*", "plopfile.*"],
  plugins: ["react-refresh", "jest-dom", "testing-library"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
