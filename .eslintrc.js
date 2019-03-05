module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    commonjs: true,
  },
  plugins: ['babel'],
  rules: {
    "react/prop-types": 0,
    "max-len": 0,
    "quotes": 0,
    "babel/quotes": ["error", "single"],
    "import/no-absolute-path": 0,
    "global-require": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "no-use-before-define": 0,
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": [
        "builtin", "external", "sibling", "parent", "index"
      ]
    }]
  }
};
