import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function ComponenthighFun(props: any) {

    const [content, setContent] = React.useState(`

                            `);
    const [title, setTitle] = React.useState('mixin、hoc、render props、react-hooks');

    return(
        <Fragment>
            <a href="https://juejin.im/post/5d5f44dae51d4561df7805b4" target="_blank">待学习</a>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}