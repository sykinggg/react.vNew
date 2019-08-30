import HomeView from '../view/Home';
import AboutView from '../view/About';
import ComponentAll from '../view/ComponentAll';
import Interview from '../view/Interview';

export const RouterList = {
    defaultName: 'home',
    linkArr: [
        {
            component: HomeView,
            link: 'home',
            name: 'home',
        },
        {
            component: AboutView,
            link: 'about',
            name: 'about',
        },
        {
            component: ComponentAll,
            link: 'componentAll',
            name: 'Component'
        },
        {
            component: Interview,
            link: 'interview',
            name: 'interview'
        }
    ],
    minHeight: '',
}