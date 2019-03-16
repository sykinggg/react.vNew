import * as React from 'react';
import Tick from 'src/component/study/tick';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}
export default class Home1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return(
            <div>
                <p>home1</p>
                <Tick />
            </div>
        )
    }
}