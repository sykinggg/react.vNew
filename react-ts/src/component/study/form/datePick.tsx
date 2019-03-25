import { Button, DatePicker, Form, TimePicker } from 'antd';
import * as React from 'react';

const { MonthPicker, RangePicker } = DatePicker;

class FormDatePick extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(e: any) {
        e.preventDefault();

        this.props.form.validateFields((err: any, fieldsValue: any) => {
            if (err) {
                return;
            }

            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                'range-time-picker': [
                    rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                    rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
                'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            // tslint:disable-next-line:no-console
            console.log('Received values of form: ', values);

        })
    }

    public render() {
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
        const { getFieldDecorator } = this.props.form;
        const config = {
            rules: [
                {
                    message: 'Please select time!',
                    required: true,
                    type: 'object',
                }
            ]
        }
        const rangeConfig = {
            rules: [
                {
                    message: 'Please select time!',
                    required: true,
                    type: 'array'
                }
            ]
        }
        return (
            <div>
                <p>时间类控件</p>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="DatePicker"
                    >
                        {getFieldDecorator('date-picker', config)(
                            <DatePicker />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="DatePicker[showTime]"
                    >
                        {getFieldDecorator('date-time-picker', config)(
                            <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss" />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="MonthPicker"
                    >
                        {getFieldDecorator('month-picker', config)(
                            <MonthPicker />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="RangePicker"
                    >
                        {getFieldDecorator('range-picker', rangeConfig)(
                            <RangePicker />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="RangePicker[showTime]"
                    >
                        {getFieldDecorator('range-time-picker', rangeConfig)(
                            <RangePicker showTime={true} format="YYYY-MM-DD HH:mm:ss" />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="TimePicker"
                    >
                        {getFieldDecorator('time-picker', config)(
                            <TimePicker />
                        )}
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            sm: { span: 16, offset: 8 },
                            xs: { span: 24, offset: 0 },
                        }}
                    >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const FormDatePickInstantiation = Form.create({ name: 'FormDatePick' })(FormDatePick);

export default FormDatePickInstantiation;