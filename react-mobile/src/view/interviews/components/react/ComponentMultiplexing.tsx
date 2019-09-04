import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function ComponentMultiplexing(props: any) {

    const [content, setContent] = React.useState(`
高阶组件:
    属性代理
    反向继承
渲染属性;
react-hooks
                            `);
    const [title, setTitle] = React.useState('组件/逻辑复用');

    return(
        <Fragment>
            <a href="https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/abstract.md" target="_blank">复杂的一批</a>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}