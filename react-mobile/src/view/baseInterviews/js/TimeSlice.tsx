import React, { Fragment } from 'react';
import ComponentContainer from '../../../components/common/ComponentContainer';

export default function TimeSlice(props: any) {

    const [content, setContent] = React.useState(`
场景：
    一次性需要向页面中插入数十万条数据

做法：

    一.一次性渲染

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

现象：

    比较长时间的白屏

描述：

    对十万条记录进行循环操作，JS的运行时间为187ms，
    还是快的，但是最终渲染完成后的总时间确是2844ms

原理：

    1.在 JS 的Event Loop中，
        当JS引擎所管理的执行栈中的事件
            以及所有微任务事件全部执行完后，
        才会触发渲染线程对页面进行渲染

    2.第一个console.log的触发时间
        是在页面进行渲染之前，
        此时得到的间隔时间为JS运行所需要的时间

    3.第二个console.log是放到 setTimeout 中的，
        它的触发时间是在渲染完成，
        在下一次Event Loop中执行的

结论：
    对于大量数据渲染的时候，
        JS运算并不是性能的瓶颈，
        性能的瓶颈主要在于渲染阶段

    二.使用定时器分批操作减少延迟

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
            li.innerText = 
                curIndex + i + ' : ' + 
                    ~~(Math.random() * total)
            ul.appendChild(li)
        }
        loop(
            curTotal - pageCount,
            curIndex + pageCount
            )
    },0)
}
loop(total,index);

现象：

    页面加载的时间已经非常快了，
    每次刷新时可以很快的看到第一屏的所有数据，
    但是当我们快速滚动页面的时候，
    会发现页面出现闪屏或白屏的现象

原理：

    FPS表示的是每秒钟画面更新次数。
    我们平时所看到的连续画面都是由
        一幅幅静止画面组成的，
    每幅画面称为一帧，FPS是描述帧变化速度的物理量

常识：

    大多数电脑显示器的刷新频率是60Hz，
    大概相当于每秒钟重绘60次，
    FPS为60frame/s，为这个值的设定受屏幕分辨率、
    屏幕尺寸和显卡的影响

    人的眼睛有视觉停留效应，
    即前一副画面留在大脑的印象还没消失，
    紧接着后一副画面就跟上来了， 
    这中间只间隔了16.7ms(1000/60≈16.7)，
    所以会让你误以为屏幕上的图像是静止不动的

不同帧率的体验:

    1.帧率能够达到 50 ～ 60 FPS 的
        动画将会相当流畅，让人倍感舒适；

    2.帧率在 30 ～ 50 FPS 之间的动画，
        因各人敏感程度不同，舒适度因人而异；

    3.帧率在 30 FPS 以下的动画，
        让人感觉到明显的卡顿和不适感；

    4.帧率波动很大的动画，亦会使人感觉到卡顿。

setTimeout 和闪屏现象

    1.setTimeout的执行时间并不是确定的。
        在JS中，setTimeout任务被放进事件队列中，
        只有主线程执行完才会去检查事件队列
            中的任务是否需要执行，
        因此setTimeout的实际执行时间
            可能会比其设定的时间晚一些。

    2.刷新频率受屏幕分辨率和屏幕尺寸的影响，
        因此不同设备的刷新频率可能会不同，
        而setTimeout只能设置一个固定时间间隔，
        这个时间不一定和屏幕的刷新时间相同

    导致setTimeout与页面绘制不同步则会出现闪屏的现象

    三.requestAnimationFrame

        requestAnimationFrame最大的优势
            是由系统来决定回调函数的执行时机
原理：

    如果屏幕刷新率是60Hz,
    那么回调函数就每16.7ms被执行一次，
    如果刷新率是75Hz，
    那么这个时间间隔就变成了1000/75=13.3ms，
    换句话说就是，
        requestAnimationFrame的步伐
            跟着系统的刷新步伐走。
    它能保证回调函数在屏幕每一次的
        刷新间隔中只被执行一次，
    这样就不会引起丢帧现象

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
    window.requestAnimationFrame(function(){
        for(let i = 0; i < pageCount; i++){
            let li = document.createElement('li');
            li.innerText = curIndex + i + ' : ' 
                + ~~(Math.random() * total)
            ul.appendChild(li)
        }
        loop(
            curTotal - pageCount,
            curIndex + pageCount
        )
    })
}
loop(total,index);

现象：
    基本上没有问题

    四.DocumentFragment

原理：

    DocumentFragment，文档片段接口，
    表示一个没有父级文件的最小文档对象。
    它被作为一个轻量版的Document使用，
    用于存储已排好版的或尚未打理好格式的XML片段。
    最大的区别是因为DocumentFragment
        不是真实DOM树的一部分，
    它的变化不会触发DOM树的（重新渲染) ，
        且不会导致性能等问题。

    可以使用document.createDocumentFragment方法
        或者构造函数来创建一个空的DocumentFragment

使用：

    DocumentFragments是DOM节点，
        但并不是DOM树的一部分，可以认为是存在内存中的，
        所以将子元素插入到文档片段时不会引起页面回流

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
    window.requestAnimationFrame(function(){
        let fragment = 
            document.createDocumentFragment();
        for(let i = 0; i < pageCount; i++){
            let li = document.createElement('li');
            li.innerText = curIndex + i + ' : ' + 
                ~~(Math.random() * total)
            fragment.appendChild(li)
        }
        ul.appendChild(fragment)
        loop(
            curTotal - pageCount,
            curIndex + pageCount
        )
    })
}
loop(total,index);
                            `);
    const [title, setTitle] = React.useState('时间分片');


    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}