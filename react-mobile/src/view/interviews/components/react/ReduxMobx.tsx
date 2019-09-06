import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';



export default function ReduxMobx(props: any) {
    const [content, setContent] = React.useState(`
两者对比:

    1.redux将数据保存在单一的store中，
    mobx将数据保存在分散的多个store中

    2.redux使用plain object保存数据，
    需要手动处理变化后的操作；
    mobx适用observable保存数据，
    数据变化后自动处理响应的操作

    3.redux使用不可变状态，这意味着状态是只读的，
    不能直接去修改它，而是应该返回一个新的状态，
    同时使用纯函数；mobx中的状态是可变的，
    可以直接对其进行修改

    4.mobx相对来说比较简单，在其中有很多的抽象，
    mobx更多的使用面向对象的编程思维；
    redux会比较复杂，
    因为其中的函数式编程思想掌握起来不是那么容易，
    同时需要借助一系列的中间件来处理异步和副作用

    5.mobx中有更多的抽象和封装，调试会比较困难，
    同时结果也难以预测；
    而redux提供能够进行时间回溯的开发工具，
    同时其纯函数以及更少的抽象，让调试变得更加的容易

使用：
    可以在项目中用redux作为全局状态管理,
    用mobx作为组件局部状态管理器来用
                            `);
    const [title, setTitle] = React.useState('redux与mobx的区别');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}