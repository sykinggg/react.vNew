// 设置action 的统一生成减少对于action type字典的依赖

import { ADD, CHANGE, DELETE } from './reduxActionTypeDemo1';

export const handleAdd = () => (
    {
        type: ADD
    }
)

export const handleChange = (value: any) => (
    {
        type: CHANGE,
        value
    }
)

export const handleDelete = (value: any) => (
    {
        type: DELETE,
        value
    }
)