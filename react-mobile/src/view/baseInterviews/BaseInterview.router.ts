import { lazy } from 'react';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const RouterList = {
    defaultName: 'favorites',
    linkArr: [
        {
            component: lazy(() => import('./HtmlDataView')),
            link: '/baseInterviews/html',
            name: 'html',
            icon: RestoreIcon
        },
        {
            component: lazy(() => import('./CssDataView')),
            link: '/baseInterviews/css',
            name: 'css',
            icon: FavoriteIcon
        },
        {
            component: lazy(() => import('./JsDataView')),
            link: '/baseInterviews/js',
            name: 'js',
            icon: LocationOnIcon
        },
    ],
    minHeight: '',
}