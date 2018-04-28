import pubSub from '../component/interActive/interFaces/pubSub';
import signal from '../component/interActive/interFaces/signalIndex';

const router = [
    {
        link: '/inter/pubSub',
        link_name: 'pubSub',
        component: pubSub,
    },
    {
        link: '/inter/signal',
        link_name: 'signal',
        component: signal,
    },
];

export default router;