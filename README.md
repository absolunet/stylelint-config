# stylelint config
[![Tests][tests-badge]][tests-url]
[![Lerna][lerna-badge]][lerna-url]
[![License: MIT][license-badge]][license-url]

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


## Documentation

See the [full documentation](https://documentation.absolunet.com/stylelint-config/core) for an in-depth look.

See the [Changelog](CHANGELOG.md) to see what has changed.


## Contribute

See the [Contributing Guidelines](CONTRIBUTING.md) for ways to get started.

See the [Support Guide](SUPPORT.md) for ways to get help.

See the [Security Policy](SECURITY.md) for sharing vulnerability reports.

This project has a [Code of Conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.


## License

[MIT](LICENSE) © [Absolunet](https://absolunet.com)




[tests-badge]:   https://img.shields.io/github/workflow/status/absolunet/stylelint-config/tests/master?label=tests&style=flat-square
[lerna-badge]:   https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square

[tests-url]:   https://github.com/absolunet/stylelint-config/actions?query=workflow%3Atests+branch%3Amaster
[lerna-url]:   https://lerna.js.org/
[license-url]: https://opensource.org/licenses/MIT
