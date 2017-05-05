# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

# [2.0.1] - 2017-05-04
## Changed
- Changed eslint-config-prettier to be a regular dependency
- Turned off flowtype/require-parameter-type as we haven't reached a decision yet
- Turned off react-native/no-color-literals as we don't think a single use colour needs to be extracted as a const

# [2.0.0] - 2017-04-28
## Added
- eslint-plugin-prettier
- Added flowtype/no-types-missing-file-annotation

## Changed
- Removed all rules that conflict with the prettier plugin
- Extended eslint.js from prettier config
- Updated packages

# [1.15.0] - 2017-04-24
## Added
- no-compare-neg-zero
- import/no-absolute-path
- import/extensions
- import/newline-after-import
- import/no-named-default
- promise/no-nesting
- promise/no-promise-in-callback
- promise/prefer-await-to-then
- promise/prefer-await-to-callbacks
- flowtype/no-primitive-constructor-types
- flowtype/object-type-delimiter
- jsdoc/check-tag-names
- jsdoc/check-types
- jsdoc/require-description-complete-sentence
- jsdoc/require-param-description
- jsdoc/require-parameter-type
- jsdoc/require-returns-description
- jsdoc/require-returns-type
- react/forbid-foreign-prop-types
- react/void-dom-elements-no-children
- react-native/no-inline-styles
- react-native/no-color-literals
- other import rules but turned off to keep a record
- other promise rules but turned off to keep a record
- other flowtype rules but turned off to keep a record
- other jsdoc rules but turned off to keep a record
- other react rules but turned off to keep a record
- other react-native rules but turned off to keep a record

## Changed
- import/no-extraneous-dependencies turned off (caused issues in Hydra)
- promise/always-return turned off
- flowtype/require-parameter-type turned on
- flowtype/sort-keys turned off
- react/no-unused-prop-types turned off
- react/prefer-stateless-function turned off
- react/prop-types turned off
- react/require-optimization turned off
- removed the deprecated flowtype/valid-syntax
- updated multiple packages
- added flow annotations where needed to support new rules

# [1.14.0] - 2017-27-02
## Added
- class-methods-use-this
- no-global-assign
- capitalized-comments
- func-name-matching
- lines-around-directive
- not-tabs
- object-curly-newline
- no-new-symbol

## Changed
- replaced no-spaced-func(deprecated) with func-call-spacing
- replaced prefer-reflect(deprecated)

# [1.13.0] - 2017-24-02
## Added
- jest/no-disabled-tests
- jest/no-focused-tests
- jest/no-identical-title

# [1.12.0] - 2017-02-10
## Changed
- disabled prefer-destructing of arrays

# [1.11.0] - 2017-02-02
## Added
- comma-dangle
- no-return-await
- no-useless-return
- prefer-promise-reject-errors
- require-await
- prefer-destructuring

# [1.10.0] - 2017-01-19
## Changed
- Event handler prefix changed from 'handle' to 'on'

## [1.9.0] - 2016-12-15
### Added
- eslint-plugin-babel
- eslint-plugin-moment-utc

## [1.8.0] - 2016-12-08
### Changed
- Update dependencies

## [1.7.0] - 2016-11-01
### Changed
- Turn off no-multi-comp

## [1.6.0] - 2016-10-31
### Changed
- Allow Arrow Functions in JSX
- eslint-plugin-eslint-comments 1.0.0

## [1.5.0] - 2016-10-31
### Changed
- Looser versions
- Pure lock file

## [1.4.0] - 2016-10-18
### Changed
- Upgrade plugins
- Remove deprecated rules
- Add new React rules

## [1.3.0] - 2016-10-16
### Added
- Check for function trailing commas
- Check for space around async

### Changed
- Update ESLint to 3.8.0

## [1.2.0] - 2016-10-15
### Added
- React Native globals

## [1.1.0] - 2016-10-12
### Added
- eslint-plugin-eslint-comments
- Setup Travis CI
- Yarn package manager

## [1.0.2] - 2016-10-07
### Changed
- Add instructions

## [1.0.1] - 2016-10-07
### Changed
- Refactoring

## [1.0.0] - 2016-10-07
### Added
- Initial import
