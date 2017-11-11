module.exports = {
  rules: {
    "no-extra-semi": "warn",
    strict: "error",
    "no-undef": "error"
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    "import/parser": "babel-eslint"
  },
  parserOptions: {
    sourceType: "module",
  }
};