import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Layout } from 'antd';

const { Header } = Layout;

import './customHeader.scss';
export default class CustomHeader extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} />
        )
    }
}