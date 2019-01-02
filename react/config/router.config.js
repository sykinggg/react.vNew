export default [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [{ path: '/user', component: './Welcome' }],
    },
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            { path: '/', redirect: '/welcome' },
            {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome.jsx',
            },
            {
                path: '/study',
                name: 'study',
                icon: 'block',
                routes: [
                    {
                        path: '/study/base',
                        name: 'base',
                        icon: 'block',
                        component: './study-base.jsx',
                    }
                ]
            },
            {
                component: './404.jsx'
            }
        ],
    },
]
