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
        有时候常常会使用 call 关键字来
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
obj.cobj.child.method.call(obj.child, p1, p2);
        
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
            如果是在浏览器中最后给一个默认的 
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

this绑定原则

    默认绑定:

        默认绑定是函数针对的独立调用的时候，
        不带任何修饰的函数引用进行调用，
        非严格模式下 this 指向全局对象
        (浏览器下指向 Window，
            Node.js 环境是 Global ），
        严格模式下，this 绑定到 undefined ,
        严格模式不允许this指向全局对象

var a = 'hello'

var obj = {
    a: 'koala',
    foo: function() {
        console.log(this.a)
    }
}

var bar = obj.foo

bar() 

bar.call(undefined);

    结论： "hello"

    原理： bar()就是默认绑定，
        函数调用的时候，前面没有任何修饰调用，
        也可以用之前的 call函数调用形式理解，
        所以输出结果是hello

    默认绑定的另一种情况：
        在函数中以函数作为参数传递，
        例如setTimeOut和setInterval等，
        这些函数中传递的函数中的this指向，
        在非严格模式指向的是全局对象

var name = 'koala';
var person = {
    name: '程序员成长指北',
    sayHi: sayHi
}
function sayHi(){
    setTimeout(function(){
        console.log('Hello,', this.name);
    })
}
person.sayHi();
setTimeout(function(){
    person.sayHi();
},200);

person.sayHi.call(undefined);


    结论：
        Hello,koala
        Hello,koala

隐式绑定：

    判断 this 隐式绑定的基本标准:函数调用的
        时候是否在上下文中调用，
    或者说是否某个对象调用函数

var a = 'koala'

var obj = {
    a: '程序员成长指北',
    foo: function() {
        console.log(this.a)
    }
}
obj.foo()

obj.foo.call(obj);

    结论：
        "程序员成长指北"

    原理：
        foo 方法是作为对象的属性调用的，
        那么此时 foo 方法执行时，
        this 指向 obj 对象

隐式绑定的另一种情况

    当有多层对象嵌套调用某个函数的时候，
    如 对象.对象.函数,this 指向的是最后一层对象

function sayHi(){
    console.log('Hello,', this.name);
}
sayHi()
sayHi.call(undefined)
var person2 = {
    name: '程序员成长指北',
    sayHi: sayHi
}
person2.sayHi()
person2.sayHi.call(person2)
var person1 = {
    name: 'koala',
    friend: person2
}
person1.friend.sayHi();
person1.friend.sayHi.call(person1);

    结果：
        Hello,
        Hello, 
        Hello, 程序员成长指北
        Hello, 程序员成长指北
        Hello, 程序员成长指北
        Hello, koala

每层function的嵌套会形成作用域，
    内层会重写外层同名变量

显式绑定

    显式绑定，通过函数call apply bind 可以
    修改函数this的指向。
    call 与 apply 方法都是挂载在 
    Function 原型下的方法，所有的函数都能使用

call 和 apply 的区别:

    1.call和apply的第一个参数会
        绑定到函数体的this上，
        如果不传参数，
    例如fun.call()，非严格模式，
        this默认还是绑定到全局对象

    2.call函数接收的是一个参数列表，
        apply函数接收的是一个参数数组

    代码：

// call 用法
unc.call(thisArg, arg1, arg2, ...)

// apply 用法
func.apply(thisArg, [arg1, arg2, ...])

var person = {
    "name": "koala"
};
function changeJob(company, work) {
    this.company = company;
    this.work    = work;
};

changeJob.call(person, '百度', '程序员');
console.log(person.work);

changeJob.apply(person, ['百度', '测试']);
console.log(person.work);

    结论：
        程序员
        测试

call和apply的注意点：

    这两个方法在调用的时候，
    如果传入数字或者字符串，
    这两个方法会把传入的参数转成对象类型

    代码：
var number = 1, string = '程序员成长指北';
function getThisType () {
    var number = 3;
    console.log('this指向内容',this);
    console.log(typeof this);
}
getThisType.call(number);
getThisType.apply(string); 

    结果：
        this指向内容 [Number: 1]
        object
        this指向内容 [String: '程序员成长指北']

bind函数

    bind 方法 会创建一个新函数。
        当这个新函数被调用时，
        bind() 的第一个参数将作为它运行时的 this，
        之后的一序列参数将会在传递的
            实参前传入作为它的参数

// bind
func.bind(thisArg[, arg1[, arg2[, ...]]]) 

    代码：
var publicAccounts = {
    name: '程序员成长指北',
    author: 'koala',
    subscribe: function(subscriber) {
        console.log(subscriber + this.name)
    }
}

publicAccounts.subscribe('小红') 
var test = {
    name: 'Node成长指北', author: '考拉'
}
var subscribe1 = 
    publicAccounts.subscribe.bind(test, '小明 ')
subscribe1()

    结果：

        小红 程序员成长指北
        小明 Node成长指北

new 绑定

    使用new调用函数的时候

    1.创建一个空对象
    2.将空对象的 proto 指向
        原对象的 prototype
    3.执行构造函数中的代码
    4.返回这个新对象

    代码：

function study(name){
    this.name = name;
	
}
var studyDay = new study('koala');
console.log(studyDay);
console.log('Hello,', studyDay.name);

    结果：

study { name: 'koala' }
hello，koala

    原理：

        在new study('koala')的时候，
        会改变this指向，
        将this指向指定到了studyDay对象

        注意:如果创建新的对象，
        构造函数不传值的话，
        新对象中的属性不会有值，
        但是新的对象中会有这个属性

手动实现一个new创建对象代码

    代码：

function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(
        res, 
        Array.prototype.slice.call(arguments, 1)
        );
    if (
        (
            typeof ret === "object" || 
            typeof ret === "function"
        ) && 
        ret !== null
        ) {
        return ret;
    }
    return res;
}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);

