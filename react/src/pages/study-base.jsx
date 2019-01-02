import React from 'react';
import Link from 'umi/link';

class about extends React.Component{
	render() {
		return(
			<div className="text-center">
				about
				<Link to="/welcome">welcome</Link>
			</div>
		)
	}
}

export default about;