import React, { Fragment } from 'react';

import ComponentContainer from '../../../components/common/ComponentContainer';

export default function TimeSliceRender(props: any) {
    const [content, setContent] = React.useState(`
场景：向页面中插入数十万条数据

    1.最粗暴的做法（一次性渲染）

<ul id="container"></ul>

// 记录任务开始时间
let now = Date.now();
// 插入十万条数据
const total = 100000;
// 获取容器
let ul = document.getElementById('container');
// 将数据插入容器中
for (let i = 0; i < total; i++) {
    let li = document.createElement('li');
    li.innerText = ~~(Math.random() * total)
    ul.appendChild(li);
}

console.log('JS运行时间：',Date.now() - now);
setTimeout(()=>{
  console.log('总运行时间：',Date.now() - now);
},0)
// print: JS运行时间： 187
// print: 总运行时间： 2844

对十万条记录进行循环操作，JS的运行时间为187ms
最终渲染完成后的总时间确是2844ms

    重点：统计JS运行时间和总渲染时间

        1.在 JS 的Event Loop中，
        当JS引擎所管理的执行栈中的事件
        以及所有微任务事件全部执行完后，
        才会触发渲染线程对页面进行渲染

        2.第一个console.log的触发时间
        是在页面进行渲染之前，
        此时得到的间隔时间为JS运行所需要的时间

        3.第二个console.log是放到 
        setTimeout 中的，
        它的触发时间是在渲染完成，
        在下一次Event Loop中执行的

    结论：对于大量数据渲染的时候，
    JS运算并不是性能的瓶颈，
    性能的瓶颈主要在于渲染阶段

    2.使用定时器

使用setTimeout来实现分批渲染

<ul id="container"></ul>

//需要插入的容器
let ul = document.getElementById('container');
// 插入十万条数据
let total = 100000;
// 一次插入 20 条
let once = 20;
//总页数
let page = total/once
//每条记录的索引
let index = 0;
//循环加载数据
function loop(curTotal,curIndex){
    if(curTotal <= 0){
        return false;
    }
    //每页多少条
    let pageCount = Math.min(curTotal , once);
    setTimeout(()=>{
        for(let i = 0; i < pageCount; i++){
            let li = document.createElement('li');
            li.innerText = curIndex + i + ' : ' 
            + ~~(Math.random() * total)
            ul.appendChild(li)
        }
        loop(curTotal - 
            pageCount,curIndex + 
            pageCount)
    },0)
}
loop(total,index);

    结论：页面加载的时间已经非常快了，
    每次刷新时可以很快的看到第一屏的所有数据，
    但是当快速滚动页面的时候，
    会发现页面出现闪屏或白屏的现象

    重点：闪屏现象

    原理：PS表示的是每秒钟画面更新次数。
    平时所看到的连续画面都是由
    一幅幅静止画面组成的，
    每幅画面称为一帧，
    FPS是描述帧变化速度的物理量

    视觉停留效应：间隔了16.7ms(1000/60≈16.7)，
    所以会让误以为屏幕上的图像是静止不动的

    浏览器重回限制机制：
    大多数浏览器都会对重绘操作加以限制，
    不超过显示器的重绘频率，
    因为即使超过那个频率用户体验也不会有提升。 
    因此，最平滑动画的最佳循环间隔是1000ms/60，
    约等于16.6ms

    直观感受：

        1.帧率能够达到 50 ～ 60 FPS 的动画
            将会相当流畅，让人倍感舒适；

        2.帧率在 30 ～ 50 FPS 之间的动画，
            因各人敏感程度不同，舒适度因人而异；

        3.帧率在 30 FPS 以下的动画，
            让人感觉到明显的卡顿和不适感；

        4.帧率波动很大的动画，亦会使人感觉到卡顿。

setTimeout 和闪屏现象：

    1.setTimeout的执行时间并不是确定的。
    在JS中，setTimeout任务被放进事件队列中，
    只有主线程执行完才会去检查事件队列
        中的任务是否需要执行，
    因此setTimeout的实际执行时间可能
        会比其设定的时间晚一些

    2.刷新频率受屏幕分辨率和屏幕尺寸的影响，
    因此不同设备的刷新频率可能会不同，
    而setTimeout只能设置一个固定时间间隔，
    这个时间不一定和屏幕的刷新时间相同

结论：以上两种情况都会导致白屏

    
                            `);
    const [title, setTitle] = React.useState('时间分片');
    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}