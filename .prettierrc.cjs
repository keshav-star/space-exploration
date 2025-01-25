module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)', // React-related imports
    '', // Blank line
    '<THIRD_PARTY_MODULES>', // Third-party libraries
    '', // Blank line
    '^@/', // Local imports starting with @/
    '^[./]', // Local imports starting with ./ or /
    '', // Blank line
    '.css$', // CSS imports
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'tsx',
    'ts',
    'decorators-legacy',
  ],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};
