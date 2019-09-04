import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function RequestLifeHook(props: any) {

    const [content, setContent] = React.useState(`
思路：
    componentWillMount中可以提前进行异步请求,避免白屏
产生的问题：
    由于JavaScript中异步事件的性质，当您启动API调用时，
    浏览器会在此期间返回执行其他工作。
    当React渲染一个组件时，
    它不会等待componentWillMount它完成任何事情
    React继续前进并继续render,
    没有办法“暂停”渲染以等待数据到达
    首先：
        在服务器渲染时,如果在 componentWillMount 
        里获取数据，fetch data会执行两次，
        一次在服务端一次在客户端，这造成了多余的请求
    其次：
        在React 16进行React Fiber重写后,
        componentWillMount可能在一次渲染中多次调用.
解决方案：
    官方推荐的异步请求是在componentDidmount中进行
    如果有特殊需求需要提前请求,
        也可以在特殊情况下在constructor中请求
                            `);
    const [title, setTitle] = React.useState('请求应该放在哪个生命周期中');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}