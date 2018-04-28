import React from "react";
import PubSub from 'pubsub-js';



/* 没有任何关系的嵌套关系的组建之间的通讯 */

// 1.Event Emitter/Target/Dispatcher
// 需要一个指定的订阅源
//  to subscribe
//  otherObject.addEventListener(‘click’, function() { alert(‘click!’); });
//  to dispatch
//  this.dispatchEvent(‘click’);

// 2.Publish / Subscribe
// 触发事件的时候，你不需要指定一个特定的源，因为它是使用一个全局对象来处理事件
// 其实就是一个全局广播的方式来处理事件
//  to subscribe
//  globalBroadcaster.subscribe(‘click’, function() { alert(‘click!’); });
//  to dispatch
//  globalBroadcaster.publish(‘click’);

// 3.Signals
// 与Event Emitter/Target/Dispatcher相似，但是你不要使用随机的字符串作为事件触发的引用
// 触发事件的每一个对象都需要一个确切的名字（就是类似硬编码类的去写事件名字）
// 并且在触发的时候，也必须要指定确切的事件
//  to subscribe
//  otherObject.clicked.add(function() { alert(‘click’); });
//  to dispatch
//  this.clicked.dispatch();



class calendar2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var mySubscriber = function (msg, data) {
            console.log( msg, data );
        };
        
        var token = PubSub.subscribe('subscribe', mySubscriber);
        
        PubSub.publish('subscribe', 'hello world!');
        
        PubSub.publishSync('subscribe', 'hello world!');
        return(
            <div>calenndar2</div>
        )
    }
}

export default calendar2;