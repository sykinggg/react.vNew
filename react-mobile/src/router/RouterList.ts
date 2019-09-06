import HomeView from '../view/Home';
import AboutView from '../view/About';
import ComponentAll from '../view/ComponentAll';
import Interview from '../view/Interview';

import { lazy } from 'react';

export const TextRouter = lazy(() => import('../view/Home'));

export const RouterList = {
    defaultName: 'home',
    linkArr: [
        {
            component: lazy(() => import('../view/Home')),
            synchronize: false,
            link: 'home',
            name: 'home'
        },
        {
            component: AboutView,
            synchronize: true,
            link: 'about',
            name: 'about',
        },
        {
            component: lazy(() => import('../view/ComponentAll')),
            synchronize: false,
            link: 'componentAll',
            name: 'Component'
        },
        {
            component: lazy(() => import('../view/Interview')),
            synchronize: false,
            link: 'interview',
            name: 'interview'
        }
    ],
    minHeight: '',
}