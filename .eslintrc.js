module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': [
      0,
      {
        trailingComma: 'es5',
        //to enable single quotes
        singleQuote: true,
        semi: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
