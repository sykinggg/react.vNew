import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
const { Header } = Layout;
import * as React from 'react';

import './headerLink.scss';

export interface IProps {
    linkArr: Array<{
        name: string,
        link: string,
        component: any
    }>;
    defaultName: string;
    style: any;
}

export default class HeaderLink extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <Layout style={this.props.style}>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '34px' }}
                        >
                            {this.props.linkArr.map(item => {
                                return (
                                    <Menu.Item key={item.name}>
                                        <NavLink activeClassName="ant-menu-item-selected" to={'/' + item.link}>{item.name}</NavLink>
                                    </Menu.Item>
                                )
                            })}
                        </Menu>
                    </Header>
                    <Layout>
                        <Switch>
                            <Redirect from="/" exact={true} strict={true} to={{ pathname: this.props.defaultName }} />
                            {this.props.linkArr.map((item, i) => {
                                return (
                                    <Route key={item.link} path={'/' + item.link} component={item.component} />
                                )
                            })}
                        </Switch>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}