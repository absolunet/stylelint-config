"use strict";

var _pkgDir = _interopRequireDefault(require("pkg-dir"));

var _stylelintLoader = _interopRequireDefault(require("@absolunet/stylelint-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- stylelint config
//--------------------------------------------------------
const config = (0, _stylelintLoader.default)(_pkgDir.default.sync(__dirname));
module.exports = config;
