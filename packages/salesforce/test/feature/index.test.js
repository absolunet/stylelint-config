//--------------------------------------------------------
//-- Salesforce - Feature tests
//--------------------------------------------------------
import configTests from "../../../../test/feature/config-tests";
import { given, when, then } from "./index.gwt";

describe(`Validate that 'salesforce' works`, () => {
	configTests({ given, when, then });
});
