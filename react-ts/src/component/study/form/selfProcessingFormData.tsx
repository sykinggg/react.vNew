import { Form, InputNumber } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class FormSelfProcessingFormData extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            num: {
                value: 11,
            },
        };

        this.handleNumberChange = this.handleNumberChange.bind(this);
    }

    public validatePrimeNumber(num: any) {
        if (num === 11) {
            return {
                errorMsg: null,
                validateStatus: 'success',
            }
        }
        return {
            errorMsg: 'The prime between 8 and 12 is 11!',
            validateStatus: 'error',
        };
    }

    public handleNumberChange(value: any) {
        this.setState({
            num: {
                ...this.validatePrimeNumber(value),
                value,
            },
        });
    }

    public render() {
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 },
        }
        const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
        const num = this.state.num;
        return (
            <div>
                <p>自行处理表单数据</p>
                <Form>
                    <Form.Item
                        {...formItemLayout}
                        label="Prime between 8 & 12"
                        validateStatus={num.validateStatus}
                        help={num.errorMsg || tips}
                    >
                        <InputNumber 
                            min={8}
                            max={12}
                            value={num.value}
                            onChange={this.handleNumberChange}
                        />
                    </Form.Item>
                </Form>
            </div>
        )
    }


}