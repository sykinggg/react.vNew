import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function Hooks(props: any) {

    const [content, setContent] = React.useState(`
好处:
    1.跨组件复用: 
        其实 render props / HOC 也是为了复用，
        相比于它们，Hooks 作为官方的底层 API，
        最为轻量，而且改造成本小，
        不会影响原来的组件层次结构和传说中的嵌套地狱

    2.类定义更为复杂:

        2.1.不同的生命周期会使逻辑变得分散且混乱，
            不易维护和管理；

        2.2.时刻需要关注this的指向问题；

        2.3.代码复用代价高，
            高阶组件的使用经常会使整个组件树变得臃肿；

    3.状态与UI隔离: 
        正是由于 Hooks 的特性，
        状态逻辑会变成更小的粒度，
        并且极容易被抽象成一个自定义 Hooks，
        组件中的状态和 UI 变得更为清晰和隔离
注意:

    1.避免在 循环/条件判断/嵌套函数 
        中调用 hooks，保证调用顺序的稳定；

    2.只有 函数定义组件 和 hooks 
        可以调用 hooks，
        避免在 类组件 或者 普通函数 中调用；

    3.不能在useEffect中使用useState，
        React 会报错提示；

    4.类组件不会被替换或废弃，
        不需要强制改造类组件，
        两种方式能并存；

重要钩子：

    1.状态钩子 (useState): 
        用于定义组件的 State，
        其到类定义中this.state的功能

// useState 只接受一个参数: 初始状态
// 返回的是组件名和更改该组件对应的函数
const [flag, setFlag] = useState(true);
// 修改状态
setFlag(false)
复制代码// 上面的代码映射到类定义中:
this.state = {
    flag: true	
}
const flag = this.state.flag
const setFlag = (bool) => {
    this.setState({
        flag: bool,
    })
}

    2.生命周期钩子 (useEffect)
        React Hooks 中也提供了一个
            相应的函数(useEffect)，
        这里可以看做
        componentDidMount、
        componentDidUpdate和
        componentWillUnmount的结合

// 每次 source 发生改变时，
    执行结果(以类定义的生命周期，便于大家理解):
// --- DidMount ---
// 'on'
// --- DidUpdate ---
// 'off'
// 'on'
// --- DidUpdate ---
// 'off'
// 'on'
// --- WillUnmount --- 
// 'off'
    
    3.通过第二个参数

        3.1.componentDidMount: 
            传入[]时，就只会在初始化时调用一次

const useMount = (fn) => useEffect(fn, [])

        3.2.componentWillUnmount: 
            传入[]，回调中的返回的函数
                也只会被最终执行一次

const useUnmount = (fn) => 
    useEffect(() => fn, [])

        3.3.mounted: 
            可以使用 useState 
            封装成一个高度可复用的 mounted 状态

const useMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        !mounted && setMounted(true);
        return () => setMounted(false);
    }, []);
    return mounted;
}

        3.4.componentDidUpdate: 
            useEffect每次均会执行，
            其实就是排除了 DidMount 后即可

const mounted = useMounted() 
useEffect(() => {
    mounted && fn()
})

    4.其它内置钩子

        4.1.useContext: 
            获取 context 对象

        4.2.useReducer: 
            类似于 Redux 思想的实现，
            但其并不足以替代 Redux，
            可以理解成一个组件内部的 redux

            4.2.1.并不是持久化存储，
                会随着组件被销毁而销毁

            4.2.2.属于组件内部，
                各个组件是相互隔离的，
                单纯用它并无法共享数据

            4.2.3.配合useContext的全局性，
                可以完成一个轻量级的 Redux；
                (easy-peasy)

        4.3.useCallback: 
            缓存回调函数，
            避免传入的回调
            每次都是新的函数实例
            而导致依赖组件重新渲染，
            具有性能优化的效果

        4.4.useMemo: 
            用于缓存传入的 props，
            避免依赖的组件每次都重新渲染

        4.5.useRef: 
            获取组件的真实节点

        4.6.useLayoutEffect：

            4.6.1.DOM更新同步钩子。
                用法与useEffect类似，
                只是区别于执行时间点的不同。

            4.6.2.useEffect属于异步执行，
                并不会等待 DOM 真正渲染后执行，
                而useLayoutEffect则
                    会真正渲染后才触发；

            4.6.3.可以获取更新后的 state；
    
    5.自定义钩子(useXxxxx): 
        基于Hooks可以引用其它Hooks这个特性，
        我们可以编写自定义钩子，
            如上面的useMounted

function useTitle(title) {
    useEffect(
        () => {
            document.title = title;
        });
}

// 使用:
function Home() {
const title = '我是首页'
useTitle(title)
                            `);
    const [title, setTitle] = React.useState('React Hooks');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}