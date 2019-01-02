import React from 'react';
import router from 'umi/router';

class Welcome extends React.Component{
	render() {
		return(
			<div>
				welcome
				<a onClick={() => {router.push('/study/base')}}>study/base</a>
				<a href="https://umijs.org/zh/guide/app-structure.html#es6-%E8%AF%AD%E6%B3%95" target="_blank">umi</a>
				<a href="https://github.com/dvajs/dva/blob/master/README_zh-CN.md" target="_blank">dva</a>
				<a href="https://pro.ant.design/docs/router-and-nav-cn" target="_blank">ant</a>
			</div>
		)
	}
}

export default Welcome;