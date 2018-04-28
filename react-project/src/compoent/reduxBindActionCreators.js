import React, { Component } from 'react';

/**
 * bindActionCreators(actionCreators, dispatch)
 * 	描述：
 * 		把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象
 * 		同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们
 * 		可以直接在 Store 实例上调用 dispatch
 * 		惟一会使用到 bindActionCreators 的场景是需要把 action creator 往下传到一个组件上
 * 	参数：
 * 		*actionCreators (Function or Object): 一个 action creator，
 * 			或者一个 value 是 action creator 的对象
 * 		*dispatch (Function): 一个由 Store 实例提供的 dispatch 函数
 * 	返回值：
 * 		(Function or Object): 一个与原对象类似的对象，只不过这个对象的 value 都是会直接 dispatch 原 action creator 返回的结果的函数
 * 		如果传入一个单独的函数作为 actionCreators，那么返回的结果也是一个单独的函数
 * */

//	TodoActionCreators.js
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActionCreators from './bindActionCreators/TodoActionCreators';
console.log('Redux BindActiveCreators 开始');
console.log(TodoActionCreators);
//	{__esModule: true, addTodo: ƒ, removeTodo: ƒ}


console.log('Redux BindActiveCreators 结束');

class reduxBindActionCreators extends Component {
	constructor(props){
		super(props);

		const {dispatch} = props;

		this.boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);
		console.log(this.boundActionCreators);
		//	{addTodo: ƒ, removeTodo: ƒ}
	}
	componentDidMount(){
		// let {dispatch} = this.props;
		//
		// let action = TodoActionCreators.addTodo('Use Redux');
		// dispatch(action);
	}
	render(){
		let {todos} = this.props;
		return (
			<div>
				<h3>reduxBindActionCreators</h3>
				{todos}
			</div>
		)
	}
}

// export default connect(
// 	state => ({todos: state.todos})
// )(TodoActionCreators);

export default reduxBindActionCreators;