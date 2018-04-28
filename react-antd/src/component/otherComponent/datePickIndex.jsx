import React, { Component } from 'react';

import { DatePicker, Card, TimePicker, Button } from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class datePickIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			time: '',
		};
	}
	// ant的时间选择插件会有两个值
	handleChange = (time, timeString) => {
		// message.info('您选择的日期是: ' + date.toString());
		// this.setState({ date });
		this.setState({
			date: timeString
		})
	};
	onChangeTime = (time, timeString) => {
		this.setState({
			time: timeString
		})
	};
	onChangeDate = (date, dateString) => {
		console.log(date);
		console.log(dateString);
	};
	showStateObj = () => {
		console.log(this.state);
	};
	//	事件引用如果加一个小括号就代表先立即执行一次
	//	如果是日期那么自定义日期的格式一定得大写，时间可以小写-为了规则建议都是大写
	render() {
		return(
			<div>
				<Card title="时间选择" className="wp100">
					<h5>日期选择</h5>
					<p>与要用事件绑定setState</p>
					<DatePicker onChange={this.handleChange}/>
					<p>默认的日期选择</p>
					<span>
						<DatePicker onChange={this.onChangeDate} />
					</span>
					<span className="mar-l-10">
						<MonthPicker onChange={this.onChangeDate} />
					</span>
					<span className="mar-l-10">
						<RangePicker onChange={this.onChangeDate} />
					</span>
					<span className="mar-l-10">
						<WeekPicker onChange={this.onChangeDate} />
					</span>
					<span className="mar-l-10">
						<DatePicker
							defaultValue={moment('2015-01-01', "YYYY-MM-DD")}
							fromat="YYYY-MM-DD"
							onChange={this.onChangeDate}
						/>
					</span>
					<p>其他需求验证</p>
					Radio.Group
					<h5>时间选择</h5>
					<p>与要用事件绑定setState</p>
					<TimePicker onChange={this.onChangeTime} />
					<p>默认写入(基本属性)</p>
					<TimePicker defaultValue={moment('12:08:22', 'hh:mm:ss')} size='large'/>
					<span className="mar-l-10">
						<TimePicker defaultValue={moment('11:11:11', 'hh:mm:ss')}/>
					</span>
					<span className="mar-l-10">
						<TimePicker defaultValue={moment('11:11:11', 'hh:mm:ss')} size='small'/>
					</span>
					<span className="mar-l-10">
						<TimePicker defaultValue={moment('11:11:11', 'hh:mm:ss')} disabled/>
					</span>
					<span className="mar-l-10">
						<TimePicker format="hh:mm" />
					</span>
					<span className="mar-l-10">
						<TimePicker defaultValue={moment('12:12', 'hh:mm')} format="hh:mm"/>
					</span>
					<span className="mar-l-10">
						<TimePicker format="ss" />
					</span>
					<span className="mar-l-10">
						<TimePicker defaultValue={moment('55', 'ss')} format="ss" />
					</span>
					<h5>禁止选项</h5>
					<p>可以使用 disabledHours disabledMinutes disabledSeconds 组合禁止用户选择某个时间，配合 hideDisabledOptions 可以直接把不可选择的项隐藏</p>
					<span>
						<TimePicker
							disabledHours={disabledHours}
							disabledMinutes={disabledMinutes}
							placeholder="Just Disabled"
						/>
					</span>
					<span className="mar-l-10">
						<TimePicker
							disabledHours={disabledHours}
							disabledMinutes={disabledMinutes}
							hideDisabledOptions
							placeholder="Hide Directly"
						/>
					</span>
					<p>自定义DOM组件</p>
					<span>
						<TimePicker
							addon={panel => (
								<Button type="primary" onClick={() => panel.close()}>完成</Button>
							)}
						/>
					</span>
					<br/>
					<Button className="mar-t-10" type="primary" onClick={this.showStateObj}>显示当前的对象值</Button>
				</Card>
			</div>
		)
	}
}


//	禁止选项的功能
function range(start, end) {
	const result = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}
	return result;
}

function disabledHours() {
	const hours = range(0, 60);
	hours.splice(20, 4);
	return hours;
}

function disabledMinutes(h) {
	if (h === 20) {
		return range(0, 31);
	} else if (h === 23) {
		return range(30, 60);
	}
	return [];
}


export default datePickIndex;