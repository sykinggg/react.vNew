import React, { Component } from 'react';

/** 总结
 * 使用class的方式创建React的component
 * 例如
 * classWin extends BaseWin
 * 就是组件classWin继承BaseWin*/
class Hello1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value
		}
	}

	pushState = (e) => {
		if(e.target.value) {
			this.setState({
				value: e.target.value
			});
			this.props.onChange(e.target.value);
		}
	};
	render() {
		return(
			<div>
				<label>hello1模块</label>
				<input type="text" value={this.state.value} onChange={this.pushState}/>
				<p>{this.state.value}</p>
				<button onClick={this.pushState}>提交</button>
			</div>
		)
	}
}
class reusableComponent extends Component{
	constructor() {
		super();
		this.state = {
			value: 'aaa'
		}
	}
	onChange = (value) => {
		console.log(value);
		this.setState({
			value: value
		})
	};
	click = () => {
	}
	render() {
		return(
			<div>
				<Hello1 value={this.state.value} onChange={this.onChange}/>
				<button onClick={this.onChange}>点击</button>
			</div>
		)
	}
}

export default reusableComponent;