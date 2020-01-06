module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'prettier',
      'prettier/react'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier',
      'import',
      "jsx-a11y",
    ],
    rules: {
      'prettier/prettier': 'error',
      "react/prop-types": "off",
      "react/no-typos": "off",
      "no-param-reassign": "off",
      "react/jsx-props-no-spreading": "off",
      "camelcase": "off",
      'react/jsx-filename-extension': [
          'warn',
          {
              extensions: ['.jsx', '.js']
          }
      ],
      'import/prefer-default-export': 'off',
      'no-console': ["error", { allow: ["tron"]}]
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                'rootPathPrefix': '~',
                'rootPathSuffix': 'src'
          },
        },
      },
  };
