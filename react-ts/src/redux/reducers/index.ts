import { combineReducers } from 'redux'
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters } from '../actions/index';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action: any) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action: any) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    text: action.text,
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo: any, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter,
})

export default todoApp