import React, { Component } from 'react';
import logo from './logo.svg';
import Head from './view/header';
// import Body from './view/body';
import Footer from './view/footer';
// import Tick from './compoent/tick';
// import Event from './compoent/event';
// import LoginControl from './compoent/loginControl';
// import Inline from './compoent/inline';
// import PreventRender from './compoent/preventRender';
// import ListKey from './compoent/listKey';
// import Form from './compoent/form';
// import State1 from './compoent/state1_calculator';
// import State2 from './compoent/state2_calculator';
// import State1_2 from './compoent/state1_2';
// import Reusable from './compoent/reusableComponent';
// import ComponCombin from './compoent/componentCombination';
// import Jsx1 from './compoent/thoroughJsx1';
// import RefDom from './compoent/refDom';
// import FormController from './compoent/uncontrollableComponent';
// import RouterConfig1 from './compoent/routerConfig1';
// import RouterConfig2 from './compoent/routerConfig2';
// import RouterConfig3 from './compoent/routerConfig3';
// import Redux1 from './compoent/reduxCreateStore';
// import Redux2 from './compoent/reduxStore';
// import Redux3 from './compoent/reduxCombineReducers';
// import Redux4 from './compoent/reduxApplyMiddleware';
// import Redux5 from './compoent/reduxBindActionCreators';
//  原始dom
/*<div className="App">P
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">Welcome to React</h1>
	</header>
	<p className="App-intro">Pre
		To get started, edit <code>src/App.js</code> and save to reload.
	</p>
</div>*/
//  从component中获取的组件是第一个字母大写并且是单标签
/**<Tick />
 <Event />
 <LoginControl />
 <Inline unreadMessages={'asdasd'} />
 <PreventRender />
 <ListKey />
 <Form />
 <State1 />
 <State2 scale="c" />
 <State1_2 />
 <Reusable />
 <ComponCombin />
 <Jsx1 />
 <RefDom />
 <FormController />
 <RouterConfig3 />
 <Redux1 />
 <Redux2 />
 <Redux3 />
 <Redux4 />
 <Redux5 />*/
class App extends Component {
    render() {
        return (
            <div>
				<Head/>
                <Footer/>
            </div>
        );
    }
}

export default App;
