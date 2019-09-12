import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function TimeSlice(props: any) {

    const [content, setContent] = React.useState(`
时间分片

    1.React 在渲染（render）的时候，不会阻塞现在的线程

    2.如果你的设备足够快，你会感觉渲染是同步的

    3.如果你设备非常慢，你会感觉还算是灵敏的

    4.虽然是异步渲染，但是你将会看到完整的渲染，
        而不是一个组件一行行的渲染出来

    5.同样书写组件的方式

场景：

    1.同步模式：
        没输入一个字符，React就开始渲染，
        当React渲染一颗巨大的树的时候，
        是非常卡的，所以才会有shouldUpdate的出现

    2.Debounced模式（延迟渲染）
        当输入完成以后，再开始渲染所有的变化
        不会阻塞用户的输入了，但是依然有非常严重的卡顿

    3.异步模式
        异步渲染模式就是不阻塞当前线程，继续跑
        时间分片正是基于可随时打断、重启的Fiber架构,
        可打断当前任务,优先处理紧急且重要的任务,
        保证页面的流畅运行

                            `);
    const [title, setTitle] = React.useState('Time Slice');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}