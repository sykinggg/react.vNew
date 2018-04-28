import React, {Component} from 'react';

import Signal from 'signals';

/**
 *基本结构
 * */
let myObj = {
    started : new Signal(),
    stopped : new Signal(),
    st1: new Signal(),
    st2: new Signal(),
    st3: new Signal(),
};
function onStarted(param1, param2){
    console.log('param1', param1);
    console.log('param2', param2);
}
//  1.添加监听器
myObj.started.add(onStarted);
//  2.调度信号传递自定义参数
myObj.started.dispatch('foo', 'bar');
//  3.删除单个监听器
myObj.started.remove(onStarted);

/**
 * 多个监听器
 * */
function onStopped() {
    console.log('stopped');
}
function onStopped1() {
    console.log('stopped1');
}
myObj.stopped.add(onStopped);
myObj.stopped.add(onStopped1);
myObj.stopped.dispatch();
myObj.stopped.removeAll();

/**
 * 计数器
 * */
console.log('st1');
let st1 = 0;
myObj.st1.add(() => {
    st1 += 1;
    console.log(st1);
});
myObj.st1.dispatch();
myObj.st1.dispatch();

/**
 * 一次执行
 * */
console.log('st2');
let st2 = 0;
myObj.st2.addOnce(() => {
    st2 += 1;
    console.log(st2);
});
myObj.st2.dispatch();
myObj.st2.dispatch();

/**
 * 启用和禁用
 * */
// Enable/Disable Signal
// https://github.com/millermedeiros/js-signals/wiki/Examples


class signalIndex extends Component {
    render() {
        return(
            <div>signalIndex</div>
        )
    }
}

export default signalIndex;