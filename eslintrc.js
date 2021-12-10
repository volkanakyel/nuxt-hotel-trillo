module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersions: 2018,
  },
  plugins: ['prettier', 'vue'],

  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
  },
};
