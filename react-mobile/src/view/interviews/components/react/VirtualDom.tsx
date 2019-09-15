import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function VirtualDom(props: any) {

    const [content, setContent] = React.useState(`
优点:
    保证性能下限: 
        虚拟DOM可以经过diff找出最小差异,
        然后批量进行patch,这种操作虽然比不上手动优化,
        但是比起粗暴的DOM操作性能要好很多,
        因此虚拟DOM可以保证性能下限
    无需手动操作DOM: 
        虚拟DOM的diff和patch都是在一次更新
        中自动进行的,无需手动操作DOM,
        极大提高开发效率
    跨平台: 
        虚拟DOM本质上是JavaScript对象,
        而DOM与平台强相关,
        相比之下虚拟DOM可以进行更方便地跨平台操作
        例如服务器渲染、移动端开发等等

缺点:
    无法进行极致优化: 在一些性能要求极高的应用中
    虚拟DOM无法进行针对性的极致优化,
    比如VScode采用直接手动操作DOM的方式
    进行极端的性能优化

主要功能:
    虚拟DOM本质上是JavaScript对象,是对真实DOM的抽象
    状态变更时，记录新树和旧树的差异
    最后把差异更新到真正的dom中
    目前使用的基本都是snabbdom.js
    后期版本会使用inferno.js
                            `);
    const [title, setTitle] = React.useState('虚拟DOM');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}