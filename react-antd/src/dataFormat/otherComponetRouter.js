import datePick from '../component/otherComponent/datePickIndex';
import calendar from '../component/otherComponent/calendar';

const router = [
	{
		link: '/other/datePick',
		link_name: 'datePick',
		component: datePick
	},
	{
		link: '/other/calendar',
		link_name: 'calendar',
		component: calendar
	}
];

export default router;