import { Iinterview } from '../..';
import { lazy } from 'react';

export const reactJsContainerData: Iinterview[] = [
    // {
    //     name: 'homeLayout',
    //     path: lazy(() => import('./homeLayout'))
    // },
    {
        name: 'js text',
        path: lazy(() => import('./JsText'))
    },
]