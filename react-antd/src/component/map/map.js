import React from 'react';
import Body from '../body';

import router from '../../dataFormat/mapRouter';

class map extends React.Component{
	constructor() {
		super();
		this.state = {
			router,
			navClassName: 'ui pointing secondary menu pad-l-0',
			bodyClassName: 'ui segment active tab'
		}
	}
	render(){
		return(
			<Body config={this.state}/>
		)
	}
}

export default map