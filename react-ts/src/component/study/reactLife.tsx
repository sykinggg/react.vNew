import { Button, Card } from 'antd';
import * as React from 'react';
import { Component } from 'react';

export default class ReactLife extends Component<any, any> {
    private isShould: boolean = true;
    private time: any;
    constructor(props: any) {
        super(props);

        this.state = {
            date: new Date(),
        }

        this.shouldComponentUpdateBool = this.shouldComponentUpdateBool.bind(this);
        this.tick = this.tick.bind(this);
    }

    public shouldComponentUpdate() {
        return this.isShould;
    }

    public shouldComponentUpdateBool() {
        this.isShould = !this.isShould;
    }

    public componentDidMount() {
        this.time = setInterval(
            () => this.tick(),
            1000
        )
    }

    public componentWillUnmount() {
        clearInterval(this.time);
    }

    public tick() {
        this.setState(() => (
            {date: new Date()}
        ))
    }

    public render() {
        return(
            <Card title="life hook" className="mar-b-16">
                <img src="https://images2018.cnblogs.com/blog/992873/201806/992873-20180606111122824-121210545.png" className="width-100" />

                <h6>life hook</h6>
                {this.state.date.toLocaleTimeString()}
                <Button type="primary" onClick={this.shouldComponentUpdateBool}>getData</Button>
            </Card>
        )
    }
}