const EditSite = require('./EditSite');

//test case for EditSite component
test('porperly edit data', () => {
	//creating sample object to pass to editSite function
	var updatedSite = {
		name: 'name',
		location: 'location',
		budget: 10,
		limit: 10,
		id: 'aaa001',
	};

	//testing return value of the editSite function
	expect(EditSite.editSite(updatedSite)).toBe(true);
});
