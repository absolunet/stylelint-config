//--------------------------------------------------------
//-- Pwastudio - Feature tests
//--------------------------------------------------------
import configTests from "../../../../test/feature/config-tests";
import { given, when, then } from "./index.gwt";

describe(`Validate that 'pwastudio' works`, () => {
	configTests({ given, when, then });

	test(`Ensure config can be used with CSS Modules`, async () => {
		given.cssModulesCode();
		await when.configIsUsed();
		then.resultsShouldContainNoError();
	});
});
