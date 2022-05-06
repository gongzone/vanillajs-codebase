const { off } = require('process');

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },

  ignorePatterns: ['**/*.js', 'declarations.d.ts'],

  plugins: ['@typescript-eslint'],

  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
  ],

  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-plusplus': 'off',
    'import/first': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.common.js',
      },
    },
  },
};
