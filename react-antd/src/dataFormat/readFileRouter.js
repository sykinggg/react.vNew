import Loadable from 'react-loadable';
import loading from '../loading';

const router = [
    {
        link: '/read/base',
        link_name: 'base',
        component: Loadable({
            loader: () => import('../component/readFile/base'),
            loading: loading
        })
    }
]

export default router;