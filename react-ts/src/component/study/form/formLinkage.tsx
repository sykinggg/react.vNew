import { Button, Form, Input, Select } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

class FormLinkAge extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(e: any) {
        e.preventDefault();
        this.props.form.validateFields((err: any, value: any) => {
            if (!err) {
                // tslint:disable-next-line:no-console
                console.log('Received values of form: ', value);
            }
        })
    }

    public handleSelectChange(value: any) {
        // tslint:disable-next-line:no-console
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <p>表单联动</p>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="Note"
                    >
                        {getFieldDecorator('note', {
                            rules: [
                                {
                                    message: 'Please input your note!',
                                    required: true,
                                },
                            ],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                    >
                        {getFieldDecorator('gender', {
                            rules: [
                                {
                                    message: 'Please select your gender!',
                                    required: true,
                                },
                            ],
                        })(
                            <Select
                                placeholder="Select a option and change input text above"
                                onChange={this.handleSelectChange}
                            >
                                <Select.Option value="male">male</Select.Option>
                                <Select.Option value="female">female</Select.Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ span: 12, offset: 5 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const FormLinkAgeInstantiation = Form.create({ name: 'FormLinkAge' })(FormLinkAge);

export default FormLinkAgeInstantiation;