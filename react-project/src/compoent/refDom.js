import React from 'react';

/**
 * 通过ref属性设置回调函数
 * 		概念
 * 			ref属性接受一个回调函数，回调函数将在组件被挂载或卸载后立即执行
 * 			当在HTML元素上使用ref属性时，ref回调函数接收一个基础的DOM元素作为其参数
 * 		装载|卸载
 * 			当组件装载(mounting)时，React将使用DOM元素调用ref回调函数，并在卸载时用null调用它
 * 		使用ref回调函数是为类设置一个属性来访问DOM元素的常见模式	
 * */

function CustomInput() {
	return(
		<input type="text"/>
	)
}

function CustomInput1() {
	let customInput1 = null;
	function click() {
		customInput1.focus()
	}

	return(
		<div>
			<input type="text" ref={input => {customInput1 = input}}/>
			<input type="button" value="选中这个输入框" onClick={click}/>
		</div>
	)
}

class refDom extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.customInput.focus();
	}

	focus = () => {
		this.textInput.focus();
	};

	/**
	 * 无法直接在自定义组件中使用ref
	 * <CustomInput ref={input => {this.customInput = input}} />
	 * 解决方法 可以使用功能性组件的render函数内的ref属性
	 * 			customInput1组件
	 * */

	render() {
		return(
			<div>
				<input type="text" ref={input => {this.textInput = input}}/>

				<input type="button" value={'选中上面的text input'} onClick={this.focus}/>

				<input type="text" ref={input => {this.customInput = input}}/>

				<CustomInput1 />
			</div>
		)
	}
}

export default refDom;