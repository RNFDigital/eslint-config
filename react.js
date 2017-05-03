/* @flow */
/* eslint-env commonjs */

module.exports = {
    extends: ['./eslint.js'],
    plugins: ['react'],
    parserOptions: {ecmaFeatures: {jsx: true}},
    rules: {
        // ESLint rules that conflict
        'no-extra-parens': 'off',

        // React
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-danger': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'off',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/style-prop-object': 'off',
        'react/void-dom-elements-no-children': 'error',

        // JSX
        'react/jsx-boolean-value': 'error',
        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
        'react/jsx-handler-names': ['error', {eventHandlerPrefix: 'on'}],
        'react/jsx-key': 'error',
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: false,
                shorthandFirst: false,
                shorthandLast: false,
                ignoreCase: false,
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
}
