import * as React from 'react';

import { Card } from 'antd';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class Combination extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            login: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.Dialog = this.Dialog.bind(this);
    }

    // 组合嵌套无限
    public FancyBorderBox(props: any) {
        return (
            <div className={'FancyBorderBox FancyBorderBox-' + props.color}>
                <p>FancyBorderBox</p>
                {props.children}
            </div>
        )
    }

    //  JSX 标签内的任何内容都将通过 children 属性传入 FancyBorder
    public FancyBorder(props: any) {
        return (
            <div className={'FancyBorder FancyBorder-' + props.color}>
                <p>FancyBorder</p>
                {props.children}
            </div>
        )
    }

    public Dialog(props: any) {
        return (
            <this.FancyBorder color="blue" >
                <h1 className="Dialog-title">
                    {props.title}
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                {props.children}
            </this.FancyBorder>
        )
    }

    public handleChange(e: any) {
        this.setState({login: e.target.value})
    }

    public handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    // react不支持继承支持组合
    public render() {
        return (
            <Card title="组合" className="mar-b-16">
                <this.FancyBorderBox
                    color="green"
                >
                    <this.FancyBorder
                        color="blue"
                    >
                        <h1 className="Dialog-title">
                            Welcome
                        </h1>
                        <p className="Dialog-message">
                            Thank you for visiting our spacecraft!
                        </p>
                    </this.FancyBorder>
                </this.FancyBorderBox>
                <this.Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
                    <input value={this.state.login}
                        onChange={this.handleChange} />

                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
                </this.Dialog>
            </Card>
        )
    }
}