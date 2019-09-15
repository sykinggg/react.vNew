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
            component: lazy(() => import('../view/About')),
            synchronize: false,
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
        },
        {
            component: lazy(() => import('../view/BaseInterviews')),
            synchronize: false,
            link: 'baseInterviews',
            name: 'baseInterviews'
        }
    ],
    minHeight: '',
}