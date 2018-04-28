import React, { Component } from 'react';

/*
* 总结
* */
//	注意：map()中的元素都需要属性key。在哪儿循环就在哪儿设置key
//	key在兄弟组件中必须是唯一的
//	JSX中嵌入map()

function ListItem(props) {
	// 这才是正确的，在这里不需要设置key
	return <li>{props.value}</li>;
}

class listKey extends Component {
	constructor(props){
		super(props);
		this.numbers = [1, 2, 3, 4, 5];
		// this.liDom = this.numbers.map(item => <li>{item}</li>)
		this.liDom = this.numbers.map(item => <ListItem key={item.toString()} value={item}/>)
	}

	render() {
		return(
			<ul>
				{this.liDom}
			</ul>
		)
	}
}

export default listKey;