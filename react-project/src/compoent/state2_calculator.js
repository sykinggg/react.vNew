import React, { Component } from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

class state2_calculator extends Component{
	constructor(props) {
		super(props);
		// this.state={
		// 	value: ''
		// }
	}

	change = (e) => {
		// this.setState({
		// 	value: e.target.value
		// })
		this.props.onChange(e.target.value);
	};

	render() {
		const value = this.props.value;
		const scale = this.props.scale;
		return(
			<fieldset>
				<legend>输入{scaleNames[scale]}温度</legend>
				<input value={value} onChange={this.change} />
			</fieldset>
		)
	}
}

export default state2_calculator