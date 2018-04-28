import React, { Component } from 'react';

function UserGreeting(props) {
	return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
	return <h1>Please sign up!</h1>
}

class gretting extends Component {
	constructor(props) {
		super(props);
		this.setState = {
			isLoggedIn: props.isLoggedIn
		}
	}

	render() {
		let content = null;
		if(this.props.isLoggedIn) {
			content = <UserGreeting/>
		}else{
			content = <GuestGreeting/>
		}

		return (
			<div>
				{content};
			</div>
		)
	}
}

export default gretting;