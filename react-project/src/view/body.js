import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import router from '../dataFormat/router';

class body extends React.Component{
	constructor(props) {
		super(props);
		this.linkContent = router;
		this.linkContentDom = this.linkContent.map(item => <Route path={'/' + item.link} component={item.component}></Route>)
	}
	render(){
		return(
			<div>
				body
			</div>
		)
	}
}

export default body;