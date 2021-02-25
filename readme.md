# stylelint config
[![tests](https://github.com/absolunet/stylelint-config/workflows/tests/badge.svg?branch=master)](https://github.com/absolunet/stylelint-config/actions?query=workflow%3Atests+branch%3Amaster)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Opinionated stylelint [extendable config](https://stylelint.io/user-guide/configuration/#extends).


## Rulesets

| Package | Version | Description | Documentation |
|---|---|---|---|
| **[@absolunet/stylelint-config-core](packages/core)** | [![npm](https://img.shields.io/npm/v/@absolunet/stylelint-config-core.svg)](https://www.npmjs.com/package/@absolunet/stylelint-config-core) | **Core rules** | [docs](https://documentation.absolunet.com/stylelint-config/core) |
| [@absolunet/stylelint-config-scss](packages/scss) | [![npm](https://img.shields.io/npm/v/@absolunet/stylelint-config-scss.svg)](https://www.npmjs.com/package/@absolunet/stylelint-config-scss) | SCSS | [docs](https://documentation.absolunet.com/stylelint-config/scss) |
| [@absolunet/stylelint-config-salesforce](packages/salesforce) | [![npm](https://img.shields.io/npm/v/@absolunet/stylelint-config-salesforce.svg)](https://www.npmjs.com/package/@absolunet/stylelint-config-salesforce) | Salesforce | [docs](https://documentation.absolunet.com/stylelint-config/salesforce) |

### Dependency tree
```
       ┌────────────────┐
       │      core      │
       └────────────────┘
                │
                │
                │
                │
                │
                ▼
       ┌────────────────┐
       │      scss      │
       └────────────────┘
                │
                │
                │
                │
                │
                ▼
       ┌────────────────┐
       │   salesforce   │
       └────────────────┘
```

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


## Related

- [@absolunet/stylelint-loader](https://github.com/absolunet/node-stylelint-loader) - stylelint extendable config YAML loader.


## License
MIT © [Absolunet](https://absolunet.com)
