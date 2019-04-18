/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
}

/*
 * action 创建函数
 */

export function addTodo(text: any) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index: any) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: any) {
    return { type: SET_VISIBILITY_FILTER, filter }
}