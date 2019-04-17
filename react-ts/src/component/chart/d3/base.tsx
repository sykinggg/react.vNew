import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IState {}
// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export default class Base extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log(props);
    }

    public render(){
        return(
            <div>
                <h1>d3-base</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}