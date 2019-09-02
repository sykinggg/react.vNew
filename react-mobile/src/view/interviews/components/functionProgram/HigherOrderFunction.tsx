import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function HigherOrderFunction(props: any) {

    const [content, setContent] = React.useState(`
高阶函数是将函数作为参数或返回函数的函数，
    或者有时它们都有
Array.map，Array.filter和Array.reduce是高阶函数，
    因为它们将函数作为参数

const numbers = [10,20,40,50,60,70,80]

const out1 = numbers.map(num => num * 100);
console.log(out1);
// [ 1000, 2000, 4000, 5000, 6000, 7000, 8000 ]

const out2 = numbers.filter(num => num > 50);
console.log(out2);
// [ 60, 70, 80 ]

const out3 = numbers.reduce((out,num) => out + num);
console.log(out3);
// 330

下面是另一个名为isPersonOld的高阶函数示例，
    该函数接受另外两个函数，分别是 message和isYoung

const isYoung = age => age < 25;

const message = msg => "He is "+ msg;

function isPersonOld(age, isYoung, message) {
    const returnMessage
     = 
    isYoung(age)?message("young"):message("old");
    return returnMessage;
}

// passing functions as an arguments
console.log(isPersonOld(13,isYoung,message))
// He is young
                            `);
    const [title, setTitle] = React.useState('高阶函数');
    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}