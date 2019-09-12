import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function ReduxAsyncMiddleware(props: any) {

    const [content, setContent] = React.useState(`
redux-thunk优点:

    体积小: 
        redux-thunk的实现方式很简单,只有不到20行代码

    使用简单: 
        redux-thunk没有引入
        像redux-saga或者redux-observable额外的范式,
        上手简单

redux-thunk缺陷:

    样板代码过多: 
        与redux本身一样,
        通常一个请求需要大量的代码,
        而且很多都是重复性质的

    耦合严重: 
        异步操作与redux的action偶合在一起,不方便管理

    功能孱弱: 
        有一些实际开发中常用的功能需要自己进行封装

redux-saga优点:

    异步解耦: 
        异步操作被被转移到单独 saga.js 中，
        不再是掺杂在 action.js 
        或 component.js 中

    action摆脱thunk function: 
        dispatch 的参数依然是
            一个纯粹的 action (FSA)，
        而不是thunk function

    异常处理: 
        受益于 generator function 的 saga 实现，
        代码异常/请求失败 
        都可以直接通过 try/catch 语法直接捕获处理

    功能强大: 
        redux-saga提供了大量的Saga 
        辅助函数和Effect 创建器供开发者使用,
        开发者无须封装或者简单封装即可使用

    灵活: 
        redux-saga可以将多个Saga串行/并行组合起来,
        形成一个非常实用的异步flow

    易测试，
        提供了各种case的测试方案，
        包括mock task，分支覆盖等等

redux-saga缺陷:

    额外的学习成本: 
        redux-saga不仅在
            使用难以理解的 generator function
        ,而且有数十个API,学习成本远超redux-thunk,
        最重要的是你的额外学习成本是只服务于这个库的,
        与redux-observable不同,
        redux-observable虽然也有额外学习成本
        但是背后是rxjs和一整套思想

    体积庞大: 
        体积略大,代码近2000行，
        min版25KB左右

    功能过剩: 
        实际上并发控制等功能很难用到,
        但是依然需要引入这些代码

    ts支持不友好: 
        yield无法返回TS类型

redux-observable优点:

    功能最强: 
        由于背靠rxjs这个强大的响应式编程的库,
        借助rxjs的操作符,
        可以几乎做任何你能想到的异步处理

    背靠rxjs: 
        由于有rxjs的加持,
        如果你已经学习了rxjs,
            redux-observable的学习成本并不高,
        而且随着rxjs的升级
        redux-observable也会变得更强大

redux-observable缺陷:

    学习成本奇高: 
        如果你不会rxjs,
        则需要额外学习两个复杂的库
        
    社区一般: 
        redux-observable的下载量只有redux-saga的1/5,
        社区也不够活跃,
        在复杂异步流中间件这个层面
        redux-saga仍处于领导地位
                            `);
    const [title, setTitle] = React.useState('redux异步中间件');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}