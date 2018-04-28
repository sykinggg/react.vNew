import home from '../component/home';
import about from '../component/about';
import topics from '../component/topics';

const router = [
	{
		link: '/',
		link_name: 'home',
		component: home
	},
	{
		link: '/about',
		link_name: 'about',
		component: about
	},
	{
		link: '/topics',
		link_name: 'topics',
		component: topics
	},
];

export default router;