this绑定优先级

    new绑定 > 显式绑定 > 隐式绑定 > 默认绑定

箭头函数中的 this

    箭头函数
        箭头函数表达式的语法比函数表达式更短，
        并且不绑定自己的this，arguments，
        super或 new.target。
        这些函数表达式最适合用于
        非方法函数(non-method functions)，
        并且它们不能用作构造函数

箭头函数中没有 arguments

    常规函数可以直接拿到 arguments 属性，
    但是在箭头函数中如果使用 arguments 属性，
    拿到的是箭头函数外层函数的 arguments 属性

    代码：

function constant() {
    return () => arguments[0]
}

let result = constant(1);
console.log(result());

    结果：
        1

访问箭头函数的参数

let nums = (...nums) => nums;

注意：箭头函数没有构造函数

    箭头函数没有构造函数 constructor，
    因为没有构造函数，
    所以也不能使用 new 来调用，
    如果直接使用 new 调用箭头函数，会报错

注意：箭头函数没有原型

    原型 prototype 是函数的一个属性，
    但是对于箭头函数没有它

    let fun = ()=>{}
    console.loh(fun.prototype);

注意：箭头函数中没有 super

    连原型都没有，自然也不能通过 super 
    来访问原型的属性，
    所以箭头函数也是没有 super 的，
    不过跟 this、arguments、new.target 
    一样，这些值由外围最近一层非箭头函数决定

注意：箭头函数中没有自己的this

    箭头函数中没有自己的 this，
    箭头函数中的 this 不能用 call()、
    apply()、bind()
    这些方法改变 this 的指向，
    箭头函数中的 this 直接指向的是
    调用函数的 上一层运行时

    代码：

let a = 'kaola'

let obj = {
    a: '程序员成长指北',
    foo: () => {
        console.log(this.a)
    }
}

obj.foo() 

自执行函数

    自执行函数在在代码只能够定义后，
    无需调用，会自动执行

(function(){
    console.log('程序员成长指北')
})()

(function(){
    console.log('程序员成长指北')
}())

如果使用了箭头函数简化一下就只能
    使用第一种情况了。
    使用第二种情况简化会报错

(() => {
    console.log('程序员成长指北')
})()

    总结：
var length = 10;
function fn() {
    console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    console.log(arguments);
    arguments[0]();
    arguments[0].call(arguments);
    console.log(arguments[1]);
  }
};
 
obj.method(fn, 1);

结果：
    10
    Arguments(2) [
        ƒ, 
        1, 
        callee: ƒ, 
        Symbol(Symbol.iterator): ƒ
    ]
    2
    2
    1

换句话说Arguments是类数组也就是
    Arguments中含有length属性
                            `);
    const [title, setTitle] = React.useState('this 指向');


    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}