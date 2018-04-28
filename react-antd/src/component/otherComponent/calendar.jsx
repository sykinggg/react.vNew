import React from 'react';

import { Card, Alert, Calendar } from 'antd';

import Calendar1 from './calendars/calendar1';
import Calendar2 from './calendars/calendar2';

class caledar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2018-04-05',
            onSelectedValue: this.onSelectedValue,
        }
    }
    onSelectedValue = (value) => {
        this.setState({
            value
        })
    }
    render() {
        const { value } = this.state;
        console.log(value);
        return(
            <Card title="日历" className="wp100">
                <h5>普通日历</h5>
                <Alert message={`日期选择：${value}`} />
                <Calendar1 config={this.state} />
                <Calendar2 />
            </Card>
        )
    }
}

export default caledar;