import * as React from 'react';

import { Breadcrumb } from 'antd';

import { withRouter } from 'react-router-dom';
import './customBreadcrumb.scss';

class CustomBreadcrumb extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public componentWillReceiveProps() {
        // tslint:disable-next-line:no-console
        console.log(this.props.location.pathname);
    }

    public render() {
        return (
            <div>
                <p>{location.href.split('/').splice(3).join('  /  ')}</p>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {location.href.split('/').splice(3).map((item: any) => {
                        // tslint:disable-next-line:no-unused-expression
                        <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                    })}
                </Breadcrumb>
            </div>
        )
    }
}

export default withRouter(CustomBreadcrumb);