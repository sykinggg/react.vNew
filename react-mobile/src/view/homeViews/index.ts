import { lazy } from 'react';
import { Iinterview } from '..';

export const reactAboutContainerData: Iinterview[] = [
    // {
    //     name: 'homeLayout',
    //     path: lazy(() => import('./homeLayout'))
    // },
    {
        name: 'white-space: nowrap',
        path: lazy(() => import('./layout/AutoGridNoWrap'))
    },
    {
        name: '间距',
        path: lazy(() => import('./layout/SpacingGrid'))
    },
    {
        name: '嵌套栅格',
        path: lazy(() => import('./layout/NestedGrid'))
    },
    {
        name: '栅格',
        path: lazy(() => import('./layout/CSSGrid'))
    }
]