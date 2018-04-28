import React, { Component } from 'react';

class event extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isToggleOn: true
		};

		//	这个绑定是必要的，要不然该事件中的this就会是当前实例
		// this.handleClick = this.handleClick.bind(this);

	}

	//	原始写法——需要和bind连用|在使用事件时使用箭头函数引用(这种方法在三种方法中最low)
	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
		console.log(this);
	}

	/*
	* 产生问题的原因： 类中的方法默认不绑定this
	* 两种方法解决
	* 1 使用函数变量声明方式将当前class的实例穿进去
	* 2 在需要绑定事件的html中使用箭头函数绑定当前class的实例
	* */

	//	解决方法1：
	// handleClick = () => {
	// 	this.setState(prevState => ({
	// 		isToggleOn: !prevState.isToggleOn
	// 	}));
	// 	console.log(this);
	// };



	render() {
		return (
			<button onClick={(e) => this.handleClick(e)}>
				{this.state.isToggleOn ? 'on' : 'off'}
			</button>
		)
	}
}

export default event;