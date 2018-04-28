import { Component } from 'react';

/** 概念总结
 * 10.特别注意
 * 	当一个页面中存在子父组件时，要注意componentWillMount和componentDidMount的使用
 * 		如果需要先加载父组件（获取网路数据）
 * 		父组件传值给子组件，再加载子组件（获取网路数据）
 * 		不能同时在子父组件中使用componentDidMount获取网路数据
 * 		因为会先执行子组件的componentDidMount，会由于未得到父组件的传值而报错
 * 	解决方案
 * 		（1）父组件：componentWillMount，子组件：componentDidMount
 * 		（2）父组件：componentWillMount，子组件：componentWillMount
 * 	当一个页面中如要实现左右联动效果
 * 		a页面中包含b1（左）和b2（右）页面，单击b1中的知识点，b2页面内容对应变化
 * 		b1向b2通过redux传参
 * 		b2首次通过 componentDidMount接收
 * 		后来通过componentWillReceiveProps接收*/

class life_hook extends Component{
	/**1.constructor():构造函数
	 * 	执行时间：组件被加载前最先调用，并且仅调用一次
	 * 	作用：定义状态机变量
	 * 	注意：第一个语句必须是super（props）*/
	constructor(props){
		super(props);
	}
	/** 2.componentWillMount()
	 * 	执行时间：组件初始渲染（render()被调用前）前调用，并且仅调用一次
	 * 	作用：如果在这个函数中调用setState改变某些状态机，react会等待setState完成后再渲染组件
	 * 	注意：子组件也有componentWillMount函数，在父组件的该函数调用后再被调用*/
	componentWillMount(){}
	/** 3.render()
	 * 	执行时间：componentWillMount之后，componentDidMount之前，
	 * 	作用：渲染挂载组件
	 * 	触发条件：（1）初始化加载页面（2）状态机改变setState ( 3 ) 接收到新的props（父组件更新）
	 * 	注意：组件所必不可少的核心函数；不能在该函数中修改状态机state*/
	render(){}
	/** 4.componentDidMount()
	 * 	执行时间：render之后被调用，并且仅调用一次
	 * 	作用：渲染挂载组件；可以使用refs
	 * 			React支持一个特殊的属性，你可以将这个属性加在任何通过render()返回的组件中
	 * 			对render()返回的组件进行一个标记，可以方便的定位的这个组件实例
	 * 	注意：子组件也有该函数，在父组件的该函数调用前被调用
	 * 			如果在该函数中修改某些状态机state，会重新渲染render组件，所以有些组件为减少渲染次数
	 * 			可以将某些修改状态机的操作放在componentWillMount函数中
	 * 			如果需要再程序启动显示初始化页面后从网路获取数据，可以将网络请求代码放在该函数中*/
	componentDidMount(){}
	/** 5.componentWillReceiveProps(nextProps)
	 * 	执行时间：组件渲染后，当组件接收到新的props时被调用
	 * 			这个函数接收一个object参数（新的props）
	 * 			props是父组件传递给子组件的
	 * 			父组件发生render的时候子组件就会调用
	 * 	作用：渲染挂载组件(可以使用refs)
	 *			React支持一个特殊的属性，可以将这个属性加在任何通过render()返回的组件中
	 *			这也就是说对render()返回的组件进行一个标记，可以方便的定位的这个组件实例
	 *	注意：react初次渲染时，该函数并不会被触发，
	 *			因此有时该函数需要和componentWillMount或componentDidMount组合使用
	 *			使用该函数一定要加nextProps参数*/
	componentWillReceiveProps(nextProps){}
	/** 6.shouldComponentUpdate(nextProps, nextState)
	 * 	执行时间：组件挂载后（即执行完render）
	 * 			接收到新的state或props时被调用，即每次执行setstate都会执行该函数，
	 * 			来判断是否重新render组件，默认返回true
	 * 			接收两个参数：第一个是心的props
	 * 			第二个是新的state
	 * 	作用：如果有些变化不需要重新render组件，可以在该函数中阻拦
	 * 	注意：该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会*/
	shouldComponentUpdate(nextProps, nextState){}
	/** 7.componentWillUpdate()
	 * 	执行时间：在接收到新的props 或者 state，重新渲染 之前立刻调用
	 * 			在初始化渲染的时候该方法不会被调用
	 * 	作用：为即将发生的重新渲染做一些准备工作
	 * 	注意：不能再该函数中通过this.setstate再次改变状态机
	 * 		如果需要，则在componentWillReceiveProps函数中改变*/
	componentWillUpdate(){}
	/** 8.componentDidUpdate()
	 * 	执行时间：重新渲染后调用，在初始化渲染的时候该方法不会被调用
	 * 	作用：使用该方法可以在组件更新之后操作DOM 元素*/
	componentDidUpdate(){}
	/** 9.componentWillUnmount()
	 * 	执行时间：组件被卸载前调用
	 * 	作用：在该方法中执行任何必要的清理，比如无效的定时器
	 * 		清除在 componentDidMount 中创建的 DOM 元素*/
	componentWillUnmount(){}
}

export default life_hook;