module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-prettier/recommended',
    'next/core-web-vitals',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'react/function-component-definitions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts'] }],
    'react/jsx-in-jsx-scooped': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
  },
};
