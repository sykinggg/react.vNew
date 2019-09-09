import { lazy, LazyExoticComponent } from 'react';

export interface Iinterview {
    name?: string;
    path?: any;
}

export const reactInterviewContainerData: Iinterview[] = [
    {
        name: '使用 useEffect',
        path: lazy(() => import('./react/UseEffectHook'))
    },
    {
        name: 'Hooks',
        path: lazy(() => import('./react/Hooks'))
    },
    {
        name: 'redux的工作流程',
        path: lazy(() => import('./react/ReduxWorkFlow'))
    },
    {
        name: 'React高阶组件',
        path: lazy(() => import('./react/HigherComponent'))
    },
    {
        name: 'fiber',
        path: lazy(() => import('./react/FiberAlgorithm'))
    },
    {
        name: 'redux异步中间件',
        path: lazy(() => import('./react/ReduxAsyncMiddleware'))
    },
    {
        name: 'redux与mobx的区别',
        path: lazy(() => import('./react/ReduxMobx'))
    },
    {
        name: 'react-redux的工作流程',
        path: lazy(() => import('./react/ReactReduxWorkFlow'))
    },
    {
        name: 'Time Slice',
        path: lazy(() => import('./react/TimeSlice'))
    },
    {
        name: 'mixin、hoc、render props、react-hooks',
        path: lazy(() => import('./react/ComponenthighFun'))
    },
    {
        name: '组件/逻辑复用',
        path: lazy(() => import('./react/ComponentMultiplexing'))
    },
    {
        name: '组件通信',
        path: lazy(() => import('./react/ComponentCommunication'))
    },
    {
        name: 'setState异步&&同步',
        path: lazy(() => import('./react/SetstateAdjectiveAsync'))
    },
    {
        name: '请求应该放在哪个生命周期中',
        path: lazy(() => import('./react/RequestLifeHook'))
    },
    {
        name: 'React生命周期',
        path: lazy(() => import('./react/ReactLifeHook'))
    },
    {
        name: '虚拟DOM',
        path: lazy(() => import('./react/VirtualDom'))
    },
    {
        name: '框架 && 原生',
        path: lazy(() => import('./react/FrameNative'))
    },
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