module.exports = {
  rules: {
    semi: ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    'import/extensions': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': ['off', { unusedExports: true }],
    'import/prefer-default-export': 'off',

    'array-callback-return': 'error',
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'prefer-rest-params': 'error',
    radix: 'error',

    'no-alert': 'off',
    'no-continue': 'error',
    'no-empty': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-underscore-dangle': [
      'error',
      {
        enforceInMethodNames: false,
        allowAfterThis: true,
      },
    ],
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-escape': 'error',

    camelcase: 'warn',
    'consistent-return': 'error',
    'default-case': 'error',
    'global-require': 'off',
    'no-shadow': 'warn',
  },
};
