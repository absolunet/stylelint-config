# @absolunet/stylelint-loader

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]


> stylelint YAML configuration loader

Reads and parses an stylelint YAML [extendable config](https://stylelint.io/user-guide/configuration/#extends) file.


## Install

```
$ npm install @absolunet/stylelint-loader
```


## Usage

Expects a `extendable-config.yaml` file in the root of your package.

```js
import loader from '@absolunet/stylelint-loader';

module.exports = loader(__dirname);
```


## Related

- [Opiniated configs](https://github.com/absolunet/stylelint-config)


## Documentation

View [documentation](https://documentation.absolunet.com/stylelint-config/loader)


## License
[MIT](LICENSE) © [Absolunet](https://absolunet.com)




[npm-badge]:          https://img.shields.io/npm/v/@absolunet/stylelint-loader?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/stylelint-config?path=packages/loader&style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/absolunet/stylelint-config/tests/production?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40absolunet%2Fstylelint-loader.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@absolunet/stylelint-loader
[dependencies-url]: https://david-dm.org/absolunet/stylelint-config?path=packages/loader
[tests-url]:        https://github.com/absolunet/stylelint-config/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]:         https://npms.io/search?q=%40absolunet%2Fstylelint-loader
[license-url]:      https://opensource.org/licenses/MIT
