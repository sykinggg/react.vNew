import React, { Fragment } from 'react';

import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function Recursive(props: any) {

    const [content, setContent] = React.useState(`
递归是一种函数在满足一定条件之前调用自身的技术
只要可能，最好使用递归而不是循环

function printMyName(name, count) {
    if(count <= name.length) {
        console.log(name.substring(0,count));
        printMyName(name, ++count);
    }
}

console.log(printMyName("Bhargav", 1));

/*
B
Bh
Bha
Bhar
Bharg
Bharga
Bhargav
*/

// withotu recursion
var name = "Bhargav"
var output = "";
for(let i=0; i<name.length; i++) {
    output = output + name[i];
    console.log(output);
}
                            `);
    const [title, setTitle] = React.useState('递归');
    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}