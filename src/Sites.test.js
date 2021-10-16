import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { addSite, getSite, updateSite } from './reactDB/SiteDBUtil';

Enzyme.configure({ adapter: new Adapter() });

//testing CRUD functions of site component
describe('SitesComponent', () => {
	//positive test case for add site function
	it('positive test for add site - should return true', () => {
		//creating new object with correct data types

		const newSite = {
			name: 'CVN Mathara',
			locationt: 'Mathara',
			budget: 100000,
			limit: 20000,
		};
		const returnVal = addSite(newSite);
		expect(returnVal).toEqual(true);
	});

	//negetive test case for add site function
	it('negetive test for add site - should return false', () => {
		//creating new object with incorrect data types

		const newSite = {
			name: 'CVN Mathara',
			locationt: 'Mathara',
			budget: '100000',
			limit: '20000',
		};
		const returnVal = addSite(newSite);
		expect(returnVal).toEqual(false);
	});

	//positive test case for getSite
	it('should return true', () => {
		const returnVal = getSite();
		expect(returnVal).toEqual(true);
	});

	//positive test case for edit site function
	it('positive test for edit site - should return true', () => {
		//creating new object with correct data types

		const editedSite = {
			name: 'CVN Mathara',
			locationt: 'Mathara',
			budget: 100000,
			limit: 20000,
		};
		const returnVal = updateSite(editedSite);
		expect(returnVal).toEqual(true);
	});

	//negetive test case for edit site function
	it('negetive test for edit site - should return false', () => {
		//creating new object with incorrect data types

		const editedSite = {
			name: 'CVN Mathara',
			locationt: 'Mathara',
			budget: '100000',
			limit: '20000',
		};
		const returnVal = updateSite(editedSite);
		expect(returnVal).toEqual(false);
	});
});
