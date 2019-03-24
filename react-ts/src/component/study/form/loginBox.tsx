import { Button, Checkbox, Form, Icon, Input } from 'antd';
import * as React from 'react';

import './loginBox.scss';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

class FormLoginBox extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidMount() {
        // 默认进行form正确性验证
        // this.props.form.validateFields();
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

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <p>登陆框</p>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [
                                { required: true, message: 'Please input your username!' },
                            ],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="userName" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: 'Please input your Password!' },
                            ],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            initialValue: true,
                            valuePropName: 'checked',
                        })(
                            <Checkbox>remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            login in
                        </Button>
                            Or
                        <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const FormLoginBoxInstantiation = Form.create({ name: 'FormLoginBox' })(FormLoginBox);

export default FormLoginBoxInstantiation