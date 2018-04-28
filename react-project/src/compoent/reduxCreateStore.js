import React, { Component } from 'react';

/**
 * createStore
 * 		创建一个拥有应用程序完整状态树
 * 	Arguments
 * 		reduce: function
 * 			当前的 state 树和要处理的 action，返回新的 state 树
 * 		[preloadedState]: any
 * 			初始时的 state
 * 			可以决定是否把服务端传来的 state （hydrate）后传给它，或者从之前保存的用户会话中恢复一个传给它
 * 			如果使用 combineReducers 创建 reducer，它必须是一个普通对象，与传入的 keys 保持同样的结构
 * 			可以自由地通过减速器可以理解的任何事情
 * 		enhancer: function
 * 			Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator
 * 			与 middleware 相似，也允许你通过复合函数改变 store 接口
 * 	Returns
 * 		Store:
 * 			保存了应用所有 state 的对象
 * 			改变 state 的惟一方法是 dispatch action
 * 			也可以 subscribe 监听 state 的变化，然后更新 UI
 * */

import { createStore } from 'redux'

console.log('Redux createStore 开始');

function todo(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text]);
		default:
			return state
	}
}

let store = createStore(todo, ['use Redux']);

console.log(store.getState());
//	["use Redux"]

store.dispatch({
	type: 'ADD_TODO',
	text: 'Read the docs'
});

console.log(store.getState());
//	(2) ["use Redux", "Read the docs"]

console.log('Redux createStore 结束');

class reduxCreateStore extends Component{
	render() {
		return(
			<div>reduxCreateStore</div>
		)
	}
}

export default reduxCreateStore