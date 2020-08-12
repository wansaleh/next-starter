module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb', 'plugin:mdx/recommended', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  globals: {
    graphql: false,
    tw: true,
    Glider: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'array-callback-return': 0,
    'arrow-parens': 1,
    camelcase: 0,
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    // 'indent': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'lines-between-class-members': 0,
    'no-empty': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-useless-concat': 0,
    'operator-linebreak': 0,
    'prefer-destructuring': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react/jsx-wrap-multilines': [
    //   2,
    //   { declaration: false, assignment: false }
    // ],
    'react/no-multi-comp': 0,
    'react/no-danger': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'template-curly-spacing': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'no-unused-expressions': [
      1,
      {
        allowTaggedTemplates: true
      }
    ]
  }
};
