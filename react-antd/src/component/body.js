import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { Menu, Icon } from 'antd';

//	地址跳转
class LinkJump extends React.Component{
	render(){
		const {props} = this.props;

		return(
			<NavLink className="item" exact to={props.link} >{props.link_name}</NavLink>
		)
	}
}
//	内容展示
class LinkContent extends React.Component{
	render(){
		const {props} = this.props;

		return(
			<Route exact path={props.link} component={props.component} />
		)
	}
}

class body extends React.Component{
	constructor(props){
		super(props);
		this.linkJumpDom = this.props.config.router.map((item, key) => <LinkJump key={key} props={item} />);
		this.linkContentDom = this.props.config.router.map((item, key) => <LinkContent key={key} props={item} />);
	}
	render(){
		return(
			<Router className="ant-layout-header">
				<div>
					<ul className={this.props.config.navClassName}>
						{this.linkJumpDom}
					</ul>
					<div className={this.props.config.bodyClassName}>
						{this.linkContentDom}
					</div>
				</div>
			</Router>
		)
	}
}

export default body;