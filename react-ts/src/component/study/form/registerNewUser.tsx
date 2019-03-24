import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Icon, Input, Row, Select, Tooltip } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        children: [{
            children: [{
                label: 'West Lake',
                value: 'xihu',
            }],
            label: 'Hangzhou',
            value: 'hangzhou',
        }],
        label: 'Zhejiang',
        value: 'zhejiang',
    }, {
        children: [{
            children: [{
                label: 'Zhong Hua Men',
                value: 'zhonghuamen',
            }],
            label: 'Nanjing',
            value: 'nanjing',
        }],
        label: 'Jiangsu',
        value: 'jiangsu',
    }
];

class FormRegisterNewUser extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            autoCompleteResult: [],
            confirmDirty: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
        this.validateToNextPassword = this.validateToNextPassword.bind(this);
    }

    public handleSubmit(e: any) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                // tslint:disable-next-line:no-console
                console.log('Received values of form: ', values);
            }
        })
    }

    public handleConfirmBlur(e: any) {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value,
        });
    }

    public compareToFirstPassword(rule: any, value: any, callback: any) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    public validateToNextPassword(rule: any, value: any, callback: any) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    public handleWebsiteChange(value: any) {
        let autoCompleteResult: any;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                sm: { span: 8 },
                xs: { span: 24 },
            },
            wrapperCol: {
                sm: { span: 16 },
                xs: { span: 24 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                sm: {
                    offset: 8,
                    span: 16,
                },
                xs: {
                    offset: 0,
                    span: 24,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map((website: any) => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));


        return (
            <div>
                <p>注册新用户</p>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    message: 'The input is not valid E-mail!',
                                    type: 'email',
                                },
                                {
                                    message: 'Please input your E-mail!',
                                    require: true,
                                }
                            ]
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Password"
                    >
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    message: 'Please input your password!',
                                    required: true
                                },
                                {
                                    validator: this.validateToNextPassword,
                                }
                            ]
                        })(
                            <Input type="password" />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="confirm Password"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    message: 'Please confirm your password!',
                                    required: true,
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label={(
                            <span>
                                Nickname&nbsp;
                                <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('nickname', {
                            rules: [
                                {
                                    message: 'Please input your nickname!',
                                    required: true,
                                    whitespace: true,
                                },
                            ],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Habitual Residence"
                    >
                        {getFieldDecorator('residence', {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                        })(
                            <Cascader options={residences} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Website"
                    >
                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: 'Please input website!' }],
                        })(
                            <AutoComplete
                                dataSource={websiteOptions}
                                onChange={this.handleWebsiteChange}
                                placeholder="website"
                            >
                                <Input />
                            </AutoComplete>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Captcha"
                        extra="We must make sure that your are a human."
                    >
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                })(
                                    <Input />
                                )}
                            </Col>
                            <Col span={12}>
                                <Button>Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const FormRegisterNewUserInstantiation = Form.create({ name: 'FormRegisterNewUser' })(FormRegisterNewUser);

export default FormRegisterNewUserInstantiation