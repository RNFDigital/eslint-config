/* @flow */
/* eslint-env commonjs */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        browser: false,
        node: false,
        commonjs: false,
        'shared-node-browser': false,
        es6: true,
        worker: false,
        amd: false,
        mocha: false,
        jasmine: true,
        jest: true,
        phantomjs: false,
        protractor: false,
        qunit: false,
        jquery: false,
        prototypejs: false,
        shelljs: false,
        meteor: false,
        mongo: false,
        applescript: false,
        nashorn: false,
        serviceworker: false,
        atomtest: false,
        embertest: false,
        webextensions: false,
        greasemonkey: false,
    },
    plugins: [
        'flowtype',
        'import',
        'promise',
    ],
    settings: {
        'import/ignore': [
            'node_modules',
            '.png',
            '.jpg',
            '.json',
            '.html',
        ],
        flowtype: {
            onlyFilesWithFlowAnnotation: false,
        },
    },
    rules: {
        // Possible Errors
        'no-cond-assign': ['error', 'always'],
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': ['error', 'all'],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'error',
        'valid-typeof': 'error',

        // Best Practices
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        complexity: ['error', 3],
        'consistent-return': 'error',
        curly: ['error', 'all'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': ['error', {
            allowKeywords: true,
        }],
        eqeqeq: 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': ['error', {
            allowLoop: true,
            allowSwitch: true,
        }],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['error', {
            props: true,
        }],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        radix: 'error',
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        yoda: 'error',

        // Strict Mode
        strict: 'error',

        // Variables
        'init-declarations': ['error', 'always'],
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'error',

        // Node.js
        'callback-return': ['error', ['callback', 'cb', 'next']],
        'global-require': 'off',
        'handle-callback-err': ['error', '^(err|error)$'],
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'error',
        'no-sync': 'error',

        // Stylistic Issues
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false,
        }],
        camelcase: ['error', {
            properties: 'always',
        }],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-names': 'error',
        'func-style': ['error', 'expression'],
        'id-blacklist': [
            'error',
            'data',
            'err',
            'e',
            'cb',
            'callback',
            'window',
        ],
        'id-length': 'off',
        'id-match': 'off',
        indent: 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'lines-around-comment': 'error',
        'max-depth': ['error', 2],
        'max-len': ['error', {
            code: 120,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],
        'max-nested-callbacks': 'off',
        'max-params': ['error', 4],
        'max-statements': 'error',
        'max-statements-per-line': 'error',
        'newline-before-return': 'error',
        'newline-per-chained-call': 'error',
        'new-cap': 'off',
        'new-parens': 'error',
        'newline-after-var': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-restricted-syntax': ['error',
            'DoWhileStatement',
            'WhileStatement',
            'ForStatement',
            'BreakStatement',
            'ContinueStatement',
        ],
        'no-spaced-func': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
        }],
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'never'],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'as-needed', {
            numbers: true,
            keywords: true,
        }],
        quotes: ['error', 'single', 'avoid-escape'],
        'require-jsdoc': 'off',
        semi: ['error', 'never'],
        'semi-spacing': ['error', {
            before: false,
            after: true,
        }],
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'wrap-regex': 'error',

        // ECMAScript 6
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', {
            before: true,
            after: true,
        }],
        'constructor-super': 'error',
        'generator-star-spacing': ['error', {
            before: false,
            after: true,
        }],
        'no-class-assign': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-reflect': 'off',
        'prefer-template': 'error',
        'rest-spread-spacing': 'error',
        'require-yield': 'error',
        'sort-imports': ['error', {
            ignoreCase: true,
            memberSyntaxSortOrder: [
                'single',
                'multiple',
                'none',
                'all',
            ],
        }],
        'template-curly-spacing': 'error',

        // Import
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-amd': 'error',
        'import/imports-first': 'error',
        'import/no-duplicates': 'error',
        'import/prefer-default-export': 'error',

        // Promise
        'promise/catch-or-return': 'error',
        'promise/always-return': 'error',
        'promise/param-names': 'error',
        'promise/no-native': 'off',

        // Flow type
        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/define-flow-type': 'error',
        'flowtype/delimiter-dangle': ['error', 'only-multiline'],
        'flowtype/generic-spacing': ['error', 'never'],
        'flowtype/no-dupe-keys': 'error',
        'flowtype/no-weak-types': 'off',
        'flowtype/require-parameter-type': 'off',
        'flowtype/require-return-type': 'off',
        'flowtype/require-valid-file-annotation': [
            'error',
            'always', {
                annotationStyle: 'block',
            },
        ],
        'flowtype/semi': ['error', 'never'],
        'flowtype/sort-keys': 'error',
        'flowtype/space-after-type-colon': ['error', 'always'],
        'flowtype/space-before-generic-bracket': ['error', 'never'],
        'flowtype/space-before-type-colon': ['error', 'never'],
        'flowtype/type-id-match': 'off',
        'flowtype/union-intersection-spacing': ['error', 'always'],
        'flowtype/use-flow-type': 'error',
        'flowtype/valid-syntax': 'error',
    },
}
