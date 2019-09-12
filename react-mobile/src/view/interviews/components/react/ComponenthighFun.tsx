import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function ComponenthighFun(props: any) {

    const [content, setContent] = React.useState(`
Mixin的缺陷：

    1.组件与 Mixin 之间存在隐式依赖
    （Mixin 经常依赖组件的特定方法，
    但在定义组件时并不知道这种依赖关系）

    2.多个 Mixin 之间可能产生冲突
    （比如定义了相同的state字段）

    3.Mixin 倾向于增加更多状态，
    这降低了应用的可预测性，导致复杂度剧增

    4.隐式依赖导致依赖关系不透明，
        维护成本和理解成本迅速攀升：

        4.1.难以快速理解组件行为，
            需要全盘了解所有依赖 Mixin 的扩展行为，
            及其之间的相互影响
        
        4.2.组价自身的方法和state字段不敢轻易删改，
            因为难以确定有没有 Mixin 依赖它

        4.3.Mixin 也难以维护，
            因为 Mixin 逻辑最后会被打平合并到一起，
            很难搞清楚一个 Mixin 的输入输出
            
HOC相比Mixin的优势：

    1.HOC通过外层组件通过 Props 影响内层组件的状态，
    而不是直接改变其 State不存在冲突和互相干扰,
    这就降低了耦合度

    2.不同于 Mixin 的打平+合并，
    HOC 具有天然的层级结构（组件树结构），
    这又降低了复杂度

HOC的缺陷：

    1.扩展性限制: HOC 无法从外部访问子组件的 State
    因此无法通过shouldComponentUpdate
    滤掉不必要的更新,
    React 在支持 ES6 Class 之后
    提供了React.PureComponent来解决这个问题

    2.Ref 传递问题: Ref 被隔断,
    后来的React.forwardRef 来解决这个问题

    3.Wrapper Hell: HOC可能出现多层包裹组件的情况,
    多层抽象同样增加了复杂度和理解成本

    4.命名冲突: 如果高阶组件多次嵌套,
    没有使用命名空间的话会产生冲突,然后覆盖老属性

    5.不可见性: HOC相当于在原有组件外层再包装一个组件,
    压根不知道外层的包装是啥,对于是黑盒

Render Props优点:

    上述HOC的缺点Render Props都可以解决

Render Props缺陷：

    1.使用繁琐: HOC使用只需要借助装饰器语法
    通常一行代码就可以进行复用,
    Render Props无法做到如此简单

    2.嵌套过深: Render Props
    虽然摆脱了组件多层嵌套的问题,
    但是转化为了函数回调的嵌套

React Hooks优点：

    1.简洁: React Hooks解决了HOC
        和Render Props的嵌套问题,更加简洁
    
    2.解耦: React Hooks可以更方便地把 
        UI 和状态分离,做到更彻底的解耦
    
    3.组合: Hooks 中可以引用
    另外的 Hooks形成新的Hooks,组合变化万千

    4.函数友好: React Hooks为函数组件而生,
        从而解决了类组件的几大问题:

        4.1.this 指向容易错误

        4.2.分割在不同声明周期中的逻辑
            使得代码难以理解和维护

        4.3.代码复用成本高
            （高阶组件容易使代码量剧增）

React Hooks缺陷:

    1.额外的学习成本
        （Functional Component 
        与 Class Component 之间的困惑）

    2.写法上有限制（不能出现在条件、循环中），
        并且写法限制增加了重构成本

    3.破坏了PureComponent、
        React.memo浅比较的性能优化效果
        （为了取最新的props和state，
        每次render()都要重新创建事件处函数）

    4.在闭包场景可能会引用到旧的state、props值

    5.内部实现上不直观
        （依赖一份可变的全局状态，不再那么“纯”）
    
    6.React.memo并不能完全替代shouldComponentUpdate
    （因为拿不到 state change，只针对 props change）
                            `);
    const [title, setTitle] = React.useState('mixin、hoc、render props、react-hooks');

    return(
        <Fragment>
            <a href="https://juejin.im/post/5d5f44dae51d4561df7805b4" target="_blank">待学习</a>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}