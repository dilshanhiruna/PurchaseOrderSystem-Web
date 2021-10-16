import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { addSite, getSite } from './reactDB/SiteDBUtil';

Enzyme.configure({ adapter: new Adapter() });

//testing CRUD dunctions of site component
describe('SitesComponent', () => {
	//positive test case for add site function
	it('should return true', () => {
		//creating new object with correct data types

		const newSite = {
			name: 'CVN Mathara',
			locationt: 'Mathara',
			budget: 100000,
			limit: 20000,
		};
		const val = addSite(newSite);
		expect(val).toEqual(true);
	});

	//negetive test case for add site function
	it('should return false', () => {
		const newSite = {
			name: 'CVN Mathara',
			locationt: 'Mathara',
			budget: '100000',
			limit: '20000',
		};
		const val = addSite(newSite);
		expect(val).toEqual(false);
	});

	it('should return true', () => {
		const val = getSite();
		expect(val).toEqual(true);
	});
});
