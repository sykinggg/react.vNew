import React, {Component} from 'react';

/*
* 总结
* */

//	因为value属性是在form元素上设置的，所以显示的值将总是为this.state.value
//		React state成其value的为真正来源
//		由于change在每次击键时运行并更新React state，因此显示的值将随用户键入而更新
//	使用受控组件，使得直接修改或验证用户输入的时候，每个state变量都将具有关联的处理函数

class formReact extends Component{
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			selectValue: '',
			selectArr: [1, 2, 3, 4, 56, 5]
		};
		this.option = this.state.selectArr.map(item => <option value={item} key={item}>{item}</option>)
	}

	changeSelect = (e) => {
		this.setState({
			selectValue: e.target.value
		})
	};

	submitSelect = (e) => {
		//	取消事件的默认动作
		//		如果 type 属性是 "submit"
		//		通过调用该方法，可以阻止提交表单
		e.preventDefault();
		console.log(this.state.selectValue);
	};

	change = (e) => {
		this.setState({
			value: e.target.value
		})
	};

	submit = (e) => {
		e.preventDefault();
		console.log(this.state.value);
	};

	render() {
		return(
			<div>
				<form onSubmit={this.submit} >
					<label>
						Name:
						<input type="text"
							   value={this.state.value}
							   onChange={this.change}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				<select value={this.state.selectValue} onChange={this.changeSelect}>
					{this.option}
				</select>
				<button onClick={this.submitSelect}>submitSelect</button>
			</div>
		)
	}
}

export default formReact;