import { PureComponent } from 'react';
import * as React from 'react';

import { Button, Card, Input, List } from 'antd';

import store from './reduxStoreDemo1';

export default class ReduxStoreBase extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = store.getState();
        // tslint:disable-next-line:no-console
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddChange = this.handleAddChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    public handleInputChange(e: any) {
        // this.state.d
        // tslint:disable-next-line:no-console
        console.log(e.target.value);
        const action = {
            type: 'change',
            value: e.target.value
        }
        store.dispatch(action);
    }

    public handleAddChange() {
        // tslint:disable-next-line:no-console
        console.log(this.state);
        const action = {
            type: 'add'
        }
        store.dispatch(action);
    }

    public handleStoreChange() {
        this.state = store.getState();
        // tslint:disable-next-line:no-console
        console.log(this.state.inputValue);
    }

    public render() {
        return (
            <div>
                <Card title="redux store 基础示例" className="mar-b-16">
                    <h3>store 详情</h3>
                    <p>reduxStoreDemo1 创建 store</p>
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
                        renderItem={(item: any) => (
                            <List.Item>(item)</List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}