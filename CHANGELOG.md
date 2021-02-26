# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).






## [Unreleased]
### Removed
- Remove `scss/comment-no-empty` because it breaks commenting blocks of code



## [2.0.0] - 2021-02-25
### Added
- Creation of `@absolunet/stylelint-config-core` - Core rules
- Creation of `@absolunet/stylelint-config-scss` - SCSS rules
- Creation of `@absolunet/stylelint-config-salesforce` - Salesforce rules

### Changed
- Support Node.js 10+
- Migration to @absolunet/tester 4
- Maintenance updates

#### Update to stylelint 13.11.0
- Added `declaration-block-no-duplicate-custom-properties`
- Added `alpha-value-notation`
- Added `hue-degree-notation`
- Added `color-function-notation`
- Added `selector-attribute-name-disallowed-list`
- Ignored `comment-pattern`
- Renamed `at-rule-blacklist` to `at-rule-disallowed-list`
- Renamed `at-rule-property-requirelist` to `at-rule-property-required-list`
- Renamed `at-rule-whitelist` to `at-rule-allowed-list`
- Renamed `comment-word-blacklist` to `comment-word-disallowed-list`
- Renamed `declaration-property-unit-blacklist` to `declaration-property-unit-disallowed-list`
- Renamed `declaration-property-unit-whitelist` to `declaration-property-unit-allowed-list`
- Renamed `declaration-property-value-blacklist` to `declaration-property-value-disallowed-list`
- Renamed `declaration-property-value-whitelist` to `declaration-property-value-allowed-list`
- Renamed `function-blacklist` to `function-disallowed-list`
- Renamed `function-url-scheme-blacklist` to `function-url-scheme-disallowed-list`
- Renamed `function-url-scheme-whitelist` to `function-url-scheme-allowed-list`
- Renamed `function-whitelist` to `function-allowed-list`
- Renamed `media-feature-name-blacklist` to `media-feature-name-disallowed-list`
- Renamed `media-feature-name-value-whitelist` to `media-feature-name-value-allowed-list`
- Renamed `media-feature-name-whitelist` to `media-feature-name-allowed-list`
- Renamed `property-blacklist` to `property-disallowed-list`
- Renamed `property-whitelist` to `property-allowed-list`
- Renamed `selector-attribute-operator-blacklist` to `selector-attribute-operator-disallowed-list`
- Renamed `selector-attribute-operator-whitelist` to `selector-attribute-operator-allowed-list`
- Renamed `selector-combinator-blacklist` to `selector-combinator-disallowed-list`
- Renamed `selector-combinator-whitelist` to `selector-combinator-allowed-list`
- Renamed `selector-pseudo-class-blacklist` to `selector-pseudo-class-disallowed-list`
- Renamed `selector-pseudo-class-whitelist` to `selector-pseudo-class-allowed-list`
- Renamed `selector-pseudo-element-blacklist` to `selector-pseudo-element-disallowed-list`
- Renamed `selector-pseudo-element-whitelist` to `selector-pseudo-element-allowed-list`
- Renamed `unit-blacklist` to `unit-disallowed-list`
- Renamed `unit-whitelist` to `unit-allowed-list`

#### Update to stylelint-declaration-strict-value 1.7.9
- Simplified `scale-unlimited/declaration-strict-value` implementation

#### Update to stylelint-order 4.1.0
- Added verbose names to `order/order` rule

#### Update to stylelint-scss 3.19.0
- Added `scss/no-global-function-names`
- Added `scss/comment-no-empty` replacing `comment-no-empty`
- Changed `scss/at-function-pattern` to allow private prefix `-`
- Changed `scss/at-mixin-pattern` to remove mandatory suffix
- Ignored `scss/dollar-variable-empty-line-after`
- Ignored `scss/dollar-variable-first-in-block` (covered by `order/order`)

### Removed
- Remove `@absolunet/stylelint-config-nwayo` package (Replaced by `@absolunet/stylelint-config-scss`)
- Remove distribution from git repository



## [1.3.1] - 2020-02-11
### Changed
- Update to stylelint 13.1.0
- Update to stylelint-declaration-strict-value 1.1.8
- Update to stylelint-order 4.0.0
- Update to stylelint-scss 3.14.2
- Update manager and tester
- Convert tests to Given-When-Then
- Maintenance updates



## [1.3.0] - 2019-11-04
### Changed
- Migration to @absolunet/manager 2 and @absolunet/tester 3
- Update to stylelint-order 3.1.1
- Update to stylelint-declaration-strict-value 1.1.6

#### Update to stylelint 11.1.1
- Added `unicode-bom` rule

