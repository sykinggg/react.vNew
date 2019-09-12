import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function FrameNative(props: any) {

    const [content, setContent] = React.useState(`
组件化: 
    其中以 React 的组件化最为彻底,甚至可以到
        函数级别的原子组件
    高度的组件化可以是我们的工程易于维护、易于组合拓展
天然分层:
    JQuery 时代的代码大部分情况下是面条代码,耦合严重
    现代框架不管是 MVC、MVP还是MVVM 模式都能
        帮助我们进行分层
    代码解耦更易于读写
生态:
    主流前端框架都自带生态
    不管是数据流管理架构还是 UI 库都有成熟的解决方案
开发效率:
    现代前端框架都默认自动更新DOM
    解放了开发者的手动DOM成本,提高开发效率
    从根本上解决了UI 与状态同步问题
                            `);
    const [title, setTitle] = React.useState('框架 && 原生');

    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}