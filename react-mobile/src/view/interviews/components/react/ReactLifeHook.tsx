import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function VirtualDom(props: any) {

    const [content, setContent] = React.useState(`
三个生命周期被废弃(但并未删除)
    componentWillMount
    componentWillReceiveProps
    componentWillUpdate
只保留UNSAVE_前缀的三个函数

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
                            `);
    const [title, setTitle] = React.useState('React生命周期');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}