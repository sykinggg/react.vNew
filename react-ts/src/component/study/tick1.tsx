import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class Tick1 extends React.Component<any, any> {

    public time: NodeJS.Timeout;

    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    public render() {
        return (
            <div>
                tick1
                {this.props.date.toLocaleTimeString()}
            </div>
        )
    }
}