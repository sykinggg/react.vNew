import React, { Fragment } from 'react';

import ComponentContainer from '../../../components/common/ComponentContainer';

export default function DisplayComponent(props?: any) {

    const [content, setContent] = React.useState(`
函数或无状态组件是一个纯函数，
    它可接受接受参数，并返回react元素
这些都是没有任何副作用的纯函数
这些组件没有状态或生命周期方法

import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Header = () => {
    return(
        <Jumbotron style={{backgroundColor:'orange'}}>
            <h1>TODO App</h1>
        </Jumbotron>
    )
}
                            `);
    const [title, setTitle] = React.useState('展示组件');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}