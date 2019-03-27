import * as React from 'react';

import { Card } from 'antd';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class ReactIdea extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <Card title="react 理念">
                <h3 className="mar-b-16">react 理念</h3>
                <ul>
                    <li>根据单一功能原则划分组件分级</li>
                    <li>界面会随着state变化而变化;props是一种父级向子级传递数据的方式</li>
                    <li>定义 UI 状态的最小(但完整)表示</li>
                    <li>
                        <p>确定State 应该位于哪里</p>
                        <ul>
                            <li>确定每一个需要这个 state 来渲染的组件</li>
                            <li>找到一个公共所有者组件(一个在层级上高于所有其他需要这个 state 的组件的组件)</li>
                            <li>这个公共所有者组件或另一个层级更高的组件应该拥有这个 state</li>
                            <li>创建一个仅用来保存状态的组件并把它加入比这个公共所有者组件层级更高的地方</li>
                        </ul>
                    </li>
                    <li>添加反向数据流</li>
                </ul>
            </Card>
        )
    }
}