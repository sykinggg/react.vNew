import React, { Fragment } from 'react';

import ComponentContainer from './ComponentContainer';

export default function ImperativeProgram(props?: any) {

    const [content, setContent] = React.useState(`
声明式编程的编写方式描述了应该做什么，
而命令式编程描述了如何做 在声明式编程中，
让编译器决定如何做事情 声明性程序很容易推理，
因为代码本身描述了它在做什么

数组中的每个元素都乘以 2
const numbers = [1,2,3,4,5];

// 声明式
const doubleWithDec = numbers.map(
    number => number * 2
);

console.log(doubleWithDec)


// 命令式
const doubleWithImp = [];
for(let i=0; i<numbers.length; i++) {
    const numberdouble = numbers[i] * 2;
    doubleWithImp.push(numberdouble)
}
                            `);
    const [title, setTitle] = React.useState('声明式编程声明式编程 vs 命令式编程');
    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}