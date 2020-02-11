//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import * as gwt from '../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };

const stylelint = require(require.resolve('stylelint', { paths: [`${__dirname}/../../packages/nwayo`] }));

let root;
let config;
let results;


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




//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		config = require(root);  // eslint-disable-line global-require
	});
};

when.configIsUsed = async () => {
	when.configIsLoaded();
	results = await stylelint.lint({ config, configBasedir: root, code: 'a {\n\t/* test */\n}\n' });
};




//-- Then - Config
then.configShouldNotBeEmpty = () => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
};

then.resultsShouldContainNoError = () => {
	expect(results).toContainEntries([
		['errored', false]
	]);
};


export { given, when, then };
