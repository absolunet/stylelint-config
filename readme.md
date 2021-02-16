# stylelint config
[![tests](https://github.com/absolunet/stylelint-config/workflows/tests/badge.svg?branch=master)](https://github.com/absolunet/stylelint-config/actions?query=workflow%3Atests+branch%3Amaster)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Opinionated stylelint [extendable config](https://stylelint.io/user-guide/configuration/#extends).


## Rulesets

| Package | Version | Description |
|---|---|---|
| [@absolunet/stylelint-config-nwayo](packages/nwayo) | [![npm](https://img.shields.io/npm/v/@absolunet/stylelint-config-nwayo.svg)](https://www.npmjs.com/package/@absolunet/stylelint-config-nwayo) | [nwayo](https://absolunet.github.io/nwayo/) rules |


## Install

```
$ npm install @absolunet/stylelint-config-[RULESET]
```


## Usage

Add some stylelint config to your `.stylelintrc.yaml`:

```yaml
extends: '@absolunet/stylelint-config-[RULESET]'
```


## Used plugins

- [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value) - Enforces variables, functions, keywords for property's values
- [stylelint-order](https://github.com/hudochenkov/stylelint-order) - Order related linting rules
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss) - SCSS specific linting rules


## Related

- [@absolunet/stylelint-loader](https://github.com/absolunet/node-stylelint-loader) - stylelint extendable config YAML loader.


## License
MIT © [Absolunet](https://absolunet.com)
