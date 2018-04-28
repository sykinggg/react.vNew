import React, { Component } from 'react';
import GuestGreeting from './gretting';

function LoginButton(props) {
	return(
		<button onClick={props.onClick}>
			Login
		</button>
	)
}

function LogoutButton(props) {
	return(
		<button onClick={props.onClick}>
			Logout
		</button>
	)
}

class loginControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: true
		}
	}

	loginClick = () => {
		this.setState({
			isLogin: true
		})
	};

	logoutClick = () => {
		this.setState({
			isLogin: false
		})
	};

	render() {
		const isLoggedIn = this.state.isLogin;
		let button = null;

		if(isLoggedIn) {
			button = <LoginButton onClick={this.logoutClick}/>
		}else{
			button = <LogoutButton onClick={this.loginClick}/>
		}

		return (
			<div>
				{button}
				<GuestGreeting isLoggedIn={this.state.isLogin} />
			</div>
		)
	}
}

export default loginControl;