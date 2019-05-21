import { Component } from 'react';
import * as React from 'react';

import { Card } from 'antd';

export default class ReduxSumUp extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div>
                <Card title="redux 总结" className="mar-b-16">
                    <h3>redux 总结描述</h3>
                    <p>抽离页面逻辑进行逻辑重新组合</p>
                </Card>
            </div>
        )
    }
}