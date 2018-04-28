import React, { Component } from 'react';
import moment from 'moment';

import { Card, Alert, Calendar } from 'antd';

class calendar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: moment(this.props.config.value),
            selectValue: moment(this.props.config.value),
        }
    }
    onPanelChange = (value) => {
        this.setState({value});
    }
    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value
        })
        this.props.config.onSelectedValue(value.format('YYYY-MM-DD'));
    }
    render() {
        const { value, selectedValue } = this.state;
        return (
            <Calendar 
                value={value}
                onSelect={this.onSelect}
                onPanelChange={this.onPanelChange}/>
        )
    }
}

export default calendar1;