import Loadable from 'react-loadable';
import loading from '../loading';

const router = [
	{
		link: '/other/datePick',
		link_name: 'datePick',
		component: Loadable({
			loader: () => import('../component/otherComponent/datePickIndex'),
			loading: loading
		})
	},
	{
		link: '/other/calendar',
		link_name: 'calendar',
		component: Loadable({
			loader: () => import('../component/otherComponent/calendar'),
			loading: loading
		})
	}
];

export default router;