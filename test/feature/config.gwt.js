//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "path";
import * as gwt from "../base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

const stylelint = require(require.resolve("stylelint", {
	paths: [path.join(__dirname, "..", "..", "packages", "core")],
}));

let root;
let config;
let results;
let code;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noConfig = () => {
	config = undefined;
};

given.noResults = () => {
	results = undefined;
};

//-- Given - Root
given.root = (value) => {
	root = value;
};

given.code = (givenCode) => {
	code = givenCode;
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		config = require(root); // eslint-disable-line node/global-require
	});
};

when.configIsUsed = async () => {
	when.configIsLoaded();

	results = await stylelint.lint({ config, configBasedir: root, code });
};

when.configIsUsedWithSCSS = async () => {
	given.code(`/* -- */
// test

a {
	/* test */
}
`);
	when.configIsLoaded();

	results = await stylelint.lint({ config, configBasedir: root, code });
};

when.configIsUsedWithCSSModules = async () => {
	when.configIsLoaded();

	given.code(`/* -- */
.class-a {
    /* test */
}

.class-b {
    composes: class-a;
}
`);
	results = await stylelint.lint({ config, configBasedir: root, code });
};

//-- Then - Config
then.configShouldNotBeEmpty = () => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
};

then.resultsShouldContainNoError = () => {
	expect(results).toContainEntries([["errored", false]]);
};

export { given, when, then };
