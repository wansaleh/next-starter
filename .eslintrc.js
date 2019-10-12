module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  globals: {
    graphql: false,
    tw: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'array-callback-return': 'off',
    'arrow-parens': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // 'indent': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'lines-between-class-members': 'off',
    'no-console': 'off',
    'no-empty': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-multi-comp': 'off',
    'react/no-danger': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'template-curly-spacing': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'no-unused-expressions': [
      'warn',
      {
        allowTaggedTemplates: true
      }
    ]
  }
};
