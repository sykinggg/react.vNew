import React, { Component } from 'react';

import State1 from './state1_calculator';
import State2 from './state2_calculator';

//	将华氏度转换为摄氏度
function toCelsius(f) {
	return (f - 32) * 5 / 9;
}
//	将摄氏度转换为华氏度
function toFahrenheit(c) {
	return (c * 9 / 5) + 32;
}
//	数字过滤
function tryConvert(value, convert) {
	const input = parseFloat(value);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return String(rounded);
}

class state1_2 extends Component {
	constructor(props){
		super(props);
		this.state={
			value: '',
			scale: 'c'
		}
	}

	CelsiusChange = (value) => {
		this.setState({scale: 'c', value: value});
	};

	FahrenheitChange = (value) => {
		this.setState({scale: 'f', value: value});
	};

	render() {
		const scale = this.state.scale;
		const value = this.state.value;
		const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
		const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
		return(
			<div>
				<State2 scale="c" value={celsius} onChange={this.CelsiusChange}/>
				<State2 scale="f" value={fahrenheit} onChange={this.FahrenheitChange}/>
				<State1 celsius={parseFloat(celsius)}/>
			</div>
		)
	}
}

export default state1_2;