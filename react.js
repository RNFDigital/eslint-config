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
        'react/forbid-prop-types': 'error',
        'react/no-comment-textnodes': 'error',
        'react/no-danger': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-multi-comp': 'off',
        'react/no-string-refs': 'error',
        'react/no-unknown-property': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-extension': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/wrap-multilines': 'error',

        // JSX
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js'],
        }],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-indent-props': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': 'error',
        'react/jsx-no-bind': ['error', {
            allowArrowFunctions: true,
        }],
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': 'error',
        'react/jsx-space-before-closing': ['error', 'never'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
}
