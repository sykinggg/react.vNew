import { Layout } from 'antd';
import * as React from 'react';
import CustomBreadcrumb from 'src/component/common/customBreadcrumb';
import CustomFooter from 'src/component/common/customFooter';
import CustomHeader from 'src/component/common/customHeader';
import LeftLink from 'src/component/common/leftLink';

const { Content, Sider } = Layout;

import { Redirect, Route, Switch } from 'react-router-dom';
import './customContent.scss';

export default class CustomContent extends React.Component<any, any> {

    public state = {
        collapsed: false,
    };


    constructor(props: any) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log(this.props);
    }

    public onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    }

    public render() {
        return (
            <Layout>
                <Sider
                    collapsible={true}
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <LeftLink linkArr={this.props.linkArr} />
                </Sider>
                <Layout>
                    <CustomHeader />
                    <Content style={{ margin: '0 16px' }}>
                        <CustomBreadcrumb />
                        <Switch>
                            <Redirect from={this.props.fromLink} exact={true} strict={true} to={{ pathname: this.props.defaultName }} />
                            {this.props.linkArr.map((item: any) => {
                                return (
                                    <Route exact={item.name === this.props.defaultName} key={item.link} path={item.link} component={item.component} />
                                )
                            })}
                        </Switch>
                    </Content>
                    <CustomFooter />
                </Layout>
            </Layout>
        )
    }
}