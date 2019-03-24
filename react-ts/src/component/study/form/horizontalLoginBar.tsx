import { Button, Form, Icon, Input } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

class FormHorizontalLoginBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidMount() {
        this.props.form.validateFields();
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

    public hasErrors(fieldsError: any) {
        return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    public render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const userPasswordError = isFieldTouched('userPassword') && getFieldError('userPassword');
        return (
            <div>
                <p>水平登陆框</p>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="UserName" />
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={userPasswordError? 'error': ''}
                        help={userPasswordError || ''}
                    >
                        {getFieldDecorator('userPassword', {
                            rules: [{required: true, message: 'Please input your userPassword!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgab(0, 0, 0, .25)'}} />} placeholder="password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={this.hasErrors(getFieldsError())}
                        >
                            submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const FormHorizontalLoginBarInstantiation = Form.create({ name: 'horizontal_login' })(FormHorizontalLoginBar);

export default FormHorizontalLoginBarInstantiation;