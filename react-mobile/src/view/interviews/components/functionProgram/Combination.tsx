import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function Combination(props: any) {

    const [content, setContent] = React.useState(`
在React中，我们将功能划分为小型可重用的纯函数
将所有这些可重用的函数放在一起，最终使其成为产品
将所有较小的函数组合成更大的函数，
    最终，得到一个应用程序，这称为组合

实现组合有许多不同方法
    链接是一种使用点表示
        调用前一个函数的返回值的函数的方法

有一个name，
    如果firstName和lastName大于5个单词的大写字母，
        刚返回，并且打印名称的名称和长度

const name = "Bhargav Bachina";

const output = name.split(" ")
    .filter(name => name.length > 5)
    .map(val => {
    val = val.toUpperCase();
    console.log("Name:::::"+val);
    console.log("Count::::"+val.length);
    return val;
});

console.log(output)
/*
Name:::::BHARGAV
Count::::7
Name:::::BACHINA
Count::::7
[ 'BHARGAV', 'BACHINA' ]
*/

使用了不同于链接的方法，
    因为如果有30个这样的函数，就很难进行链接
const name = compose(
    splitmyName,
    countEachName,
    comvertUpperCase,
    returnName
)

console.log(name);
                            `);
    const [title, setTitle] = React.useState('组合');
    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}