const ViewSites = require('./ViewSites');

//test case for ViewSites component
test('porperly get data', () => {
	//testing return value of the getSites function
	expect(ViewSites.getSites()).toBe(true);
});
