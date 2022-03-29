module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['prettier'],
  globals: {
    defineProps: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
