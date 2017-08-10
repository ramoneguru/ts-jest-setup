import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {Hello} from '../src/js/components/Hello';

describe('Basic test suite for Signup', () => {
	let props = {
		compiler: "ES6",
		framework: "React"
	};

	it('should render without throwing an error', () => {
		expect(shallow(<Hello {...props}/>).contains(<h1>Hello from TypeScript and React!</h1>)).toBe(true);
	});
});