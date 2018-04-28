import React, { Component } from 'react';

import Body from '../body';

import router from '../../dataFormat/interActiveRoutes';

class interActiveIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
			router,
			navClassName: 'ui pointing secondary menu pad-l-0',
			bodyClassName: 'ui segment active tab'
		}
    }
    render() {
        return(
            <Body config={this.state} />
        )
    }
}

export default interActiveIndex;