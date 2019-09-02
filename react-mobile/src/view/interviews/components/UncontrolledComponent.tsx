import React, { Fragment } from 'react';

import ComponentContainer from './ComponentContainer';

export default function UncontrolledComponent(props?: any) {

    const [content, setContent] = React.useState(`
有一种称为非受控组件的方法可以通过使用Ref来处理表单数据
在非受控组件中，
    Ref用于直接从DOM访问表单值，
        而不是事件处理程序

使用Ref构建了相同的表单，
    而不是使用React状态
使用React.createRef() 定义Ref
    并传递该输入表单并直接
        从handleSubmit方法中的DOM访问表单值

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.input = React.createRef();

        this.handleSubmit = 
            this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + 
            this.input.current.value);
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
                            sm={2}
                            >
                            <span 
                            className="item"
                            >
                            Item
                            </span>
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control 
                            type="text" 
                            placeholder="Todo Item" 
                            ref={this.input}
                            />
                        </Col>
                        <Col sm={5}>
                            <Button
                            variant="primary"
                            onClick={this.handleSubmit}
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
    const [title, setTitle] = React.useState('非受控组件');
    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}