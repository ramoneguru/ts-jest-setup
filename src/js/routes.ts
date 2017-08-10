import {AppComponent, makeRoutes} from 'web-toolbox';
import {NotFound} from 'ui-components';

export default makeRoutes({
	path: '/signup',
	component: AppComponent,
	childRoutes: [
		{
			path: '/',
			component: AppComponent
		},
		{
			path: '*',
			component: NotFound,
			status: 404
		}
	]
});