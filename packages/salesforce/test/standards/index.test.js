//--------------------------------------------------------
//-- Salesforce - Standards tests
//--------------------------------------------------------
import packageTests          from '../../../../test/standards/package-tests';
import { given, when, then } from './index.gwt';


describe(`Validate 'salesforce' package.json`, () => {

	packageTests({ given, when, then });

});
