import React, { Component } from 'react';

function Warning(props) {
	if(!props.warn){
		return null;
	}

	return (
		<div className="warning">
			warning!
		</div>
	)
}

class preventRender extends Component{
	constructor(props) {
		super(props);
		this.state = {
			showWarning: true
		}
	}
	toggleClick = () => {
		this.setState(prevState => ({
			showWarning: !prevState.showWarning
		}))
	};

	render() {
		return(
			<div>
				<Warning warn={this.state.showWarning}/>
				<button onClick={this.toggleClick}>
					{this.state.showWarning ? 'hide': 'show'}
				</button>
			</div>
		)
	}
}

export default preventRender;