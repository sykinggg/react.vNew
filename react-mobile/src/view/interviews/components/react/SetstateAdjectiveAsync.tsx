import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function SetstateAdjectiveAsync(props: any) {

    const [content, setContent] = React.useState(`
React 一个包装结构: Transaction

事务 (Transaction):

    是 React 中的一个调用结构，用于包装一个方法，
    结构为: 
        initialize - perform(method) - close。
    通过事务，可以统一管理一个方法的开始与结束；
    处于事务流中，表示进程正在执行一些操作

setState: 
    
    React 中用于修改状态，更新视图

异步与同步: 

    setState并不是单纯的异步或同步，
    这其实与调用时的环境相关

    1.在 合成事件 和 生命周期钩子
        (除 componentDidUpdate) 
        中，setState是"异步"的；

        原因:
            
            1.因为在setState的实现中，
            有一个判断: 当更新策略正在事务流的执行中时，
            该组件更新会被推入dirtyComponents队列
            中等待执行；
            否则，开始执行batchedUpdates队列更新

            2.在生命周期钩子调用中，
            更新策略都处于更新之前，组件仍处于事务流中，
            而componentDidUpdate是在更新之后，
            此时组件已经不在事务流中了，因此则会同步执行

            3.在合成事件中，React 是
                基于 事务流完成的事件委托机制 实现，
            也是处于事务流中

        问题:

            无法在setState后马上从this.state上获取
                更新后的值

        解决: 

            如果需要马上同步去获取新值，
            setState其实是可以传入第二个参数的。
            setState(updater, callback)，
            在回调中即可获取最新值；

    2.在 原生事件 和 setTimeout 中，
    setState是同步的，可以马上获取更新后的值

        原因: 
        
            原生事件是浏览器本身的实现，与事务流无关，
            自然是同步；
            而setTimeout是放置于定时器线程中延后执行，
            此时事务流已结束，因此也是同步

    3.批量更新: 

        在 合成事件 和 生命周期钩子 中，
        setState更新队列时，
        存储的是 合并状态(Object.assign)。
        因此前面设置的 key 值会被后面所覆盖，
        最终只会执行一次更新；

    4.函数式: 

        由于 Fiber 及 合并 的问题，
        官方推荐可以传入 函数 的形式。
        setState(fn)，在fn中返回新的state对象即可，
        例如this.state((state, props) => newState)；

    函数式优势：

        使用函数式，可以用于避免setState的批量更新的逻辑，
        传入的函数将会被 顺序调用

注意事项:

    1.setState 合并，
        在 合成事件 和 生命周期钩子 
        中多次连续调用会被优化为一次；

    2.当组件已被销毁，
        如果再次调用setState，React 会报错警告，
        通常有两种解决办法:
    
        2.1.将数据挂载到外部，
        通过 props 传入，如放到 Redux 或 父级中；

        2.2.在组件内部维护一个状态量 (isUnmounted)，
        componentWillUnmount中标记为 true，
        在setState前进行判断；
                            `);
    const [title, setTitle] = React.useState('setState异步&&同步');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}