import React from 'react';

import List from './commentList';
import Input from './commentInput';

class commentApp extends React.Component{
	render(){
		return(
			<div>
				<Input/>
				<List/>
				commentApp
			</div>
		)
	}
}

export default commentApp;