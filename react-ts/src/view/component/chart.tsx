import { Card } from 'antd';
import * as React from 'react';
import ChartContain from 'src/component/chart/chartContain';

// tslint:disable-next-line:no-empty-interface
export interface IState {}
// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export default class Chart extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            chartArr: [
                {
                    fType: 'd3',
                    sType: 'base',
                    title: 'd3-title',
                },
                {
                    fType: 'echart',
                    sType: 'base',
                    title: 'echart-title',
                },
                {
                    fType: 'hchart',
                    sType: 'base',
                    title: 'hchart-title',
                }
            ],
            title: 'state-title',
        }
    }

    public render() {
        return(
            <Card title="chart">
                <ChartContain data={this.state} />
                <ChartContain data={this.state} />
                <ChartContain data={this.state} />
            </Card>
        )
    }
}