import aMap from '../component/map/aMap';
import bMap from '../component/map/bMap';

const router = [
	{
		link: '/map/aMap',
		link_name: 'aMap',
		component: aMap
	},
	{
		link: '/map/bMap',
		link_name: 'bMap',
		component: bMap
	},
];

export default router