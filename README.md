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
