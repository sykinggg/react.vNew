import React, { Component } from 'react';

/**
 * applyMiddleware
 * 		Middleware 最常见的使用场景是无需引用大量代码或依赖类似 Rx 的第三方库实现异步 actions
 * 		可以像 dispatch 一般的 actions 那样 dispatch 异步 actions
 * 		实例：
 * 			redux-thunk支持 dispatch function，以此让 action creator 控制反转
 * 				thunk:	被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
 * 			redux-promise支持 dispatch 一个异步的 Promise action，
 * 				并且在 Promise resolve 后可以 dispatch 一个普通的 action
 * 		Middleware 并不需要和 createStore 绑在一起使用，也不是 Redux 架构的基础组成部分
 * 		虽然不同的 middleware 可能在易用性和用法上有所不同，它仍被作为扩展 dispatch 的唯一标准的方式
 * 		参数
 * 			...middlewares (arguments): 遵循 Redux middleware API 的函数
 * 				每个 middleware 接受 Store 的 dispatch 和 getState 函数作为命名参数，并返回一个函数
 * 				该函数会被传入 被称为 next 的下一个 middleware 的 dispatch 方法
 * 				并返回一个接收 action 的新函数，这个函数可以直接调用 next(action)
 * 				调用链中最后一个 middleware 会接受真实的 store 的 dispatch 方法作为 next 参数，
 * 					并借此结束调用链
 * 			签名格式
 * 			({ getState, dispatch }) => next => action
 * 		Returns：（function）
 * 			一个应用了 middleware 后的 store enhancer
 * 			store enhancer 的签名是 createStore => createStore
 * 			直接作为最后一个 enhancer 参数传递给 createStore() 函数
 * */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import todo from './reducers/todos';

console.log("Redux ApplyMiddleware 开始");

function logger({ getState }) {
	return next => action => {

		console.log(next);
		/**ƒ dispatch(action) {
			if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /!* default *!/])(action)) {
				throw new Error('Actions must be plain objects. ' + 'Use custom middlewar…*/

		console.log('will dispatch', action)
		//	will dispatch {type: "ADD_TODO", text: "Understand the middleware"}

		// 调用 middleware 链中下一个 middleware 的 dispatch。
		let returnValue = next(action)

		console.log('state after dispatch', getState())
		//	state after dispatch (2) ["Use Redux", "Understand the middleware"]

		// 一般会是 action 本身，除非
		// 后面的 middleware 修改了它。
		return returnValue
	}
}

let store = createStore(
	todo,
	['Use Redux'],
	applyMiddleware(logger)
)

store.dispatch({
	type: 'ADD_TODO',
	text: 'Understand the middleware'
})

console.log(store.getState());
/**
 * 如果中间件有返回值
 * ["Use Redux", "Understand the middleware"]
 * 如果中间件没有返回值
 *  ["Use Redux", "Understand the middleware"]
 * */

/**
 * 使用 Thunk Middleware 来做异步 Action
 * */
// import thunk from 'redux-thunk';
// import * as counter from './reducers/counter';
//
// let reducer = combineReducers(counter);
// // applyMiddleware 为 createStore 注入了 middleware:
// let store1 = createStore(reducer, applyMiddleware(thunk));
//
// function fetchSecretSauce(){
// 	return fetch('https://www.google.com/search?q=secret+sauce')
// }
//
// // 这些是普通 action creator。
// // 它们返回的 action 不需要任何 middleware 就能被 dispatch。
// // 但是，他们只表达「事实」，并不表达「异步数据流」
//
// function makeASandwich(forPerson, secretSauce) {
// 	return {
// 		type: 'MAKE_SANDWICH',
// 		forPerson,
// 		secretSauce
// 	}
// }
//
// function apologize(fromPerson, toPerson, error) {
// 	return {
// 		type: 'APOLOGIZE',
// 		fromPerson,
// 		toPerson,
// 		error
// 	}
// }
//
// function withdrawMoney(amount) {
// 	return {
// 		type: 'WITHDRAW',
// 		amount
// 	}
// }
//
// //	即使不使用 middleware，也可以 dispatch action：
// store1.dispatch(withdrawMoney(100));
//
// //	thunk函数
// function makeASandwichWithSecretSauce(forPerson) {
//
// 	// 控制反转！
// 	// 返回一个接收 `dispatch` 的函数。
// 	// Thunk middleware 知道如何把异步的 thunk action 转为普通 action。
//
// 	return function (dispatch) {
// 		return fetchSecretSauce().then(
// 			sauce => dispatch(makeASandwich(forPerson, sauce)),
// 			error => dispatch(apologize('The Sandwich Shop', forPerson, error))
// 		)
// 	}
//
// }
//
// // Thunk middleware 可以让我们像 dispatch 普通 action
// // 一样 dispatch 异步的 thunk action。
//
// store1.dispatch(
// 	makeASandwichWithSecretSauce('Me')
// );
//
// // 它甚至负责回传 thunk 被 dispatch 后返回的值，
// // 所以可以继续串连 Promise，调用它的 .then() 方法。
//
// store1.dispatch(
// 	makeASandwichWithSecretSauce('My wife')
// ).then(() => {
// 	console.log('Done!')
// });
//
// // 实际上，可以写一个 dispatch 其它 action creator 里
// // 普通 action 和异步 action 的 action creator，
// // 而且可以使用 Promise 来控制数据流。
//
// function makeSandwichesForEverybody() {
// 	return function (dispatch, getState) {
// 		if(!getState().sandwiches.isShopOpen) {
// 			// 返回 Promise 并不是必须的，但这是一个很好的约定，
// 			// 为了让调用者能够在异步的 dispatch 结果上直接调用 .then() 方法。
// 			return Promise.resolve();
// 		}
//
// 		// 可以 dispatch 普通 action 对象和其它 thunk，
// 		// 这样我们就可以在一个数据流中组合多个异步 action。
//
// 		return dispatch(
// 			makeASandwichWithSecretSauce('My Grandma')
// 		).then(() => {
// 			Promise.all([
// 				dispatch(makeASandwichWithSecretSauce('Me')),
// 				dispatch(makeASandwichWithSecretSauce('My wife'))
// 			])
// 		}).then(() =>
// 			dispatch(makeASandwichWithSecretSauce('Our kids'))
// 		).then(() =>
// 			dispatch(getState().myMoney > 42 ?
// 				withdrawMoney(42):
// 				apologize('Me', 'The Sandwich Shop')
// 			)
// 		)
// 	}
// }
//
//
// console.log(store1);

console.log("Redux ApplyMiddleware 结束");

class reduxApplyMiddleware extends Component{
	render(){
		return(
			<div>
				<p>reduxApplyMiddleware</p>
			</div>
		)
	}
}

export default reduxApplyMiddleware