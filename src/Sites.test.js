import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { addSite } from './reactDB/SiteDBUtil';

Enzyme.configure({ adapter: new Adapter() });

describe('SitesComponent', () => {
	// it('should show text', () => {
	// 	const wrapper = shallow(<SiteDBUtil />);
	// 	const text = wrapper.find('div div');
	// 	expect(text.text()).toBe('hey');
	// 	// expect(test).toBe(true);
	// });

	it('should return true', () => {
		const val = addSite();
		expect(val).toEqual(true);
	});
});
