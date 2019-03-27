import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class TemperatureInput extends React.Component<any, any>{

    public scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };
    constructor(props: any) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(e: any) {
        this.props.onTemperatureChange(e.target.value);
    }

    public render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>在{this.scaleNames[scale]}:中输入温度数值</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}