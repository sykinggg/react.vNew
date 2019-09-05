import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function VirtualDom(props: any) {

    const [content, setContent] = React.useState(`
三个生命周期被废弃(但并未删除)
    componentWillMount
    componentWillReceiveProps
    componentWillUpdate

    生命周期基本概念 普通视角

挂载阶段:
    constructor: 
        构造函数，最先被执行,
        通常在构造函数里初始化state对象
        或者给自定义方法绑定this
    getDerivedStateFromProps:
        static getDerivedStateFromProps
            (nextProps, prevState)
        这是个静态方法,当接收到新的属性想去修改state
        可以使用getDerivedStateFromProps
    render:
        render函数是纯函数，只返回需要渲染的东西，
        不应该包含其它的业务逻辑,
        可以返回原生的DOM、React组件、Fragment、
        Portals、字符串和数字、Boolean和null等内容
    componentDidMount: 
        组件装载之后调用，
        此时可以获取到DOM节点并操作，
        比如对canvas，svg的操作，服务器请求，
        订阅都可以写在这个里面，
        但是记得在componentWillUnmount中取消订阅
更新阶段:
    getDerivedStateFromProps:
        此方法在更新个挂载阶段都可能会调用
    shouldComponentUpdate:
        shouldComponentUpdate(nextProps, nextState)
        有两个参数nextProps和nextState，
        表示新的属性和变化之后的state，
        返回一个布尔值，true表示会触发重新渲染，
        false表示不会触发重新渲染，
        默认返回true,
        通常利用此生命周期来优化React程序性能
    render:
        更新阶段也会触发此生命周期
    getSnapshotBeforeUpdate:
        getSnapshotBeforeUpdate(prevProps, prevState),
        这个方法在render之后，componentDidUpdate之前调用，
        有两个参数prevProps和prevState，
        表示之前的属性和之前的state，这个函数有一个返回值，
        会作为第三个参数传给componentDidUpdate，
        如果你不想要返回值，可以返回null，
        此生命周期必须与componentDidUpdate搭配使用
    componentDidUpdate:
        componentDidUpdate(prevProps, prevState, snapshot),
        该方法在getSnapshotBeforeUpdate方法之后被调用，
        有三个参数prevProps，prevState，snapshot，
        表示之前的props，之前的state，和snapshot。
        第三个参数是getSnapshotBeforeUpdate返回的,
        如果触发某些回调函数时需要用到 DOM 元素的状态，
        则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，
        然后在 componentDidUpdate 中统一触发回调或更新状态。
卸载阶段:
    componentWillUnmount:
        当的组件被卸载或者销毁了就会调用，
        可以在这个函数里去清除一些定时器，
        取消网络请求，清理无效的DOM元素等垃圾清理工作

    新版本总结以及使用建议 从Fiber的角度

使用getDerivedStateFromProps 替换 componentWillMount
使用getSnapshotBeforeUpdate 替换 componentWillUpdate
避免使用componentWillReceiveProps

正是由于上述提到的 Fiber

React 可以分成 reconciliation 与 commit 两个阶段

reconciliation：

    1.componentWillMount

    2.componentWillReceiveProps

    3.shouldComponentUpdate

    4.componentWillUpdate

commit：

    1.componentDidMount

    2.componentDidUpdate

    3.componentWillUnmount

隐藏的关键：

    在 Fiber 中，reconciliation 阶段进行了任务分割，
    涉及到 暂停 和 重启，
    因此可能会导致 reconciliation 中
    生命周期函数在一次更新渲染循环中被 多次调用 的情况，
    产生一些意外错误

class Component extends React.Component {

    // 替换 componentWillReceiveProps ，
    // 初始化和 update 时被调用
    // 静态函数，无法使用 this
    static getDerivedStateFromProps(
        nextProps, 
        prevState
    ) {}

    // 判断是否需要更新组件
    // 可以用于组件性能优化
    shouldComponentUpdate(
        nextProps, 
        nextState
    ) {}

    // 组件被挂载后触发
    componentDidMount() {}

    // 替换 componentWillUpdate
    // 可以在更新之前获取最新 dom 数据
    getSnapshotBeforeUpdate() {}

    // 组件更新后调用
    componentDidUpdate() {}

    // 组件即将销毁
    componentWillUnmount() {}
    
    复制代码// 组件已销毁
    componentDidUnMount() {}
}

使用建议:

    1.在constructor初始化 state；

    2.在componentDidMount中进行事件监听，
    并在componentWillUnmount中解绑事件；

    3.在componentDidMount中进行数据的请求，
    而不是在componentWillMount；

    4.需要根据 props 更新 state 时，
    使用getDerivedStateFromProps
    (nextProps, prevState)；
    旧 props 需要自己存储，以便比较

public static getDerivedStateFromProps
    (nextProps, prevState) 
{
    // 当新 props 中的 data 发生变化时，
        同步更新到 state 上
    if (nextProps.data !== prevState.data) {
        return {
            data: nextProps.data
        }
    } else {
        return null1
    }
}

    5.可以在componentDidUpdate监听 props 或者 state 的变化

    componentDidUpdate(prevProps) {
        // 当 id 发生变化时，重新获取数据
        if (this.props.id !== prevProps.id) {
            this.fetchData(this.props.id);
        }
    }

    6.在componentDidUpdate使用setState时，
    必须加条件，否则将进入死循环；

    7.getSnapshotBeforeUpdate(prevProps, prevState)
    可以在更新之前获取最新的渲染数据，
    它的调用是在 render 之后， mounted 之前；

    8.shouldComponentUpdate: 
        默认每次调用setState，一定会最终走到 diff 阶段，
        但可以通过shouldComponentUpdate的生命钩子
        返回false来直接阻止后面的逻辑执行，
        通常是用于做条件渲染，优化渲染的性能。

                            `);
    const [title, setTitle] = React.useState('React生命周期');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}