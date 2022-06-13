//--------------------------------------------------------
//-- SCSS - Feature tests
//--------------------------------------------------------
import configTests from "../../../../test/feature/config-tests";
import { given, when, then } from "./index.gwt";

describe(`Validate that 'scss' works`, () => {
	configTests({ given, when, then });

	test(`Ensure config can be used with SCSS`, async () => {
		given.scssCode();
		await when.configIsUsed();
		then.resultsShouldContainNoError();
	});
});
