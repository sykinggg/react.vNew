import React, { Fragment } from 'react';

import ComponentContainer from './ComponentContainer';

export default function ContainerComponent(props?: any) {

    const [content, setContent] = React.useState(`
容器组件

容器组件是处理获取数据、订阅 redux 存储等的组件
它们包含展示组件和其他容器组件，但是里面从来没有html

高阶组件

高阶组件是将组件作为参数并生成另一个组件的组件
Redux connect是高阶组件的示例
                            `);
    const [title, setTitle] = React.useState('容器组件 & 高阶组件');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}