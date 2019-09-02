import { lazy, LazyExoticComponent } from 'react';

export interface Iinterview {
    name?: string;
    path?: any;
}

export const reactInterviewContainerData: Iinterview[] = [
    {
        name: '声明式编程',
        path: lazy(() => import('./DeslarativeProgram'))
    },
    {
        name: '声明式编程声明式编程 vs 命令式编程',
        path: lazy(() => import('./ImperativeProgram'))
    },
    {
        name: '不可变性(Immutability)',
        path: lazy(() => import('./functionProgram/Immutability'))
    },
    {
        name: '纯函数',
        path: lazy(() => import('./functionProgram/PureFunction'))
    },
    {
        name: '数据转换',
        path: lazy(() => import('./functionProgram/DataConversion'))
    },
    {
        name: '高阶函数',
        path: lazy(() => import('./functionProgram/HigherOrderFunction'))
    },
    {
        name: '递归',
        path: lazy(() => import('./functionProgram/Recursive'))
    },
    {
        name: '组合',
        path: lazy(() => import('./functionProgram/Combination'))
    },
    {
        name: '展示组件',
        path: lazy(() => import('./DisplayComponent'))
    },
    {
        name: '有状态组件',
        path: lazy(() => import('./StatefulComponent'))
    },
    {
        name: '受控组件',
        path: lazy(() => import('./ControlledComponent'))
    },
    {
        name: '非受控组件',
        path: lazy(() => import('./UncontrolledComponent'))
    },
    {
        name: '容器组件 & 高阶组件',
        path: lazy(() => import('./ContainerComponent'))
    },
    {
        name: 'Props & State',
        path: lazy(() => import('./StatefulComponent'))
    },
]