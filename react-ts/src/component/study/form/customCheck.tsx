import { Form, Input } from 'antd';
import * as React from 'react';

export default class FormCustomCheck extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const formItemLayout = {
            labelCol: {
                sm: { span: 5 },
                xs: { span: 24 },
            },
            wrapperCol: {
                sm: { span: 12 },
                xs: { span: 24 },
            },
        }
        return (
            <Form {...formItemLayout}>
                <Form.Item
                    label='Fail'
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error" />
                </Form.Item>
            </Form>
        )
    }
}