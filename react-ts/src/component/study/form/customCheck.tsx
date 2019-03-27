import { Cascader, DatePicker, Form, Input, InputNumber, Select, TimePicker } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

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
            <div>
                <p>自定义校验</p>
                <Form {...formItemLayout}>
                    <Form.Item
                        label='Fail'
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                    >
                        <Input placeholder="unavailable choice" id="error" />
                    </Form.Item>
                    <Form.Item
                        label="warning"
                        validateStatus="warning"
                    >
                        <Input placeholder="warning" id="warning" />
                    </Form.Item>
                    <Form.Item
                        label="Validating"
                        hasFeedback={true}
                        validateStatus="validating"
                        help="The information is being validated..."
                    >
                        <Input placeholder="I'm the content is being validated" id="validating" />
                    </Form.Item>
                    <Form.Item
                        label="Success"
                        hasFeedback={true}
                        validateStatus="success"
                    >
                        <Input placeholder="I'm the content" id="success" />
                    </Form.Item>
                    <Form.Item
                        label="Warning"
                        hasFeedback={true}
                        validateStatus="warning"
                    >
                        <Input placeholder="warning" id="warning2" />
                    </Form.Item>
                    <Form.Item
                        label="Fail"
                        hasFeedback={true}
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                    >
                        <Input placeholder="unavailable choice" id="error2" />
                    </Form.Item>
                    <Form.Item
                        label="Success"
                        hasFeedback={true}
                        validateStatus="success"
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="warning"
                        hasFeedback={true}
                        validateStatus="warning"
                    >
                        <TimePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="Error"
                        hasFeedback={true}
                        validateStatus="error"
                    >
                        <Select defaultValue="1">
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2">Option 2</Select.Option>
                            <Select.Option value="3">Option 3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="validating"
                        hasFeedback={true}
                        validateStatus="validating"
                        help="The information is being validated..."
                    >
                        <Cascader defaultValue={['1']} options={[]} />
                    </Form.Item>
                    <Form.Item
                        label="inline"
                        style={{ marginBottom: 0 }}
                    >
                        <Form.Item
                            validateStatus="error"
                            help="Please select the correct date"
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                        >
                            <DatePicker />
                        </Form.Item>
                        <span style={{ display: 'inline-blcok', width: '24px', textAlign: 'center' }}>-</span>
                        <Form.Item
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        label="Success"
                        hasFeedback={true}
                        validateStatus="success"
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}