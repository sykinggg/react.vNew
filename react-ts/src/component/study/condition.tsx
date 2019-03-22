import { Card } from 'antd';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }

export default class StudyCondition extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public dom1() {
        return (
            <div>divDom1</div>
        )
    }

    public dom2() {
        return (
            <div>divDom2</div>
        )
    }

    public nonEmpty() {
        return (
            <div>nonEmpty</div>
        )
    }

    public nullRender() {
        return (
            null
        )
    }

    public render() {
        return (
            <Card title="条件渲染" className="mar-b-16">
                <ul>
                    <li>默认渲染</li>
                    <li>&&</li>
                    <li>三目运算</li>
                </ul>
                <div>
                    <span>dom1 & dom2 渲染</span>
                    <this.dom2 />
                    <this.dom1 />
                </div>
                <div>
                    <span>false && this.nonEmpty()</span>
                    {false && <this.nonEmpty />}
                </div>
                <div>
                    <span>true && this.nonEmpty()</span>
                    {true && <this.nonEmpty />}
                </div>
                <div>
                    <span>阻止渲染</span>
                    <this.nullRender />
                </div>
            </Card>
        )
    }
}
