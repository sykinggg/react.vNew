import { Card } from 'antd';
import * as React from 'react';
import TemperatureInput from './stateUpgrade/temperatureInput';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class StateUpgrade extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { temperature: '', scale: 'c' };

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    // 父组件的方法用于统一组件间单项数据流
    public handleCelsiusChange(temperature: any) {
        this.setState({ scale: 'c', temperature });
    }

    public handleFahrenheitChange(temperature: any) {
        this.setState({ scale: 'f', temperature });
    }

    public tryConvert(temperature: any, convert: any) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    public toCelsius(fahrenheit: any) {
        return (fahrenheit - 32) * 5 / 9;
    }

    public toFahrenheit(celsius: any) {
        return (celsius * 9 / 5) + 32;
    }

    public BoilingVerdict(props: any) {
        if (props.celsius >= 100) {
            return <p>水会烧开</p>;
        }
        return <p>水不会烧开</p>;
    }

    public render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        return (
            <Card title="status 管理" className="mar-b-16">
                <p>状态提升</p>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <this.BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </Card>
        )
    }
}