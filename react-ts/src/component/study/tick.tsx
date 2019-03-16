import * as React from 'react';

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

    public componentDidMount() {
        this.time = setInterval(
            () => this.tick(),
            1000
        );
    }

    public componentWillUnmount() {
        clearInterval(this.time);
    }

    public tick() {
        this.setState({
            date: new Date(),
        })
    }

    public render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}