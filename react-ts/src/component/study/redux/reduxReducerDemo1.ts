import { ADD, CHANGE, DELETE } from './reduxActionTypeDemo1';

const defaultstate = {
    inputValue: '1111',
    list: []
}

// reducer 可以接受state但不能修改state
// 纯函数: 当输入确定返回的也是固定的 date(时间); async(异步); 等两种方法不是纯函数不能用于reducer
export default (state = defaultstate, action: any) => {
    // tslint:disable-next-line:no-console
    console.log(state);
    // tslint:disable-next-line:no-console
    console.log(action);
    if (action.type === CHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD) {
        const newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue) {
            newState.list.push(newState.inputValue);
        }
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }
    return state;
}
