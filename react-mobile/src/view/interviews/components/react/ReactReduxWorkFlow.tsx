import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function ReactReduxWorkFlow(props: any) {

    const [content, setContent] = React.useState(`
Provider: 

    Provider的作用是从最外部封装了整个应用，
    并向connect模块传递store

connect: 
    
    1.负责连接React和Redux

    2.获取state: 
        connect通过context获取Provider中的store，
        通过store.getState()获取
        整个store tree 上所有state

    3.包装原组件: 
        将state和action通过props的方式
        传入到原组件内部wrapWithConnect
        返回一个ReactComponent对象Connect，
        Connect重新render外部
        传入的原组件WrappedComponent，
        并把connect中传入的mapStateToProps, 
        mapDispatchToProps与组件上原有的props合并后，
        通过属性的方式传给WrappedComponent

    4.监听store tree变化: 
        connect缓存了store tree中state的状态,
        通过当前state状态和变更前state状态进行比较,
        从而确定是否调用this.setState()方法
        触发Connect及其子组件的重新渲染
                            `);
    const [title, setTitle] = React.useState('react-redux的工作流程');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}