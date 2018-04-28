import React, { Component } from 'react';

/*
* super 方法描述
* 根本原因是constructor会覆盖父类的constructor，导致你父类构造函数没执行，所以手动执行下
*
* 使用注意：
* 如果用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上
* 如果在constructor中要使用this.props,就必须给super加参数：super(props)
* 无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的
*
* 在子类的constructor中必须先调用super才能引用this
* super(props)的目的：在constructor中可以使用this.props
* */

function BoilingVerdict(props) {
	if(+props.celsius >= 100) {
		return <p>沸腾</p>
	}
	return <p>废了</p>
}

class state1_calculator extends Component{
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	change = (e) => {
		// let celsius = +e.target.value;
		// if(isNaN(celsius))
		this.setState({
			value: e.target.value
		})
	};

	render() {
		const value = this.state.value;
		return(
			<fieldset>
				<legend>请输入温度</legend>
				<input type="text" value={value} onChange={this.change}/>
				<BoilingVerdict celsius={parseFloat(value)} />
			</fieldset>
		)
	}
}

export default state1_calculator;