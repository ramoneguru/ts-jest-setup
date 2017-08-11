import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {Hello} from '../src/js/components/Hello';
import Loading from '../src/js/common/Loading';

describe('Basic test suite for Signup', () => {
	let props = {
		compiler: "ES6",
		framework: "React"
	};

	let nodes = [<Loading />];

	it('should render without throwing an error', () => {
		expect(shallow(<Hello {...props}/>).containsAnyMatchingElements(nodes)).toBe(true);
	});
});