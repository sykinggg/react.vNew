import React from 'react';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function () {
    return (
        <Layout className="text-left">
            <Header className="header" style={{padding: '0px'}}>
                <div className="logo"></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    // tslint:disable-next-line:jsx-alignment
                    style={{ lineHeight: '64px', textAlign: 'left' }}>
                    <Menu.Item key="test">111</Menu.Item>
                    <Menu.Item key="test">222</Menu.Item>
                    <Menu.Item key="test">33</Menu.Item>
                    <Menu.Item key="test">44</Menu.Item>
                </Menu>
            </Header>
            <Layout></Layout>
        </Layout>
    );
}
