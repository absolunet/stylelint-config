//--------------------------------------------------------
//-- SCSS - Given-When-Then
//--------------------------------------------------------
import path from "path";
import * as gwt from "../../../../test/feature/config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRoot = () => {
	given.root(path.join(__dirname, "..", "..", "dist", "node"));
};

given.currentCSSCode = () => {
	given.code(`/* -- */
a {
	/* test */
}
`);
};

given.scssCode = () => {
	given.code(`/* -- */
// test

a {
	/* test */
}
`);
};

export { given, when, then };
