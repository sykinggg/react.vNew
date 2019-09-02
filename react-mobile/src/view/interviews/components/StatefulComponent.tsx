import React, { Fragment } from 'react';

import ComponentContainer from './ComponentContainer';

export default function StatefulComponent(props?: any) {

    const [content, setContent] = React.useState(`
类或有状态组件具有状态和生命周期
    可能通过setState()方法更改组件的状态
类组件是通过扩展React创建的
它在构造函数中初始化，也可能有子组件,这里有一个例子

import React from 'react';
import '../App.css';
import { ToDoForm } from './todoform';
import { ToDolist } from './todolist';

export class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
        <div className="dashboard">
            <ToDoForm />
            <ToDolist />
        </div>
        );
    }
}
                            `);
    const [title, setTitle] = React.useState('有状态组件');
    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}