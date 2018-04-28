import React from 'react';

/**
 *  从根本上讲，JSX就是提供了一个React.createElement(component, props, ...children)函数的语法糖
 *  由于JSX编译的本质是对React.createElement的调用，因此React库也必须始终在JSX代码的作用域中*/
function ClickMe1() {
	return(
		<div color="blue" >
			Click Me
			<div>fuck</div>
		</div>
	)
}
/** createElement嵌套*/
let child1 = React.createElement(
	'div',
	null,
	'fuck'
);
function ClickMe2() {
	return React.createElement(
		'div',
		{color: 'blue'},
		'Click Me',
		child1,
		child1,
		child1,
	)
}
/**
 * 对JSX类型使用『点』表示符
 * 注意此时的可以不用大写
 * 猜想应该都是代用的原因*/
const myComponent = {
	dates(props) {
		return(
			<div>这里有一个颜色为{props.color}的日期选择器</div>
		)
	}
}
function NumberDescribe(props) {
	let description;
	if(props.number % 2 === 0) {
		description = <strong>偶数</strong>
	}else{
		description = <strong>奇数</strong>
	}
	return <div>{props.number}是一个{description}.</div>
}
/**
 * 代码总结
 * 字符串直接量
 * 		等价
 * 			<MyComponent message="hi zhangyatao" />
 * 			<MyComponent message={'hi zhangyatao'} />
 * 		等价
 * 			<MyComponent message='&lt;3' />
 * 			<MyComponent message={'<3'} />
 * 	Props默认值为true
 * 		等价		如果没有给Props传入一个值，那么它的默认值为true
 * 			<MyTextBox autocomplete />
 * 			<MyTextBox autocomplete={true} />
 * 		注意		可以使用ES6对象的简写{foo}，也就是{foo：foo}的简称会和{foo：true}混淆
 * 	Props传递
 * 		等价		可以使用...作为一个“spread”运算符传递整个props对象
 * 			function App() {
 * 				return <Greeting firstName="yatao" lastName="zhang" />;
 * 			}
 * 			function App() {
 * 				const props = {firstName: 'yatao', lastName: 'zhang'};
 * 				return <Greeting {...props} />;
 * 			}
 * 		当创建一个通用容器时，spread props很有用
 * 		这样很容易使大量不相关的prps传递给那些不关心它们的组件
 * 	JSX中的子元素和子组件
 * 		使用		多用于内置的HTML元素
 * 			function MyComponent(props) {
 * 				return <div>{props.children}<div>; //=> <div>hello zhangyatao</div>
 * 			}
 * 			<MyComponent>Hello zhangyatao</MyComponent>
 * 		HTML标签是不会经过转义的，所以一般可以写JSX就像你写HTML一样
 * 			<div>这是一个html标签 &amp; 同时也是个JSX</div>
 * 		等价		JSX会删除行的开始和结尾处的空格
 * 				它也会删除中间的空行。 与标签相邻的空行被会被删除
 * 			<div>hello zhangyatao</div>
 * 			<div>
 * 			 	hello zhangyatao
 * 			</div>
 * 			<div>
 * 			 	hello
 * 			 	zhangyatao
 * 			</div>
 * 			<div>
 *
 * 			 	hello zhangyatao
 * 			</div>
 * 	JSX子元素
 * 		可以使用很多个JSX元素作为子元素
 * 			<Dialog>
 * 			 	<DialogHeader />
 * 			 	<DialogBody />
 * 			 	<DialogFooter />
 * 			</Dialog>
 * 		可以将不同类型的子元素混合在一起，因此JSX子元素可以与字符串直接量一起使用
 * 		一个React组件不可能返回多个React元素，但是一个JSX表达式可以包含多个子元素
 * 			因此如果你想让一个组件渲染多个东西，可以将它们统一放置在就像上面那样的div中
 * 	Javascript表达式
 * 		等价		可以将任何JavaScript表达式放在{}中作为子组件传递
 * 			function MyComponent(props) {
 * 				return <div>{props.children}<div>; //=> <div>hi zhangyatao</div>
 * 			}
 * 			<MyComponent>hi zhangyatao</MyComponent>
 * 			<MyComponent>{'hi zhangyatao'}</MyComponent>
 * 		通常用于渲染任意长度的JSX表达式列表
 * 			function Item(props) {
 * 				return <li>{props.message}</li>;
 * 			}
 * 			function TodoList(props) {
 * 				const todos = ['完成文档', '出去逛街', '打一局dota'];
 * 				return (
 * 					<ul>
 * 					 	{todos.map(message => <Item key={message} message={message} />)}
 * 					</ul>
 * 				);
 * 			}
 * 		可以与其他类型的子元素混合使用
 * 			function Hello(props) {
 * 				return <div>Hello {props.name}</div>;
 * 			}
 * 	使用函数作为子元素
 * 		插入JSX中的JavaScript表达式都最终返回为一个字符串、React元素、一个列表
 * 		props.children可以像任何其他props那样工作，它可以传递任何类型的数据
 * 		并不局限于那些告诉React应该如何渲染的东东
 * 		传递给自定义组件的子元素可以是任何东西，只要在React在渲染之前，该组件将它们转换为可以理解的东西即可
 * 		实例： 	Repeat这个组件
 * 	布尔值、null、undefined在渲染时会被自动忽略
 * 		等价		false，null，undefined和true是有效的子元素，不过他们从根本上讲是不参与渲染的
 * 			<div />
 * 			<div></div>
 * 			<div>{false}</div>
 * 			<div>{null}</div>
 * 			<div>{true}</div>
 * 		如果showHeader为true，那么这个JSX只渲染一个<Header />
 * 			<div>
 * 			 	{showHeader && <Header />}
 * 			 	<Content />
 * 			</div>
 * 		如果返回一些“假的”值就会收到一个警告，如数字0，不过React仍然会渲染
 * 			<div>
 * 			 	{props.messages.length && <Message messages={props.messages} />}
 * 			</div>
 * 		修复		要确定这个表达式在&&之前总返回布尔值
 * 			<div>
 * 			 	{props.messages.length > 0 && <Message messages={props.messages} />}
 * 			</div>
 * 		如果想要一个值如false，true，null或undefined出现在输出中，你必须先将它转换为字符串
 * */

function Repeat(props) {
	let item = [];
	let callBack = props.children;
	let numTimes = props.numTimes;
	for(let i = 0; i < numTimes; i++) {
		item.push(callBack(i))
	}
	return <div>{item}</div>
}

/**首字母小写，所以React认为该标签是一个html标签*/
class thoroughJsx1 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			number: 1
		}
	}
	onChange = (e) => {
		const num = e.target.value;
		if(isNaN(+num)) {
			e.target.value = 0;
		}
		this.setState({
			number: e.target.value
		})
	};
	render(){
		const MyCom = myComponent.dates;
		return(
			<div>
				<ClickMe1/>
				<ClickMe2/>
				<myComponent.dates color="蓝色" />
				<MyCom color="蓝色" />
				<input type="text" value={this.state.number} onChange={this.onChange}/>
				<NumberDescribe number={this.state.number} />
				<Repeat numTimes={10}>
					{index => <div key={index}>这是列表中的第{index+1}项</div>}
				</Repeat>
			</div>
		)
	}
}
export default thoroughJsx1;