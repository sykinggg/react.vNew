import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function SetstateAdjectiveAsync(props: any) {

    const [content, setContent] = React.useState(`
结论：
    有时表现出异步,有时表现出同步
原理：
    1.setState只在合成事件和钩子函数中是“异步”的，
    在原生事件和setTimeout 中都是同步的
    
    2.setState 的“异步”并不是说内部由异步代码实现，
    其实本身执行的过程和代码都是同步的，
    只是合成事件和钩子函数的调用顺序在更新之前，
    导致在合成事件和钩子函数中没法立马拿到更新后的值，
    形成了所谓的“异步”，
    当然可以通过第二个参数 setState(partialState, callback)
    中的callback拿到更新后的结果

    3.setState 的批量更新优化也是建立在“异步”
    （合成事件、钩子函数）之上的，
    在原生事件和setTimeout 中不会批量更新，
    在“异步”中如果对同一个值进行多次setState，
    setState的批量更新策略会对其进行覆盖，
    取最后一次的执行，
    如果是同时setState多个不同的值，
    在更新时会对其进行合并批量更新
                            `);
    const [title, setTitle] = React.useState('setState异步&&同步');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}