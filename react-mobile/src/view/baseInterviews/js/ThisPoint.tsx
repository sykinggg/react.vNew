import React,{Fragment} from 'react';
import ComponentContainer from '../../../components/common/ComponentContainer';

export default function ThisPoint(props: any) {
    const [content, setContent] = React.useState(`

    一.代码示例

代码：

    var a = 5;
    var obj = {
        a : 10,
        foo: function(){
        console.log(this.a)
        }
    }

    var bar = obj.foo
    obj.foo() 
    bar()

结论：

    10
    5

    二.Events 源码
        读 Events 的 lib/events 
            源码的时候发现多次用到call关键字

// 场景1:
function EventEmitter() {
    EventEmitter.init.call(this);
}

// 场景2:
return this.listener.call(this.target);

// 场景3:
return listenerCount.call(emitter, type);

    三.箭头函数（穿透当前this作用域）

        箭头函数使用不当报错，
        在封装 Node.js 的一个 ORM 映射
        框架 Sequelize 时，封装表关联关系，
        由于使用箭头函数造成了读到的
        上下文发生变化，不是想要的 model 信息，
        而是指向了全局

    四.call
    
        call 关键字在写代码过程中还是比较常用的，
        有时候我们常常会使用 call 关键字来
            指定某个函数运行时的上下文，
        有时候还使用 call 关键字实现继承

        代码：

var person = {
    "name": "koala"
};
function changeJob(company, work) {
    this.company = company;
    this.work    = work;
};

changeJob.call(person, '百度', '程序员');
console.log(person.work);

        结论：
            程序员

函数调用：

    JS（ES5）里面有三种函数调用形式：

        func(p1, p2) 
        obj.child.method(p1, p2)
        func.call(context, p1, p2)

    原理：

        第三种是原始方法其余则为语法糖

        func(p1, p2)等价于 
            func.call(undefined, p1, p2)；

        obj.child.method(p1, p2) 等价于 
            obj.child.method.call(obj.child, p1, p2);
        
        func.call(context,p1,p2)

    代码：

var a = 5;
var obj = {
    a : 10,
    foo: function(){
    console.log(this.a)
    }
}

var bar = obj.foo
obj.foo() 
bar()

    obj.foo() 转化为call的形式
        就是obj.foo.call(obj)
        所以this指向了obj

    bar() 转化为call的形式就是bar.call()
        由于没有传 context，
            所以 this 就是 undefined，
            如果是在浏览器中最后给你一个默认的 
            this——window 对象。
            如果是在 Node.js 环境中运行 
            this——globel对象。

        在浏览器中运行结果为5 在 Node.js 环境中
            为 undefined

Node.js 环境下指向全局的this关键字说明

    代码：
(function(
    exports, 
    require, 
    module, __filename, 
    __dirname
    ) {
    {
    // 模块的代码
    // 所以那整个代码应该在这里吧
    var a = 10;
    function A(){
        a = 5;
        console.log(a);
        console.log(this.a);
    }
    // const haha = new A();
    A();
    }
});

    结论：
    5

原理：

    Node.js 环境下输出结果为5，
    undefined是不是就能理解了。 
    这里面的this是默认绑定指向全局，
    当输出this.a的时候，
    全局应该指向这个闭包的最外层。
        所以输出结果式是undefined

[]语法中的this关键字

    function fn (){ console.log(this) }
    var arr = [fn, fn2]
    arr[0]()

思路：

    可以把 arr0 想象为arr.0( )，
    虽然后者的语法错了，
    但是形式与转换代码
    里的 obj.child.method(p1, p2) 对应上了，
    于是就可以愉快的转换了

    arr[0]() 
    假想为    arr.0()
    然后转换为 arr.0.call(arr)
    那么里面的 this 就是 arr 了
                            `);
    const [title, setTitle] = React.useState('this 指向');


    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}