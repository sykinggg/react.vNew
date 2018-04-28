import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ParamsExampl = () => (
	<Router>
		<div>
			<h2>Accounts</h2>
			<ul>
				<li>
					<Link to="/nextfix">nextfix</Link>
				</li>
				<li>
					<Link to="/zillow-group">zillow-group</Link>
				</li>
				<li>
					<Link to="/yahoo">yahoo</Link>
				</li>
				<li>
					<Link to="/modus-create">modus-create</Link>
				</li>
			</ul>

			<Route path="/:id" component={Child} />
		</div>
	</Router>
);

const Child = ({match}) => {
	console.log(match);
	/**
	 * {path: "/:id", url: "/modus-create", isExact: true, params: {…}}
	 * params:{id: "modus-create"}
	 * */
	return(
		<div>
			<h3>ID: {match.params.id}</h3>
		</div>
	)
};



export default ParamsExampl;