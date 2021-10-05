const AddSite = require('./AddSite');

//test case for AddSite component
test('porperly insert data to firebase', () => {
	//creating sample object to pass to addsite function
	var newSiteObj = {
		name: 'name',
		location: 'location',
		budget: 10,
		limit: 10,
		id: '56adad5616',
	};

	//testing return value of the addSite function
	expect(AddSite.addSite(newSiteObj)).toBe(true);
});
