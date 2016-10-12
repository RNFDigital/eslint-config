# eslint-config
[![Travis](https://img.shields.io/travis/RNFDigital/eslint-config.svg?maxAge=3600)](https://travis-ci.org/RNFDigital/eslint-config)
[![npm](https://img.shields.io/npm/v/@rnfdigital/eslint-config.svg?maxAge=3600)](https://www.npmjs.com/package/@rnfdigital/eslint-config)

RNF Digital ESLint configuration

## Install
```sh
npm install --save-dev @rnfdigital/eslint-config
```

## Setup
```js
// .eslintrc.js
module.exports = {
    'root': true,
    'extends': '@rnfdigital/eslint-config',
}
```

## Flavours

| Flavour      | Extends                                |
|--------------|----------------------------------------|
| vanilla      | @rnfdigital/eslint-config              |
| node         | @rnfdigital/eslint-config/node         |
| react        | @rnfdigital/eslint-config/react        |
| react-dom    | @rnfdigital/eslint-config/react-dom    |
| react-native | @rnfdigital/eslint-config/react-native |

## Plugins

- https://github.com/mysticatea/eslint-plugin-eslint-comments
- https://github.com/gajus/eslint-plugin-flowtype
- https://github.com/benmosher/eslint-plugin-import
- https://github.com/xjamundx/eslint-plugin-promise
- https://github.com/yannickcr/eslint-plugin-react
- https://github.com/intellicode/eslint-plugin-react-native
