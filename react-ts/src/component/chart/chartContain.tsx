import * as React from 'react';

import { Card } from 'antd';
import { chartList } from '.';

import './chartContain.scss';

export default class ChartContain extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log(props);
    }

    public render() {
        return (
            <Card title={this.props.data.title} className="mar-b-20">
                {this.props.data.chartArr.map((item: any) => {
                   return React.createElement(chartList[item.fType][item.sType], this.props.data.chartArr);
                })}
            </Card>
        )
    }
}