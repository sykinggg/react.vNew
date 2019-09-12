import React, { Fragment } from 'react';

import ComponentContainer from '../../../components/common/ComponentContainer';

export default function StatefulComponent(props?: any) {

    const [content, setContent] = React.useState(`
Props 是只读属性，传递给组件以呈现UI和状态，
    可以随时间更改组件的输出

它在构造函数中定义了props和state，
    每当使用this.setState() 修改状态时，
将再次调用 render( ) 函数来更改UI中组件的输出

import React from 'react';
import '../App.css';

export class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: "some name"
        }
    }

    render() {

        // reading state
        const name = this.state.name;

        //reading props
        const address = this.props.address;

        return (
        <div className="dashboard">
            {name}
            {address}
        </div>
        );
    }
}
                            `);
    const [title, setTitle] = React.useState('Props & State');
    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}