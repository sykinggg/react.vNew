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
                path: '/text',
                name: '测试',
                icon: 'block',
                routes: [
                    {
                        path: '/text/1',
                        name: 1,
                        icon: 'block',
                        component: './Text.jsx',
                    }
                ]
            },
            {
                component: './404'
            }
        ],
    },
]
