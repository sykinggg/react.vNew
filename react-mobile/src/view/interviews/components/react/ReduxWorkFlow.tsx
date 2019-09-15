import React, { Fragment } from 'react';

import img from '../../../../img/redux.png'

import ComponentContainer from '../../../../components/common/ComponentContainer';
import { makeStyles } from '@material-ui/styles';

const useStyles1 = makeStyles(() => ({
    img: {
        maxWidth: '100%',
    },
}));

export default function ReduxWorkFlow(props: any) {
    const classes = useStyles1(props);
    const [content, setContent] = React.useState(`

    普通总结：
Store：

    保存数据的地方，可以把它看成一个容器，
    整个应用只能有一个Store

State：

    Store对象包含所有数据，如果想得到某个时点的数据，
    就要对Store生成快照，这种时点的数据集合，就叫做State

Action：

    State的变化，会导致View的变化。
    但是，用户接触不到State，只能接触到View。
    所以，State的变化必须是View导致的。
    Action就是View发出的通知，表示State应该要发生变化了。

Action Creator：

    View要发送多少种消息，就会有多少种Action。
    如果都手写，会很麻烦，所以定义一个函数来生成Action，
    这个函数就叫Action Creator。

Reducer：

    Store收到Action以后，必须给出一个新的State，
    这样View才会发生变化。
    这种State的计算过程就叫做Reducer。
    Reducer是一个函数，它接受Action和当前State作为参数，
    返回一个新的State

dispatch：

    是View发出Action的唯一方法

工作流程：

    1.首先，用户（通过View）发出Action，
    发出方式就用到了dispatch方法

    2.然后，Store自动调用Reducer，并且传入两个参数：
    当前State和收到的Action，Reducer会返回新的State

    3.State一旦有变化，Store就会调用监听函数，来更新View

    思想|逻辑|原理-总结

Redux 是一个 数据管理中心，
    可以把它理解为一个全局的 data store 实例

核心理念:

    1.单一数据源: 
        整个应用只有唯一的状态树，
        也就是所有 state 最终维护在一个根级 Store 中

    2.状态只读: 
        为了保证状态的可控性，
        最好的方式就是监控状态的变化。
        那这里就两个必要条件：

        2.1.Redux Store 中的数据无法被直接修改；

        2.2.严格控制修改的执行；

    3.纯函数: 
        规定只能通过一个纯函数 (Reducer) 来描述修改；

实现:

    1.Store: 
        全局 Store 单例，每个Redux应用下只有一个store

        1.1.getState: 获取 state；

        1.2.dispatch: 触发 action, 更新 state；

        1.3.subscribe: 订阅数据变更，注册监听器；

// 创建
const store = createStore(Reducer, initStore)

    2.Action: 
        它作为一个行为载体，用于映射相应的 Reducer，
        并且它可以成为数据的载体，
        将数据从应用传递至 store 中，
        是 store 唯一的数据源；

// 一个普通的 Action
const action = {
	type: 'ADD_LIST',
	item: 'list-item-1',
}
// 使用：
store.dispatch(action)

// 通常为了便于调用，
会有一个 Action 创建函数 (action creater)
funtion addList(item) {
    return const action = {
        type: 'ADD_LIST',
        item,
    }
}

// 调用就会变成:
dispatch(addList('list-item-1'))

    3.Reducer: 
    用于描述如何修改数据的纯函数，
    Action 属于行为名称，
    而 Reducer 便是修改行为的实质

// 一个常规的 Reducer
// @param {state}: 旧数据
// @param {action}: Action 对象
// @returns {any}: 新数据
const initList = []
function 
    ListReducer(state = initList, action) 
    {
	switch (action.type) {
    case 'ADD_LIST':
        return state.concat([action.item])
        break
    defalut:
        return state
	}
}

注意:

    1.遵守数据不可变，不要去直接修改 state，
        而是返回出一个 新对象，
        可以使用 assign / copy / extend / 解构 等
        方式创建新对象；

    2.默认情况下需要 返回原数据，避免数据被清空；

    3.最好设置 初始值，便于应用的初始化及数据稳定；
    
进阶：

    1.React-Redux: 结合 React 使用

        1.1.<Provider>: 将 store 通过 
            context 传入组件中

        1.2.connect: 一个高阶组件，
            可以方便在 React 组件中使用 Redux；

            1.2.1.将store通过mapStateToProps进行筛选
                后使用props注入组件

            1.2.2.根据mapDispatchToProps创建方法，
                当组件调用时使用dispatch触发
                    对应的action

    2.Reducer 的拆分与重构:

        2.1.如果将所有状态的 reducer 
            全部写在一个函数中，将会 难以维护

        2.2.可以将 reducer 进行拆分，
            也就是 函数分解，
            最终再使用combineReducers()进行重构合并

    3.异步 Action: 
        由于 Reducer 是一个严格的纯函数，
        因此无法在 Reducer 中进行数据的请求，
        需要先获取数据，
        再dispatch(Action)即可，
        下面是三种不同的异步实现:

        3.1.redex-thunk

        3.2.redux-saga

        3.3.redux-observable
                            `);
    const [title, setTitle] = React.useState('redux的工作流程');

    return(
        <Fragment>
            <img className={classes.img} src={img} alt="redux 流程图"/>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}