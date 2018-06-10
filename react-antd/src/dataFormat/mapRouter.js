import Loadable from 'react-loadable';
import loading from '../loading';

const router = [
	{
		link: '/map/aMap',
		link_name: 'aMap',
		component: Loadable({
			loader: () => import('../component/map/aMap'),
			loading: loading
		})
	},
	{
		link: '/map/bMap',
		link_name: 'bMap',
		component: Loadable({
			loader: () => import('../component/map/bMap'),
			loading: loading
		})
	},
];

export default router