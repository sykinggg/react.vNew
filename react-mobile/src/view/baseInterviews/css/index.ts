export * from './CssText';

import { Iinterview } from '../..';
import { lazy } from 'react';

export const reactCssContainerData: Iinterview[] = [
    // {
    //     name: 'homeLayout',
    //     path: lazy(() => import('./homeLayout'))
    // },
    {
        name: 'css text',
        path: lazy(() => import('./CssText'))
    },
]