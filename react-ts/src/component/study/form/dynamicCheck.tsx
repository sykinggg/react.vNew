import { Button, Checkbox, Form, Input } from 'antd';
import * as React from 'react';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

class FormDynamicCheck extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            checkNick: false,
        };

        this.check = this.check.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public check() {
        this.props.form.validateFields((err: any, value: any) => {
            if (!err) {
                // tslint:disable-next-line:no-console
                console.log(value);
            }
        })
    }

    public handleChange(e: any) {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickName'], { force: true });
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                message: 'Please input your name',
                                required: true,
                            },
                        ],
                    })(
                        <Input placeholder="Please input your name" />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Nickname">
                    {getFieldDecorator('nickname', {
                        rules: [{
                            message: 'Please input your nickname',
                            required: this.state.checkNick,
                        }],
                    })(
                        <Input placeholder="Please input your nickname" />
                    )}
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Checkbox
                        checked={this.state.checkNick}
                        onChange={this.handleChange}
                    >
                        Nickname is required
                    </Checkbox>
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                        Check
                    </Button>
                </Form.Item>
            </div>
        )
    }
}

const FormDynamicCheckInstantiation = Form.create({ name: 'FormDynamicCheck' })(FormDynamicCheck);

export default FormDynamicCheckInstantiation;