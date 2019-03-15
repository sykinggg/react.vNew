import * as React from 'react';

import { Layout } from 'antd';
const { Footer } = Layout;

import './customFooter.scss';

export default class CustomFooter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        )
    }
}