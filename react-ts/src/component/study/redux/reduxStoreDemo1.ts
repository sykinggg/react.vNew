import { applyMiddleware, createStore } from 'redux';
import reduxReducerDemo1 from './reduxReducerDemo1';

import thunk from 'redux-thunk';

// 创建store
const reduxStoreDemo1 = createStore(
    reduxReducerDemo1,
    applyMiddleware(thunk)
);
// dispatch 派发操作action

// 添加中间件applyMiddleware 用于异步redux-thunk dispatch派发

export default reduxStoreDemo1;