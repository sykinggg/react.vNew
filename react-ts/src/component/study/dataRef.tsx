import { Button, Card, Input } from 'antd';
import { Component } from 'react';
import * as React from 'react';

export default class DataRef extends Component<any, any> {
    public baseRef: any;
    public domRef: any;
    public asyncRef: any;

    constructor(props: any) {
        super(props);

        this.state = {
            dataChangeValue: ''
        }

        this.dataChange = this.dataChange.bind(this);
        this.baseRefChange = this.baseRefChange.bind(this);
        this.domRefChange = this.domRefChange.bind(this);
        this.asyncRefChange = this.asyncRefChange.bind(this);
        this.getData = this.getData.bind(this);

        this.domRef = React.createRef();
    }

    public dataChange(e: any) {
        // tslint:disable-next-line:no-console
        console.log('dataChange');
        // tslint:disable-next-line:no-console
        // console.log(e);
        // tslint:disable-next-line:no-console
        console.log(e.target.value);

        const targetValue = e.target.value;

        this.setState(() => (
            { dataChangeValue: targetValue }
        ), () => {
            // tslint:disable-next-line:no-console
            console.log(`dataChange setState down`);
        })
    }

    public baseRefChange() {
        // tslint:disable-next-line:no-console
        console.log('baseRefChange');
        // tslint:disable-next-line:no-console
        console.log(this.baseRef);
        // tslint:disable-next-line:no-console
        console.log(this.baseRef.state.value);
        // tslint:disable-next-line:no-console
        console.log(this.baseRef.value);

        const stateValue = this.baseRef.state.value;

        this.setState(() => (
            {
                dataChangeValue: stateValue
            }
        ), () => {
            // tslint:disable-next-line:no-console
            console.log(`baseRefChange setState down`);
        })
    }

    public domRefChange() {
        // tslint:disable-next-line:no-console
        console.log('domRefChange');
        // tslint:disable-next-line:no-console
        console.log(this.domRef);
        // tslint:disable-next-line:no-console
        console.log(this.domRef.current);
        // tslint:disable-next-line:no-console
        console.log(this.domRef.current.state);
        // tslint:disable-next-line:no-console
        console.log(this.domRef.current.state.value);

        this.setState(() => (
            {
                dataChangeValue: this.domRef.current.state.value
            }
        ), () => {
            // tslint:disable-next-line:no-console
            console.log(`domRefChange setState down`);
        })
    }

    public asyncRefChange() {
        // tslint:disable-next-line:no-console
        console.log('asyncRefChange');
        // tslint:disable-next-line:no-console
        console.log(this.asyncRef);
        // tslint:disable-next-line:no-console
        console.log(this.asyncRef.state.value);
        // tslint:disable-next-line:no-console
        console.log(this.asyncRef.value);

        const stateValue = this.asyncRef.state.value;

        setTimeout(() => {
            this.setState(() => (
                {
                    dataChangeValue: stateValue
                }
            ), () => {
                // tslint:disable-next-line:no-console
                console.log(`asyncRefChange setState down`);
            })
        }, 500)
    }

    public getData() {
        this.baseRefChange();
        this.domRefChange();
        this.asyncRefChange();
    }

    public render() {
        // tslint:disable-next-line:no-console
        console.log(`do render`);
        return (
            <Card title="dom && ref" className="mar-b-16">
                <Input addonBefore="传统数据绑定" placeholder="输入" onChange={this.dataChange} />
                <p>{this.state.dataChangeValue}</p>
                <Input addonBefore="callback Ref" ref={baseRef => this.baseRef = baseRef} placeholder="callback 输入" onChange={this.baseRefChange} />
                <p>{this.state.dataChangeValue}</p>
                <Input addonBefore="createRef & Ref" ref={this.domRef} placeholder="createRef 输入" onChange={this.domRefChange} />
                <p>{this.state.dataChangeValue}</p>
                <Input addonBefore="async Ref" ref={asyncRef => this.asyncRef = asyncRef} placeholder="async callback 输入" onChange={this.asyncRefChange} />
                <p>{this.state.dataChangeValue}</p>
                <Button type="primary" onClick={this.getData}>getData</Button>
            </Card>
        )
    }

}