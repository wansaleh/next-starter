module.exports = {
  extends: ['alloy', 'alloy/react'],
  plugins: ['simple-import-sort'],
  globals: {
    graphql: false,
    tw: true,
    document: true,
    window: true,
    fetch: true
  },
  rules: {
    'global-require': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
};
