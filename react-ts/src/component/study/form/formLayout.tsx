import { Button, Form, Input, Radio } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class FormLayout extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            formLayout: 'horizontal',
        };

        this.handleFormLayoutChange = this.handleFormLayoutChange.bind(this);
    }

    public handleFormLayoutChange(e: any) {
        this.setState({
            formLayout: e.target.value
        })
    }

    public render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
            <div>
                <p>表单布局</p>
                <Form layout={formLayout}>
                    <Form.Item
                        label="Form Layout"
                        {...formItemLayout}
                    >
                        <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
                            <Radio.Button value="horizontal">Horizontal</Radio.Button>
                            <Radio.Button value="vertical">Vertical</Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Field A"
                        {...formItemLayout}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Field B"
                        {...formItemLayout}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

}