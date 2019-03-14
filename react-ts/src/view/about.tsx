import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Layout, Breadcrumb } from 'antd';
import LeftLink from 'src/component/common/leftLink';

const { Content, Sider, Footer, Header } = Layout;

// 这里写一个类 对其传入参数类型也是有定义的第一个参数是props，第二个是state
// props就是用刚才上面我们定义的那样，state如果不传就写一个any就好了
export default class AboutView extends React.Component<any> {
    public state = {
        collapsed: false,
    };
    constructor(props: any) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log(this.props);
    }
    public onCollapse = (collapsed: boolean) => {
        // tslint:disable-next-line:no-console
        console.log(collapsed);
        this.setState({ collapsed });
    }
    public render() {
        return (
            <Layout>
                <Sider
                    collapsible={true}
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <LeftLink />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}