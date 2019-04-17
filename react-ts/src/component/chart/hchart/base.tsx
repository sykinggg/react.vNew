import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IState {}
// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export default class Base extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div>
                <h1>hchart-base</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}