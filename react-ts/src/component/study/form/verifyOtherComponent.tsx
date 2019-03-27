import * as React from 'react';

import { Button, Checkbox, Col, Form, Icon, InputNumber, Radio, Rate, Row, Select, Slider, Switch, Upload } from 'antd';
import './verifyOtherComponent.scss';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

class VerifyOtherComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.normFile = this.normFile.bind(this);
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

    public normFile(e: any) {
        // tslint:disable-next-line:no-console
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    public render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div>
                <p>校验其他组件</p>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="plain Text"
                    >
                        <span className="ant-form-text">China</span>
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('select', {
                            rules: [
                                {
                                    message: 'Please select your country!',
                                    required: true,
                                },
                            ],
                        })(
                            <Select placeholder="Please select a country">
                                <Select.Option value="china">China</Select.Option>
                                <Select.Option value="usa">U.S.A</Select.Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Select[multiple]"
                    >
                        {getFieldDecorator('select-multiple', {
                            rules: [
                                { required: true, message: 'Please select your favourite colors!', type: 'array' },
                            ],
                        })(
                            <Select mode="multiple" placeholder="Please select favourite colors">
                                <Select.Option value="red">Red</Select.Option>
                                <Select.Option value="green">Green</Select.Option>
                                <Select.Option value="blue">Blue</Select.Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="InputNumber"
                    >
                        {getFieldDecorator('input-number', { initialValue: 3 })(
                            <InputNumber min={1} max={10} />
                        )}
                        <span className="ant-form-text"> machines</span>
                    </Form.Item>

                    <Form.Item
                        label="Switch"
                    >
                        {getFieldDecorator('switch', { valuePropName: 'checked' })(
                            <Switch />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Slider"
                    >
                        {getFieldDecorator('slider')(
                            <Slider marks={{
                                0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
                            }}
                            />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Radio.Group"
                    >
                        {getFieldDecorator('radio-group')(
                            <Radio.Group>
                                <Radio value="a">item 1</Radio>
                                <Radio value="b">item 2</Radio>
                                <Radio value="c">item 3</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Radio.Button"
                    >
                        {getFieldDecorator('radio-button')(
                            <Radio.Group>
                                <Radio.Button value="a">item 1</Radio.Button>
                                <Radio.Button value="b">item 2</Radio.Button>
                                <Radio.Button value="c">item 3</Radio.Button>
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Checkbox.Group"
                    >
                        {getFieldDecorator("checkbox-group", {
                            initialValue: ["A", "B"],
                        })(
                            <Checkbox.Group style={{ width: "100%" }}>
                                <Row>
                                    <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                                    <Col span={8}><Checkbox disabled={true} value="B">B</Checkbox></Col>
                                    <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                                    <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                                    <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Rate"
                    >
                        {getFieldDecorator('rate', {
                            initialValue: 3.5,
                        })(
                            <Rate />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Upload"
                        extra="longgggggggggggggggggggggggggggggggggg"
                    >
                        {getFieldDecorator('upload', {
                            getValueFromEvent: this.normFile,
                            valuePropName: 'fileList',
                        })(
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Dragger"
                    >
                        <div className="dropbox">
                            {getFieldDecorator('dragger', {
                                getValueFromEvent: this.normFile,
                                valuePropName: 'fileList',
                            })(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                </Upload.Dragger>
                            )}
                        </div>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ span: 12, offset: 6 }}
                    >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const VerifyOtherComponentInstantiation = Form.create({ name: 'VerifyOtherComponent' })(VerifyOtherComponent);

export default VerifyOtherComponentInstantiation;