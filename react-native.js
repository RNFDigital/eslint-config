/* @flow */
/* eslint-env commonjs */

module.exports = {
    extends: ['./react.js'],
    plugins: ['react-native'],
    globals: {
        __DEV__: false,
        alert: false,
        cancelAnimationFrame: false,
        cancelIdleCallback: false,
        clearImmediate: false,
        clearInterval: false,
        clearTimeout: false,
        console: false,
        fetch: false,
        requestAnimationFrame: false,
        requestIdleCallback: false,
        setImmediate: false,
        setInterval: false,
        setTimeout: false,
    },
    rules: {
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'off',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'off',
    },
}
