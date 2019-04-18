import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { combineReducers, createStore } from 'redux';
// import { todos, visibilityFilter } from './redux/reducers'
// const reducer = combineReducers({ visibilityFilter, todos });
// const store = createStore(reducer);

// // tslint:disable-next-line:no-console
// console.log(store);
// // tslint:disable-next-line:no-console
// console.log(store.getState());

import 'antd/dist/antd.css';
import './index.scss';

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
