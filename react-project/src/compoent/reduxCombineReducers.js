import React, { Component } from 'react';
import { createStore } from 'redux';

import reducer from './reducers/index';

/**
 * combineReducers(reducers)
 * 		随着应用变得越来越复杂，可以考虑将 reducer 函数 拆分成多个单独的函数
 * 			拆分后的每个函数负责独立管理 state 的一部分
 * 		combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object
 * 			合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore 方法
 * 		合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象
 * 			由 combineReducers() 返回的 state 对象
 * 			会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名
 * 		rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
 * 		rootReducer 将返回如下的 state 对象
 * 		{
 * 			potato: {
 * 				... potatoes, 和一些其他由 potatoReducer 管理的 state 对象 ...
 * 			},
 * 			tomato: {
 * 				... tomatoes, 和一些其他由 tomatoReducer 管理的 state 对象，比如说 sauce 属性 ...
 * 			}
 * 		}
 * 		通过为传入对象的 reducer 命名不同的 key 来控制返回 state key 的命名
 * 		可以调用 combineReducers({ todos: myTodosReducer, counter: myCounterReducer })
 * 			将 state 结构变为 { todos, counter }
 * 	注意：
 * 		combineReducers函数可以组织多个 reducer,使它们分别管理自身相关联的 state
 * 		类似于 Flux 中的多个 store 分别管理不同的 state
 * 		combineReducers 拥有多个 reducer，同时保持各自负责逻辑块的独立性
 * 	参数：
 * 		reducers (Object): 一个对象
 * 			它的值（value）对应不同的 reducer 函数
 * 			这些 reducer 函数后面会被合并成一个
 * 	返回值：(function)
 * 		一个调用 reducers 对象里所有 reducer 的 reducer，并且构造一个与 reducers 对象结构相同的 state 对象
 * 	规则：(每个传入 combineReducers 的 reducer )
 * 		*所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回
 * 		*永远不能返回 undefined
 * 			遇到这种情况时 combineReducers 会抛异常
 * 		*如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state
 * 			可以手动检查第一个参数是否为 undefined
 * */

console.log("Redux CombineReducers 开始");

let store = createStore(reducer);
console.log(store.getState());
/**
 * {todo: Array(0), counter: 0}
 * 	counter:0
 * 	todo:[]
 * */

store.dispatch({
	type: 'ADD_TODO',
	text: 'Use Redux'
});
console.log(store.getState());

/**
 * {todo: Array(1), counter: 0}
 * 	counter: 0
 * 	todo:['Use Redux']
 * */

store.dispatch({
	type: 'DECREMENT'
});

console.log(store.getState());
/**
 * {todo: Array(1), counter: -1}
 * */

console.log("Redux CombineReducers 结束");

/**
 * combineReducers
 * 		逻辑代码分离
 * */

class reduxCombineReducers extends Component{
	render() {
		return(
			<div>
				<p>reduxCombineReducers</p>
			</div>
		)
	}
}

export default reduxCombineReducers;