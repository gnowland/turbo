/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@turbo/eslint-config/next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "postcss.config.js",
    "tailwind.config.js",
    "next.config.mjs",
    "scripts/**",
  ],
  globals: {
    JSX: true,
    React: true,
    NodeJS: true,
  },
  overrides: [
    {
      files: [
        "./pages/**",
        "./turbo/generators/**",
        "theme.config.tsx",
        "app/**/layout.tsx",
        "app/**/page.tsx",
        "/app/api/**",
      ],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
