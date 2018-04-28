import React, { Component } from 'react';

/*
* 总结
* */
//	因为在JavaScript中，true && expression总是返回为expression
//		false && expression总是返回为false
//	使用JavaScript三元运算符判断 ? 真 : 假
class inline extends Component {
	constructor(props) {
		super(props);
		this.messages = ['zhangyatao', 'Re: zhangyatao', 'Re:Re: zhangyatao'];
	}

	render() {
		let unreadMessages = this.props.unreadMessages;
		return(
			<div>
				<h1>hello</h1>
				{
					unreadMessages.length > 0 &&
						<h2>
							{unreadMessages.length}
						</h2>
				}
			</div>
		)
	}
}

export default inline;