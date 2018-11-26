//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
'use strict';

const tester = require('@absolunet/tester');


tester.npmPackage.validateMulti();

tester.npmPackage.multiPackagesPaths.forEach((path) => {
	tester.npmPackage.validateStylelintConfig({ cwd:path });
});
