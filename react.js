/* @flow */
/* eslint-env commonjs */

module.exports = {
    'extends': ['./eslint.js'],
    plugins: ['react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // ESLint rules that conflict
        'no-extra-parens': 'off',

        // React
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-prop-types': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
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
        'react/no-unused-prop-types': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-optimization': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/style-prop-object': 'off',

        // JSX
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': ['error', {
            nonEmpty: 'tag-aligned',
            selfClosing: 'tag-aligned',
        }],
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js'],
        }],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': ['error', {maximum: 1}],
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowBind: false,
        }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': ['error', {
            callbacksLast: false,
            shorthandFirst: false,
            shorthandLast: false,
            ignoreCase: false,
        }],
        'react/jsx-space-before-closing': ['error', 'always'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'error',
    },
}
