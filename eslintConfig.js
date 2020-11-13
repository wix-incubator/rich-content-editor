module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['lodash', 'fp', 'jsx-a11y', 'prettier', 'tree-shaking'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['wix/react', 'plugin:jsx-a11y/strict'],
  settings: {
    react: {
      version: '16.6.3',
    },
  },
  rules: {
    semi: 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'tree-shaking/no-side-effects-in-initialization': 1,
    'quote-props': 'off',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': 'warn',
    'react/style-prop-object': 'off',
    'react/jsx-handler-names': 'off',
    camelcase: 'off',
    'max-params': 'off',
    'no-console': 'error',
    'no-use-before-define': 'off',
    'no-mixed-operators': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'react/jsx-no-bind': 0,
    'fp/no-loops': 'warn',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'no-misleading-character-class': 'off',
    'no-param-reassign': 'warn',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'prettier/prettier': 'error',
    'lodash/import-scope': [2, 'member'],
    'operator-linebreak': 'off',
    indent: 'off',
    curly: 'off',
  },
};
