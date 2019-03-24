import { Button, Col, Form, Icon, Input, Row } from 'antd';
import * as React from 'react';

import './advancedSearch.scss'

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

class FormAdvancedSearch extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            expand: false,
        }

        this.getField = this.getField.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    public getField() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                {
                                    messgae: 'Input something!',
                                    required: true
                                }
                            ]
                        })(
                            <Input placeholder="placeholder" />
                        )}
                    </Form.Item>
                </Col>
            )
        }
        return children;
    }

    public handleSearch(e: any) {
        e.preventDefault();
        this.props.form.validateFields((err: any, value: any) => {
            // tslint:disable-next-line:no-console
            console.log('Received values of form: ', value);
        })
    }

    public handleReset() {
        this.props.form.resetFields();
    }

    public toggle() {
        const { expand } = this.state;
        this.setState({
            expand: !expand
        })
    }

    public render() {
        return (
            <div>
                <p>高级搜索</p>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>{this.getField()}</Row>
                    <Row>
                        <Col span={24} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">Search</Button>
                            <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                clear
                            </Button>
                            <a style={{marginLeft: 8, fontSize: 12}} onClick={this.toggle}>
                                Collapse<Icon type={this.state.expand ? 'up' : 'down'} />
                            </a>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const FormAdvancedSearchInstantiation = Form.create({ name: 'FormAdvancedSearch' })(FormAdvancedSearch);

export default FormAdvancedSearchInstantiation;