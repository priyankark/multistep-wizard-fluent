module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'standard',
    'plugin:prettier/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react'
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    React: 'readable',
    JSX: 'readable',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jest'],
  rules: {
    'no-use-before-define': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  },
};