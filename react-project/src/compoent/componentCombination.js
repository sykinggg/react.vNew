import React from 'react';

/** 关于继承
 * 组件可以接受任意props，包括原始值，React元素或函数
 * 如果要在组件之间重用非UI功能，建议将其提取到单独的JavaScript模块中
 * 组件可以导入它并使用该函数，对象或类，而不扩展它*/

function Contacts() {
	return <h1>tel:182012322**</h1>
}
function Chat() {
	return <span>chat content</span>
}
function SplitPanel(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
	)
}

class componentCombination extends React.Component{
	render(){
		return(
			<SplitPanel left={<Contacts/>} right={<Chat/>}/>
		)
	}
}

export default componentCombination;