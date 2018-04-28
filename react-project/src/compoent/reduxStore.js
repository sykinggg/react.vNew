import React, { Component } from 'react';

/**
 * Store（类似于vuex）
 * 		Store 就是用来维持应用所有的 state 树 的一个对象
 * 		改变 store 内 state 的惟一途径是对它 dispatch 一个 action
 * 		Store 不是类。它只是有几个方法的对象
 * 		要创建它，只需要把根部的 reducing 函数 传递给 createStore
 * 		注意：和Flux的区别
 * 			Redux 没有 Dispatcher 且不支持多个 store
 * 			只有一个单一的 store 和一个根级的 reduce 函数（reducer）
 * 			Redux的优化：
 * 				把根级的 reducer 拆成多个小的 reducers，分别独立地操作 state 树的不同部分，
 * 					而不是添加新的 stores
 * 				一个 React 应用只有一个根级的组件，这个根组件又由很多小组件构成
 * methods:
 * 		*getState()
 * 			返回应用当前的 state 树
 * 			与 store 的最后一个 reducer 返回值相同
 * 			Returns(any)
 * 			应用当前的 state 树
 * 		*dispatch(action)
 * 			发送一个动作
 * 			触发 state 变化的惟一途径
 * 			会使用当前 getState() 的结果和传入的 action 以同步方式的调用 store 的 reduce 函数
 * 			返回值会被作为下一个 state
 * 			注意：和Flux的区别
 * 				当在 reducer 内部调用 dispatch 时，
 * 					将会抛出错误提示“Reducers may not dispatch actions.（Reducer 内不能 dispatch action）”
 * 				相当于 Flux 里的 “Cannot dispatch in a middle of dispatch（dispatch 过程中不能再 dispatch）”，
 * 					但并不会引起对应的错误
 * 				在 Flux 里，当 Store 处理 action 和触发 update 事件时，dispatch 是禁止的
 * 					限制了不能在生命周期回调里 dispatch action，还有其它一些本来很正常的地方
 * 				在 Redux 里，只会在根 reducer 返回新 state 结束后再会调用事件监听器
 * 					可以在事件监听器里再做 dispatch
 * 					惟一不能在 reducer 中途 dispatch 的原因是要确保 reducer 没有副作用
 * 					如果 action 处理会产生副作用，正确的做法是使用异步 action 创建函数
 * 			参数
 * 				action
 * 				描述应用变化的普通对象
 * 				Action 是把数据传入 store 的惟一途径，
 * 					所以任何数据，无论来自 UI 事件，网络回调或者是其它资源如 WebSockets，
 * 					最终都应该以 action 的形式被 dispatch
 * 				按照约定，action 具有 type 字段来表示它的类型
 * 				type 也可被定义为常量或者是从其它模块引入
 * 				最好使用字符串，而不是 Symbols 作为 action，因为字符串是可以被序列化的
 * 				除了 type 字段外，action 对象的结构完全取决于你
 * 			returns
 * 				object
 * 		注意：
 * 			使用 createStore 创建的 “纯正” store 只支持普通对象类型的 action，而且会立即传到 reducer 来执行
 * 				如果用 applyMiddleware 来套住 createStore 时，middleware 可以修改 action 的执行
 * 				并支持执行 dispatch intent（意图）
 * 				Intent 一般是异步操作如 Promise、Observable 或者 Thunk
 * */

import { createStore } from 'redux';

console.log("Redux Store 开始");

function todo(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO1':
			return state[action.id] = action.text;
		case 'ADD_TODO':
			return state.concat([action.text]);
		default:
			return state
	}
}

let store = createStore(todo, ['Use Redux']);

function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text: text
	}
}

let s1 = store.dispatch(addTodo('Read the docs'));
let s2 = store.dispatch(addTodo('Read about the middleware'));
let s0 = store.dispatch({
	type: 'ADD_TODO1',
	id: 110,
	text: 'text 我勒个去'
});

console.log(s0);
//	{type: "ADD_TODO1", id: 110, text: "text 我勒个去"}

console.log(s1);
//	{type: "ADD_TODO", text: "Read the docs"}
console.log(s2);
//	{type: "ADD_TODO", text: "Read about the middleware"}
console.log(store);
//	{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
console.log(store.getState());
/**
 * 没有s0
 * 		["Use Redux", "Read the docs", "Read about the middleware"]
 * s0最先执行
 * 		text 我勒个去Read the docsRead about the middleware
 * s0最后执行
 * 		text 我勒个去
 * */

/**
 * subscribe(listener)
 * 		添加了一个更改监听器
 * 		每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化
 * 		可以在回调函数里调用 getState() 来拿到当前 state
 * 	注意:可以在变化监听器里面进行 dispatch()
 * 		*监听器调用 dispatch() 仅仅应当发生在响应用户的 actions 或者特殊的条件限制下
 * 			（比如： 在 store 有一个特殊的字段时 dispatch action）
 * 			虽然没有任何条件去调用 dispatch() 在技术上是可行的，
 * 			但是随着每次 dispatch() 改变 store 可能会导致陷入无穷的循环
 * 		*订阅器（subscriptions） 在每次 dispatch() 调用之前都会保存一份快照
 * 			当在正在调用监听器（listener）的时候订阅(subscribe)或者去掉订阅（unsubscribe），
 * 			对当前的 dispatch() 不会有任何影响
 * 			但是对于下一次的 dispatch()，无论嵌套与否，都会使用订阅列表里最近的一次快照
 * 		*订阅器不应该注意到所有 state 的变化，在订阅器被调用之前，往往由于嵌套的 dispatch() 导致 state 发生多次的改变
 * 			保证所有的监听器都注册在 dispatch() 启动之前，这样，在调用监听器的时候就会传入监听器所存在时间里最新的一次 state
 * 	就是类似于angular5中的rxJs
 * 		Arguments
 * 			调度动作后调用的回调，状态树可能已经改变
 * 		Returns
 * 			一个取消订阅更改侦听器的函数
 * */

function select(state) {
	return state;
}

let currentValue;
function handleChange() {
	let previousValue = currentValue;
	currentValue = select(store.getState());

	if(previousValue != currentValue) {
		console.log(previousValue);
		//	undefined
		console.log(currentValue);
		/**
		 * 没有s0
		 * 		["Use Redux", "Read the docs", "Read about the middleware"]
		 * s0最先执行
		 * 		text 我勒个去Read the docsRead about the middleware
		 * s0最后执行
		 * 		text 我勒个去
		 * */
	}
}

let unsubscribe = store.subscribe(handleChange);
unsubscribe();

console.log("Redux Store 结束");

class reduxStore extends Component{
	handleChange = handleChange;
	render() {
		return(
			<div>
				<p>reduxStore</p>
				<button onClick={this.handleChange}>handleChange</button>
			</div>
		)
	}
}

/**
 * replaceReducer(nextReducer)
 * 		替换store当前使用的dispath来计算状态
 * 	Arguments
 * 		nextReducer: Function
 * */

export default reduxStore;