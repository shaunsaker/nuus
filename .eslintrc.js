const ERROR = 'error'

// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ERROR,
    'simple-import-sort/imports': ERROR,
    'no-console': [ERROR, { allow: ['info', 'warn', 'error'] }],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    'padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
  },
  ignorePatterns: ['/dist/*'],
}
