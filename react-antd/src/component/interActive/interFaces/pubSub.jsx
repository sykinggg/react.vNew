import React, { Component } from "react";

import PubSub from 'pubsub-js'

import { Card } from 'antd';

// import PubSub1 from '../otherInterFaces/pubSub1';

/**
 * pubSub的基本用法
 * */

//  1.创建一个函数来订阅主题
let mySubscriber = function (msg, data) {
    console.log( msg, data );
};

//  2.功能添加到用户的列表中对特定主题
//    保持返回的标记，以便能够取消
let token = PubSub.subscribe('MY TOPIC', mySubscriber);

//  3.异步发布话题
PubSub.publish('MY TOPIC1', {a: 'aaa'});

//  4.特殊处理
PubSub.publishSync('MY TOPIC', {b: 'aaa'});

//  5.取消订阅
PubSub.unsubscribe(token);
PubSub.publish('MY TOPIC', {a: 'aaa'});

//  6.取消某个功能的所有订阅
PubSub.unsubscribe(mySubscriber);

//  7.清除某个主题的所有订阅
PubSub.subscribe('a', mySubscriber);
PubSub.subscribe('a.b', mySubscriber);
PubSub.subscribe('a.b.c', mySubscriber);

//  8.清除所有订阅
PubSub.clearAllSubscriptions();
/**
 * PubSub-高级使用-Hierarchical addressing(分层寻址)其实就是分组监控的感觉
 * */

//  1.创建订阅者以接收来自主题层次结构的所有主题
let myToplevelSubscriber = (msg, data) => {
    console.log('top level: ', msg, data);
};

//  2.订阅“car”层级中的所有主题
PubSub.subscribe('car', myToplevelSubscriber);

//  3.创建订阅者以仅接收来自层级操作主题的子主题
let mySpecificSubscriber = (msg, data) => {
    console.log('specific:', msg, data);
};

//  4.只订阅'car.drive'主题
PubSub.subscribe('car.driver', mySpecificSubscriber);

//  5.发布实例
PubSub.publish('car.purchase', {name: 'my new car'});
PubSub.publish('car.drive', {speed: '14'});
PubSub.publish('car.sell', {newOwner: 'someone else'});

/**
 * 注意：可以使用变量统一管理静态常量
 * */

let MY_TOPIC = 'hello';

PubSub.subscribe(MY_TOPIC, (msg, data) => {
    console.log(msg);
    console.log(data);
});

PubSub.publish(MY_TOPIC, 'world');


class pubSub extends Component {
    render() {
        return(
            <Card title="pubSub">
                <h5>组件的一种沟通方式</h5>
            </Card>
        )
    }
}

export default pubSub;