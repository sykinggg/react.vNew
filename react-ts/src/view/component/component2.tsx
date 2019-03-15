import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

export default class Component2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return(
            <div>Component2</div>
        )
    }
}