#### Update to stylelint-scss 3.12.1
- Added `scss/at-each-key-value-single-line` rule
- Added `scss/at-if-no-null` rule
- Added `scss/at-import-partial-extension` rule
- Added `scss/at-rule-conditional-no-parentheses` rule
- Added `scss/dimension-no-non-numeric-values` rule
- Added `scss/function-quote-no-quoted-strings-inside` rule
- Added `scss/function-unquote-no-unquoted-strings-inside` rule
- Added `scss/map-keys-quotes` rule
- Added `scss/selector-no-union-class-name` rule
- Added `scss/no-duplicate-mixins` rule



## [1.2.1] - 2019-05-21
### Changed
- Maintenance updates
- Update to stylelint-scss 3.6.1
- Update to stylelint-declaration-strict-value 1.1.3

### Removed
- Removed `function-calc-no-invalid` rule because it conflicts with SCSS variables



## [1.2.0] - 2019-04-29
### Changed
- Maintenance updates
- Update to stylelint-scss 3.6.0
- Update to stylelint-order 3.0.0

#### Update to stylelint 10.0.1
- Added `function-calc-no-invalid` rule
- Added `at-rule-no-vendor-prefi` rule



## [1.1.1] - 2018-11-26
### Changed
- Group properties order
- META: Converted repository to a multi package structure




## [1.1.0] - 2018-10-26
### Changed
- Update to stylelint-order 1.0.0
- Maintenance updates

#### Update to stylelint 9.6.0
- Added `linebreaks` rule
- Added `no-empty-first-line` rule
- Added `inherit` as `-radius` possible value

#### Update to stylelint-scss 3.3.2
- Added `scss/no-duplicate-dollar-variables` rule while ignoring at-scopes




## [1.0.3] - 2018-06-22
### Added
- Added `-radius` to `scale-unlimited/declaration-strict-value` rule

### Changed
- Update to stylelint-scss 3.1.3



## [1.0.2] - 2018-06-18
### Fixed
- Removed `scss/no-duplicate-dollar-variables` rule because it is too restrictive



## [1.0.1] - 2018-06-18
### Fixed
- Correct `scss/no-duplicate-dollar-variables` rule scope



## [1.0.0] - 2018-06-15
### Changed
- Maintenance updates

#### Update to stylelint 9.3.0
- Added `keyframes-name-pattern` rule

#### Update to stylelint-scss 3.1.1
- Added `scss/no-duplicate-dollar-variables` rule



## [0.1.2] - 2018-03-13
### Changed
- Update loader



## [0.1.1] - 2018-03-12
### Fixed
- META: Don't publish tests



## [0.1.0] - 2018-03-12
### Changed
- Update to stylelint 9.1.1
- Update to stylelint-order 0.8.1

#### Update to stylelint-scss 2.5.0
- Changed `scss/dollar-variable-colon-space-after` to `at-least-one-space`



## [0.0.3] - 2018-01-30
### Changed
- Misc adjustments



## [0.0.2] - 2018-01-24
### Fixed
- Correction to z-index



## [0.0.1] - 2018-01-24
### Added
- Initial






[Unreleased]: https://github.com/absolunet/stylelint-config/compare/2.0.0...HEAD
[2.0.0]:      https://github.com/absolunet/stylelint-config/compare/1.3.1...2.0.0
[1.3.1]:      https://github.com/absolunet/stylelint-config/compare/1.3.0...1.3.1
[1.3.0]:      https://github.com/absolunet/stylelint-config/compare/1.2.1...1.3.0
[1.2.1]:      https://github.com/absolunet/stylelint-config/compare/1.2.0...1.2.1
[1.2.0]:      https://github.com/absolunet/stylelint-config/compare/1.1.1...1.2.0
[1.1.1]:      https://github.com/absolunet/stylelint-config/compare/1.1.0...1.1.1
[1.1.0]:      https://github.com/absolunet/stylelint-config/compare/1.0.3...1.1.0
[1.0.3]:      https://github.com/absolunet/stylelint-config/compare/1.0.2...1.0.3
[1.0.2]:      https://github.com/absolunet/stylelint-config/compare/1.0.1...1.0.2
[1.0.1]:      https://github.com/absolunet/stylelint-config/compare/1.0.0...1.0.1
[1.0.0]:      https://github.com/absolunet/stylelint-config/compare/0.1.2...1.0.0
[0.1.2]:      https://github.com/absolunet/stylelint-config/compare/0.1.1...0.1.2
[0.1.1]:      https://github.com/absolunet/stylelint-config/compare/0.1.0...0.1.1
[0.1.0]:      https://github.com/absolunet/stylelint-config/compare/0.0.3...0.1.0
[0.0.3]:      https://github.com/absolunet/stylelint-config/compare/0.0.2...0.0.3
[0.0.2]:      https://github.com/absolunet/stylelint-config/compare/0.0.1...0.0.2
[0.0.1]:      https://github.com/absolunet/stylelint-config/releases/tag/0.0.1
