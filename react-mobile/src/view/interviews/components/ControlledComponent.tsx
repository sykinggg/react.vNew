import React, { Fragment } from 'react';

import ComponentContainer from '../../../components/common/ComponentContainer';

export default function ControlledComponent(props?: any) {

    const [content, setContent] = React.useState(`
受控组件是在 React 中处理输入表单的一种技术
表单元素通常维护它们自己的状态，
    而react则在组件的状态属性中维护状态
在受控组件表单中，数据由React组件处理

当用户在 todo 项中输入名称时，
    调用一个javascript函数handleChange
        捕捉每个输入的数据并将其放入状态，
这样就在 handleSubmit中的使用数据

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = 
            this.handleChange.bind(this);
        this.handleSubmit = 
            this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + 
        this.state.value);
        event.preventDefault();
    }

  render() {
        return (
        <div className="todoform">
            <Form>
                <Form.Group 
                as={Row} 
                controlId="formHorizontalEmail"
                >
                    <Form.Label 
                        column 
                        sm={2}>
                        <span 
                        className="item"
                        >
                        Item
                        </span>
                    </Form.Label>
                    <Col 
                        sm={5}
                        >
                        <Form.Control 
                            type="text" 
                        placeholder="Todo Item" 
                        />
                    </Col>
                    <Col 
                        sm={5}>
                        <Button 
                            variant="primary" 
                            type="submit">
                            Add
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
        );
  }
}
                            `);
    const [title, setTitle] = React.useState('受控组件');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}