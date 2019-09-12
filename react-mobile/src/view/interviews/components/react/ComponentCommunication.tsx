import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function ComponentCommunication(props: any) {

    const [content, setContent] = React.useState(`
父组件向子组件通讯:
    父组件可以向子组件通过传 props 的方式，
    向子组件进行通讯
子组件向父组件通讯:
    props+回调的方式,父组件向子组件传递props进行通讯，
    此props为作用域为父组件自身的函数，
    子组件调用该函数，将子组件想要传递的信息，
    作为参数，传递到父组件的作用域中
兄弟组件通信:
    找到这两个兄弟节点共同的父节点,
    结合上面两种方式由父节点转发信息进行通信
跨层级通信: 
    Context设计是为了共享那些对于一个组件树是“全局”的数据，
    例如当前认证的用户、主题或首选语言,
    对于跨越多层的全局数据通过Context通信再适合不过
发布订阅模式: 
    发布者发布事件，订阅者监听事件并做出反应,
    可以通过引入event模块进行通信
全局状态管理工具: 
    借助Redux或者Mobx等全局状态管理工具进行通信,
    这种工具会维护一个全局状态中心Store,
    并根据不同的事件产生新的状态
                            `);
    const [title, setTitle] = React.useState('组件通信');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}