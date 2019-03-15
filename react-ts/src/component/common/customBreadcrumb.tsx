import * as React from 'react';

import { Breadcrumb } from 'antd';

import './customBreadcrumb.scss';

export default class CustomBreadcrumb extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}