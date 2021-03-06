import * as React from 'react';
import Tick1 from './tick1';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class Tick extends React.Component<any, any> {

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
                tick
                {this.props.date.toLocaleTimeString()}
                <Tick1 date={this.props.date} />
            </div>
        )
    }
}