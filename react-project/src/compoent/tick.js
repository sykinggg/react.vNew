import React from 'react';
/*
* 总结
* */

//	利用类的声明来生成React Component
//	利用state的状态管理来避免手动重复使用render方法重复渲染而数据没有更新
//	利用钩子函数进行初始化或销毁处理
//	单向向下的的数据流——不变的数据结构

/*
* state
* */

//	setState
//		错误:this.state.comment = 'hello';
//		正确:this.setState({comment: 'hello'});

//	异步
/*
* 	错误：
*	this.setState({
* 		counter: this.state.counter + this.props.increment,
*	});
*
*	正确:
*	this.setState((prevState, props) => ({
*		counter: prevState.counter + props.increment
*	}));
*
*	常规:
*	this.setState(function(prevState, props) {
*		return {
*			counter: prevState.counter + prps.increment
*		}
*	});
* */

/*
* 	代码描述
* */

//	当将<Clock />传递给ReactDOM.render()时，React调用Clock组件的构造函数
// 		由于Clock需要显示当前时间，它使用包括当前时间的对象初始化this.state。我们稍后将更新此state

//	React然后调用Clock组件的render()方法
//		React然后更新DOM以匹配时钟的渲染输出

//	当时钟输出插入到DOM中时，React调用componentDidMount()生命周期钩子
//		时钟组件要求浏览器设置一个定时器，每秒调用tick()一次

//	每秒钟浏览器调用tick()方法
//		Clock组件通过调用setState()和包含当前时间的对象来调度UI更新
//		由于setState()调用，React知道state已更改，并再次调用render()方法来了解屏幕上应该显示的内容
//		render()方法中的this.state.date将会不同，因此渲染输出将包括更新的时间。 React相应地更新DOM
//		如果时钟组件从DOM中被移除，React将调用componentWillUnmount()生命周期钩子，因此定时器停止
class tick extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}
	// 组件已经安装完毕
	componentDidMount() {
		this.timeID = setInterval(
			() => this.tick(),
			1000
		)
	}
	// 组件将要被卸载
	componentWillUnmount() {
		clearInterval(this.timeID);
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}
	render() {
		return(
			<div>
				<p>{this.state.date.toISOString()}</p>
			</div>
		)
	}
}

export default tick;