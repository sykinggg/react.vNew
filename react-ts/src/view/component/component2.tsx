import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class Component2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    // tslint:disable-next-line:no-empty
    public aaaa(type?: any) {
        // tslint:disable-next-line:no-console
        console.log(type);
    }
    public render() {
        return (
            <div>
                <button onClick={this.aaaa.bind(this, 'aaaa')}>Component2</button>
            </div>
        )
    }
}