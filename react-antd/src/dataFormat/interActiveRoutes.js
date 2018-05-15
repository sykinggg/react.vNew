import Loadable from 'react-loadable';
import loading from '../loading';

const router = [
    {
        link: '/inter/pubSub',
        link_name: 'pubSub',
        component: Loadable({
            loader: () => import('../component/interActive/interFaces/pubSub'),
            loading: loading
        }),
    },
    {
        link: '/inter/signal',
        link_name: 'signal',
        component: Loadable({
            loader: () => import('../component/interActive/interFaces/signalIndex'),
            loading: loading
        }),
    },
];

export default router;