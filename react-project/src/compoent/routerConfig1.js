import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * react-router v4 升级了
 * 		react-router
 * 		react-router-dom(这其中包括了react-router)
 * 		react-router-native
 * 	browserrouter(BrowserRouter这种形式引入)—知道如何响应任何可能的URI
 * 	hashrouter(HashRouter这种形式引入)-只能响应对它知道的文件的请求的URI
 * 	<Router></Router>-路由容器
 * 	<Link></Link>-跳转链接的容器
 * 	<Route></Route>-路由内部的容器
 * */

const BaseRouter = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to={"/"}>home</Link>
				</li>
				<li>
					<Link to={"/about"}>about</Link>
				</li>
				<li>
					<Link to={"/topics"}>topics</Link>
				</li>
			</ul>
			<hr/>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/topics" component={Topics} />
		</div>
	</Router>
);

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

const Topics = ({match}) => (
	<div>
		<h3>Topics</h3>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route
			exact
			path={match.url}
			render={() => <h3>Please select a topic.</h3>}
		/>
	</div>
);

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
);

export default BaseRouter;