import React, { Fragment } from 'react';

import ComponentContainer from './ComponentContainer';

export default function DeslarativeProgram(props?: any) {

    const [content, setContent] = React.useState(`
声明式编程是一种编程范式，它关注的是你要做什么
而不是如何做,它表达逻辑而不显式地定义步骤
这意味着我们需要根据逻辑的计算来声明要显示的组件
它没有描述控制流步骤

HTML file

<div>
    <p>Declarative Programming</p>
</div>

SQL file
select * from studens where firstName = 
'declarative';
                            `);
    const [title, setTitle] = React.useState('声明式编程');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}