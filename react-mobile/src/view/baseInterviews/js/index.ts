import { Iinterview } from '../..';
import { lazy } from 'react';

export const reactJsContainerData: Iinterview[] = [
    {
        name: '时间分片',
        path: lazy(() => import('./TimeSlice'))
    },
    {
        name: 'this 指向',
        path: lazy(() => import('./ThisPoint'))
    },
    {
        name: '闭包',
        path: lazy(() => import('./Closure'))
    }
]