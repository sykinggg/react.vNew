const defaultstate = {
    inputValue: '',
    list: []
}

export default (state = defaultstate, action: any) => {
    // tslint:disable-next-line:no-console
    console.log(state);
    // tslint:disable-next-line:no-console
    console.log(action);
    if (action.type === 'change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}
