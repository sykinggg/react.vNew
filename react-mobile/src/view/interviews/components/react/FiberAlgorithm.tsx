import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function FiberAlgorithm(props: any) {

    const [content, setContent] = React.useState(`
React 的核心流程可以分为两个部分:

    1.reconciliation (调度算法，也可称为 render):

        1.1.更新 state 与 props
        1.2.调用生命周期钩子
        1.3.生成 virtual dom
        1.4.通过新旧 vdom 进行 diff 算法，
            获取 vdom change；
        1.5.确定是否需要重新渲染

    2.commit:

        2.1.操作 dom 节点更新

问题:

    随着应用变得越来越庞大，
    整个更新渲染的过程开始变得吃力，
    大量的组件渲染会导致主进程长时间被占用，
    导致一些动画或高频操作出现卡顿和掉帧的情况

    在之前的调度算法中，
    React 需要实例化每个类组件，
    生成一颗组件树，
    使用 同步递归 的方式进行遍历渲染，
    而这个过程最大的问题就是无法 暂停和恢复

解决方案: 

    解决同步阻塞的方法，
        通常有两种: 异步 与 任务分割
    React Fiber 便是为了实现任务分割而诞生的

简述:

    在 React V16 将调度算法进行了重构， 
    将之前的 stack reconciler 
        重构成新版的 fiber reconciler，
    变成了具有链表和指针的 单链表树遍历算法。
    通过指针映射，
    每个单元都记录着遍历当下的上一步与下一步，
    从而使遍历变得可以被暂停和重启

    这里我理解为是一种 任务分割调度算法，
    主要是 将原先同步更新渲染的任务分割成
        一个个独立的 小任务单位，
    根据不同的优先级，
    将小任务分散到浏览器的空闲时间执行，
    充分利用主进程的事件循环机制

核心：

    Fiber 这里可以具象为一个 数据结构:

    class Fiber {
        constructor(instance) {
            this.instance = instance
            // 指向第一个 child 节点
            this.child = child
            // 指向父节点
            this.return = parent
            // 指向第一个兄弟节点
            this.sibling = previous
        }	
    }

    链表树遍历算法:

        通过 节点保存与映射，
        便能够随时地进行 停止和重启，
        这样便能达到实现任务分割的基本前提
    
        1.首先通过不断遍历子节点，到树末尾

        2.开始通过 sibling 遍历兄弟节点

        3.return 返回父节点，继续执行2

        3.直到 root 节点后，跳出遍历

    任务分割：

        reconciliation 阶段: 
            vdom 的数据对比，是个适合拆分的阶段，
            比如对比一部分树后，
            先暂停执行个动画调用，
            待完成后再回来继续比对

        Commit 阶段: 
            将 change list 更新到 dom 上，
            不适合拆分，因为使用 vdom 的意义
            就是为了节省传说中最耗时的 dom 操作，
            把所有操作一次性更新
    
    分散执行：

        任务分割后，就可以把小任务单元分散到
        浏览器的空闲期间去排队执行，
        而实现的关键是两个新API: 
        requestIdleCallback 
        与 requestAnimationFrame

        低优先级的任务交给requestIdleCallback处理，
        这是个浏览器提供的事件循环空闲期的回调函数，
        需要 pollyfill，而且拥有 deadline 参数，
        限制执行事件，以继续切分任务

        高优先级的任务交给requestAnimationFrame处理

// 类似于这样的方式
requestIdleCallback((deadline) => {
    // 当有空闲时间时，我们执行一个组件渲染；
    // 把任务塞到一个个碎片时间中去；
    while (
            (
                deadline.timeRemaining() > 0 
                || deadline.didTimeout
            ) 
            && 
            nextComponent
        ) {
        nextComponent = 
            performWork(nextComponent);
    }
});

        优先级策略: 
            文本框输入 > 
            本次调度结束需完成的任务 > 
            动画过渡 > 
            交互反馈 > 
            数据更新 > 
            不会显示但以防将来会显示的任务

Fiber 其实可以算是一种编程思想，
在其它语言中也有许多应用(Ruby Fiber)。
当遇到进程阻塞的问题时，
任务分割、异步调用 和 缓存策略 是三个显著的解决思路
                            `);
    const [title, setTitle] = React.useState('fiber');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}