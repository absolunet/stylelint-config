//--------------------------------------------------------
//-- Config tests
//--------------------------------------------------------
export default ({ given, when, then, defaultCode }) => {
	beforeEach(() => {
		given.noException();
		given.noRoot();
		given.noConfig();
		given.noResults();
		given.currentRoot();

		const code =
			defaultCode ||
			`/* -- */
a {
	/* test */
}
`;
		given.code(code);
	});

	test(`Ensure YAML is parsable`, () => {
		when.configIsLoaded();
		then.shouldNotHaveThrown();
	});

	test(`Ensure file contains config`, () => {
		when.configIsLoaded();
		then.configShouldNotBeEmpty();
	});

	test(`Ensure config can be used`, async () => {
		await when.configIsUsed();
		then.resultsShouldContainNoError();
	});
};
