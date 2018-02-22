# eslint-config

[![Travis](https://img.shields.io/travis/RNFDigital/eslint-config.svg?maxAge=3600)](https://travis-ci.org/RNFDigital/eslint-config)
[![npm](https://img.shields.io/npm/v/@rnfdigital/eslint-config.svg?maxAge=3600)](https://www.npmjs.com/package/@rnfdigital/eslint-config)

RNF Digital ESLint configuration

## Install

```sh
yarn add --dev @rnfdigital/eslint-config babel-eslint eslint eslint-config-prettier eslint-plugin-babel eslint-plugin-eslint-comments eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jest eslint-plugin-jsdoc eslint-plugin-moment-utc eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-native prettier eslint-plugin-sort-imports-es6-autofix
```

## Setup

```js
// .eslintrc.js
module.exports = {
    root: true,
    // Pick a flavour
    // 'extends': '@rnfdigital/eslint-config',
    // 'extends': '@rnfdigital/eslint-config/node',
    // 'extends': '@rnfdigital/eslint-config/react',
    // 'extends': '@rnfdigital/eslint-config/react-dom',
    // 'extends': '@rnfdigital/eslint-config/react-native',
}
```

## Plugins

* https://github.com/mysticatea/eslint-plugin-eslint-comments
* https://github.com/gajus/eslint-plugin-flowtype
* https://github.com/benmosher/eslint-plugin-import
* https://github.com/xjamundx/eslint-plugin-promise
* https://github.com/yannickcr/eslint-plugin-react
* https://github.com/intellicode/eslint-plugin-react-native
* https://github.com/babel/eslint-plugin-babel
* https://github.com/wunderflats/eslint-plugin-moment-utc
* https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest
* https://github.com/prettier/eslint-plugin-prettier
* https://github.com/marudor/eslint-plugin-sort-imports-es6-autofix
