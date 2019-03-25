import { Form, Input } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IPorps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

const CustomizedForm = Form.create({
    name: 'global_state',
    onFieldsChange(props: any, changedFields: any) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props: any) {
        return {
            userName: Form.createFormField({
                ...props.userName,
                value: props.userName.value,
            }),
        };
    },
    onValuesChange(_: any, value: any) {
        // tslint:disable-next-line:no-console
        console.log(value);
    },
})((props: any) => {
    const { getFieldDecorator } = props.form;
    return (
        <Form layout="inline">
            <Form.Item label="UserName">
                {getFieldDecorator('userName', {
                    rules: [
                        {
                            message: 'Username is required!',
                            required: true,
                        }
                    ]
                })(
                    <Input />
                )}
            </Form.Item>
        </Form>
    )
})

export default class FormDataStorage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            fields: {
                userName: {
                    value: 'benjycui'
                },
            },
        };

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    public handleFormChange(changedFields: any) {
        this.setState((props: any, state: any) => ({
            fields: {
                ...state.fields,
                ...changedFields,
            },
        }));
    };

    public render() {
        const fields = this.state.fields;
        return(
            <div>
                <p>表单数据存储于上层组件</p>
                <CustomizedForm {...fields} onChange={this.handleFormChange} />
                <pre className="language-bash">
                    {JSON.stringify(fields, null, 2)}
                </pre>
            </div>
        )
    }
}