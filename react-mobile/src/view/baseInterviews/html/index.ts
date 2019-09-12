import { Iinterview } from '../..';
import { lazy } from 'react';

export const reactHomlContainerData: Iinterview[] = [
    {
        name: 'html text',
        path: lazy(() => import('./HomeText'))
    },
]