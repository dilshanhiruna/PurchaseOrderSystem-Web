import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sites from './Sites';

Enzyme.configure({ adapter: new Adapter() });

describe('SitesComponent', () => {
	it('should be true', () => {
		const foo = true;
		expect(foo).toBe(true);
	});
});
