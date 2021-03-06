import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter, Redirect, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.less';
import Body from './component/body';
import Footer from './component/footer';
import router from './dataFormat/AppRouter';

import { Menu, LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
const SubMenu = Menu.SubMenu;

//	地址跳转
class LinkJump extends React.Component{
	render(){
		const {props} = this.props;

		return(
			<NavLink className="item" to={props.link} >
				{props.link_name}
			</NavLink>
		)
	}
}

//	内容展示
class LinkContent extends React.Component{
	render(){
		const {props} = this.props;

		return(
			<Route path={props.link} exact component={props.component} />
		)
	}
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            router
        }

		this.linkJumpDom = this.state.router.map((item, key) => <LinkJump key={key} props={item} />);
		this.linkContentDom = this.state.router.map((item, key) => <LinkContent key={key} props={item} />);
    }
    render() {
		console.log(this.state.router);
        return (
			<BrowserRouter>
				<LocaleProvider locale={zhCN}>
					<div className="ant-layout-aside">
						<aside className="ant-layout-sider">
							<div className="ant-layout-logo hide"></div>
							{this.linkJumpDom}
						</aside>
						<div className="ant-layout-main">
							<Switch>
								<Redirect from="/" exact to="/home" />
								{this.linkContentDom}
							</Switch>
						</div>
						<Footer/>
					</div>
				</LocaleProvider>
			</BrowserRouter>
        );
    }
}

export default App;
