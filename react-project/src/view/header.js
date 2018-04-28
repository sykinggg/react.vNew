import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Fotter from '../view/footer';

import router from '../dataFormat/router';

//	地址跳转
class LinkJump extends Component{
	render(){
		const {props} = this.props;

		return(
			<NavLink className="item" exact to={props.link} >{props.link_name}</NavLink>
		)
	}
}
//	内容展示
class LinkContent extends Component{
	render(){
		const {props} = this.props;

		return(
			<Route exact path={props.link} component={props.component} />
		)
	}
}
//	主要功能
class header extends React.Component{
	constructor(props){
		super(props);
		this.linkJump = router;
		this.linkJumpDom = this.linkJump.map((item, key) => <LinkJump key={key} props={item} />);
		this.linkContentDom = this.linkJump.map((item, key) => <LinkContent key={key} props={item} />);
	}
	render(){
		return(
			<div>
				<Router className="header">
					<div>
						<ul className="ui pointing menu">
							{this.linkJumpDom}
						</ul>
						<div className="body">
							{this.linkContentDom}
						</div>
					</div>
				</Router>
				<Fotter/>
			</div>
		)
	}
}

export default header;