import React from 'react';

/**
 * compose(...functions)
 * 	描述:从右到左来组合多个函数
 * 	参数：(arguments): 需要合成的多个函数
 * 		返回值将作为一个参数提供给它左边的函数，以此类推。
 * 		例外是最右边的参数可以接受多个参数，因为它将为由此产生的函数提供签名
 * 		compose(funcA, funcB, funcC) 形象为 compose(funcA(funcB(funcC())))
 * 	返回值：
 * 		(Function): 从右到左把接收到的函数合成后的最终函数
 * */

class reduxCompose extends React.Component{
	render(){
		return(
			<div>
				<h3>reduxCompose</h3>
			</div>
		)
	}
}

export default reduxCompose;