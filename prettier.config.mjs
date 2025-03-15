export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  trailingComma: 'es5',
  arrowParens: 'always',
  plugins: [],
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
  ],
  tailwindConfig: './tailwind.config.ts',
};
