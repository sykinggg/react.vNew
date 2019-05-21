// import { Button, Card } from 'antd';
import * as React from 'react';
// import Tick from 'src/component/study/tick';

// import Combination from 'src/component/study/combination';
// import StudyCondition from 'src/component/study/condition';
// import CycleKey from 'src/component/study/cycle&Key';
// import DataRef from 'src/component/study/dataRef';
// import StudyForm from 'src/component/study/form';
// import ReactIdea from 'src/component/study/reactIdea';
// import ReactLife from 'src/component/study/reactLife';
// import ReactSumUp from 'src/component/study/reactSumUp';
import ReduxStoreBase from 'src/component/study/redux/reduxStoreBase';
// import StateUpgrade from 'src/component/study/stateUpgrade';
import './study.scss';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }
export default class Study extends React.Component<any, any> {
    public time: NodeJS.Timeout;
    constructor(props: any) {
        super(props);
        this.state = {
            click: '',
            date: new Date(),
        }

        // 将当前作用域绑定到方法中
        this.clickDomData = this.clickDomData.bind(this);
        this.clickData = this.clickData.bind(this);
    }

    public componentDidMount() {
        this.time = setInterval(
            () => this.tick(),
            1000
        )
    }

    public componentWillUnmount() {
        clearInterval(this.time);
    }

    // 带参数的方法名称需要绑定当前作用域以及当前dom
    public clickDomData(name: string, event: any) {
        // tslint:disable-next-line:no-console
        console.log('clickDomData');
        // tslint:disable-next-line:no-console 获取当前dom传参
        console.log('获取当前dom传参', name);
        // tslint:disable-next-line:no-console 获取当前dom对象
        console.log('获取当前dom对象', event);
        // tslint:disable-next-line:no-console 获取当前作用域
        console.log('获取当前作用域', this);
        this.setState({
            click: name
        })
        // return
        event.preventDefault();
    }

    // 仅绑定当前dom
    public clickDom(name: any, event: any) {
        // tslint:disable-next-line:no-console
        console.log('clickDom')
        // tslint:disable-next-line:no-console
        console.log('获取当前dom传参', name);
        // tslint:disable-next-line:no-console
        console.log('获取当前dom对象', event);
    }

    // 仅绑定当前作用域
    public clickData() {
        // tslint:disable-next-line:no-console
        console.log('clickData');
        // tslint:disable-next-line:no-console
        console.log('获取当前作用域', this);
    }

    public tick() {
        this.setState({
            date: new Date(),
        })
    }

    public render() {
        return (
            <div>
                <ReduxStoreBase />
                {/* <ReactSumUp />
                <ReactLife />
                <DataRef />
                <Card title="state&&生命周期" className="mar-b-16">
                    <Tick date={this.state.date} />
                </Card>
                <Card title="事件绑定" className="mar-b-16">
                    <p>将当前dom对象以及当前作用域绑定到方法中</p>
                    <Button type="primary" onClick={this.clickDomData.bind(this, 'clickDomData')}>clickDomData</Button>
                    <p>仅将当前dom对象绑定到方法中</p>
                    <Button type="primary" onClick={this.clickDom.bind(this, 'clickDom')}>clickDom</Button>
                    <p>仅将当前作用域绑定到方法中</p>
                    <Button type="primary" onClick={this.clickData}>clickData</Button>
                    <p>注意绑定参数次序限制</p>
                    <pre>
                        onClick=this.clickDomData.bind(this, 'clickDomData')
                    </pre>
                </Card>
                <StudyCondition />
                <CycleKey />
                <StudyForm />
                <StateUpgrade />
                <Combination />
                <ReactIdea className="mar-b-16" /> */}
            </div>
        )
    }
}