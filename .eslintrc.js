module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    'linebreak-style': 'off',
    "import/no-unresolved": 0,

    "import/named": "off",
    "import/export": "off",
    "import/prefer-default-export": "off",
    "import/extensions": 0,

    "@typescript-eslint/explicit-function-return-type": "off",

    "react/button-has-type": 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        parser: "typescript",
      },
    ],
  },
}
