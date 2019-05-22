import { PureComponent } from 'react';
import * as React from 'react';

import { Button, Card, Input, List } from 'antd';

import store from './reduxStoreDemo1';

import { handleAdd, handleChange, handleDelete } from './reduxActionCreateDemo1';
export default class ReduxStoreBase extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = store.getState();
        // tslint:disable-next-line:no-console
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddChange = this.handleAddChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClickOtherDelete = this.handleClickOtherDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    public handleInputChange(e: any) {
        // this.state.d
        // tslint:disable-next-line:no-console
        console.log(e.target.value);
        const action = handleChange(e.target.value);
        store.dispatch(action);

        // action 异步操作
        // tslint:disable-next-line:no-console
        console.log('store.dispatch((dispatch: any) => {');
        store.dispatch((dispatch: any) => {
            // tslint:disable-next-line:no-console
            console.log(dispatch);
            setTimeout(() => {
                const action1 = handleChange('e.target.value');
                store.dispatch(action1);
            }, 2000)
        })
    }

    public handleAddChange() {
        // tslint:disable-next-line:no-console
        console.log(this.state);
        const action = handleAdd();
        store.dispatch(action);
    }

    public handleStoreChange() {
        this.setState(() => (store.getState()));
        // tslint:disable-next-line:no-console
        console.log(this.state.inputValue);
    }

    public handleClickDelete(idx: any) {
        // tslint:disable-next-line:no-console
        console.log(idx);

        const action = handleDelete(idx);

        store.dispatch(action);
    }

    public handleClickOtherDelete(idx: any) {
        // tslint:disable-next-line:no-console
        console.log('handleClickOtherDelete');
        // tslint:disable-next-line:no-console
        console.log(idx);

        const action = handleDelete(idx);

        store.dispatch(action);
    }

    public render() {
        return (
            <div>
                <Card title="redux store 基础示例" className="mar-b-16">
                    <h3>store 详情</h3>
                    <p>store 创建 store</p>
                    <p>reduxReducerDemo1 创建reducer</p>
                    <Input
                        value={this.state.inputValue}
                        placeholder="rodo info"
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleAddChange}>Primary</Button>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered={true}
                        dataSource={this.state.list}
                        // tslint:disable-next-line:jsx-no-lambda
                        renderItem={(item: any, index: any) => (
                            <List.Item actions={[<a key={item} onClick={this.handleClickDelete.bind(this, index)}>del</a>,<a key={item} onClick={() => {this.handleClickOtherDelete(index)}}>del</a>]}>
                                {item}
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}