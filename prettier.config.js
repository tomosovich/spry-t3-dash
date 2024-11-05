/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  printWidth: 80,
  tabWidth: 2,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
