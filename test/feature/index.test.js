//--------------------------------------------------------
//-- stylelint config - Feature tests
//--------------------------------------------------------

import { tester } from '@absolunet/tester';

const stylelint = require(require.resolve('stylelint', { paths: [`${__dirname}/../../packages/nwayo`] }));



//-- Validate that subpackages return config
Object.entries(tester.subpackages).forEach(([name, root]) => {
	describe(`Validate that '${name}' works`, () => {
		let config;

		test(`Ensure YAML is parsable`, () => {
			expect(() => {
				config = require(root);  // eslint-disable-line global-require
			}).not.toThrow();
		});

		test(`Ensure file contains config`, () => {
			expect(config).toBeObject();
			expect(config).not.toEqual({});
		});

		test(`Ensure config can be used`, () => {
			expect.assertions(1);

			return expect(stylelint.lint({ config, configBasedir: root, code: 'a {\n\t/* test */\n}\n' })).resolves.toContainEntries([
				['errored', false]
			]);
		});
	});
});
