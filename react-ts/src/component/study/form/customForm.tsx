import { Form, Input, Select } from 'antd';
import * as React from 'react';

const { Option } = Select;

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

class FormCustom extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        const value = props.value || {};
        this.state = {
            currency: value.currency || 'rmb',
            number: value.number || 0,
        }

        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.triggerChange = this.triggerChange.bind(this);
        this.getField = this.getField.bind(this);
    }

    public triggerChange(changedValue: any) {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }

    public handleNumberChange(e: any) {
        // tslint:disable-next-line:variable-name
        const number = parseInt(e.target.value || 0, 10);
        if (Number.isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }

    public handleCurrencyChange(currency: any) {
        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    }

    public getField() {
        // tslint:disable-next-line:no-console
        console.log(this.state);
    }

    public render() {
        const { size } = this.props;
        const state = this.state;
        return (
            <div>
                <p>自定义表单</p>
                <span>
                    <Input
                        type="text"
                        size={size}
                        value={state.number}
                        onChange={this.handleNumberChange}
                        style={{ width: '65%', marginRight: '3%' }}
                    />
                    <Select
                        value={state.currency}
                        size={size}
                        style={{width: '32%'}}
                        onChange={this.handleCurrencyChange}
                    >
                        <Option value="rmb">RNB</Option>
                        <Option value="dollar">Dollar</Option>
                    </Select>
                </span>
                <button type="primary" onClick={this.getField}>submit</button>
            </div>
        )
    }
}

const FormCustomInstantiation = Form.create({ name: 'FormCustom' })(FormCustom);

export default FormCustomInstantiation;