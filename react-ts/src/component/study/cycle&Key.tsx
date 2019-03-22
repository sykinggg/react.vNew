import { Button, Card, InputNumber } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

export default class CycleKey extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            numArr: [1, 2, 3, 4, 5]
        }

        this.onChange = this.onChange.bind(this);
        this.clickData = this.clickData.bind(this);
    }

    public onChange(event: any) {
        // tslint:disable-next-line:no-console
        console.log(event);
    }

    public clickData(event: any) {
        // tslint:disable-next-line:no-console
        console.log(event);
    }

    public cycle(num: number) {
        return(
            <div key={num}>
                <p>用大括号绑定的数据{num}</p>
                <p>否则绑定寂寞num</p>
            </div>
        )
    }

    public render() {
        return(
            <Card title="列表 & Keys" className="mar-b-16">
                <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
                <Button type="primary" onClick={this.clickData}>clickData</Button>
                <div>
                    <span>map循环</span>
                    {this.state.numArr.map((item: any) => this.cycle(item))}
                </div>
            </Card>
        )
    }
}