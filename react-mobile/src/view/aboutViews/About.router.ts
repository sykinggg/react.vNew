import { lazy, LazyExoticComponent } from 'react';

import Favorites from './Favorites';
import Nearby from './Nearby';
import Recents from './Recents';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const RouterList = {
    defaultName: 'favorites',
    linkArr: [
        {
            component: lazy(() => import('./Favorites')),
            link: '/about/favorites',
            name: 'favorites',
            icon: RestoreIcon
        },
        {
            component: lazy(() => import('./Nearby')),
            link: '/about/nearby',
            name: 'nearby',
            icon: FavoriteIcon
        },
        {
            component: lazy(() => import('./Recents')),
            link: '/about/recents',
            name: 'recents',
            icon: LocationOnIcon
        },
    ],
    minHeight: '',
}