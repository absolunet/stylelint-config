//--------------------------------------------------------
//-- Pwastudio - Feature tests
//--------------------------------------------------------
import configTests from "../../../../test/feature/config-tests";
import { given, when, then } from "./index.gwt";

describe(`Validate that 'pwastudio' works`, () => {
	const defaultCode = `/* -- */
a {
    /* test */
}
`;
	configTests({ given, when, then, defaultCode });

	test(`Ensure config can be used with CSS Modules`, async () => {
		await when.configIsUsedWithCSSModules();

		then.resultsShouldContainNoError();
	});
});
