module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
  },
  globals: {
    "cy": false,
    "Cypress": false,
    "describe": false,
    "context": false,
    "beforeEach": false,
    "afterEach": false,
    "it": false,
    "assert": false,
    "expect": false
  }
}
