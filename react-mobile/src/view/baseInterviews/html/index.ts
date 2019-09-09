import { Iinterview } from '../..';
import { lazy } from 'react';

export const reactHomlContainerData: Iinterview[] = [
    // {
    //     name: 'homeLayout',
    //     path: lazy(() => import('./homeLayout'))
    // },
    {
        name: 'html text',
        path: lazy(() => import('./HomeText'))
    },
]