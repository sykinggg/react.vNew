import Loadable from 'react-loadable';
import loading from '../loading';

const router = [
	{
		link: '/',
		link_name: 'home',
		component: Loadable({
			loader: () => import('../component/home'),
			loading: loading
		})
	},
	{
		link: '/about',
		link_name: 'about',
		component: Loadable({
			loader: () => import('../component/about/about'),
			loading: loading
		})
	},
	{
		link: '/topics',
		link_name: 'topics',
		component: Loadable({
			loader: () => import('../component/topics'),
			loading: loading
		})
	},
	{
		link: '/map',
		link_name: 'map',
		component: Loadable({
			loader: () => import('../component/map/map'),
			loading: loading
		}),
		routes: Loadable({
			loader: () => import('./mapRouter'),
			loading: loading
		})
	},
	{
		link: '/other/datePick',
		link_name: 'other',
		component: Loadable({
			loader: () => import('../component/otherComponent/otherComponent'),
			loading: loading
		})
	},
	{
		link: '/inter/pubSub',
		link_name: 'inter',
		component: Loadable({
			loader: () => import('../component/interActive/interActiveIndex'),
			loading: loading
		})
	}
];

export default router;