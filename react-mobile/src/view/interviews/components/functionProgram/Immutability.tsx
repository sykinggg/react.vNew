import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function Immutability(props: any) {

    const [content, setContent] = React.useState(`
不可变性意味着不可改变
在函数式编程中，你无法更改数据，也不能更改。 
如果要改变或更改数据，则必须复制数据副本来更改

例如，这是一个student对象和changeName函数，
    如果要更改学生的名称，则需要先复制 student 对象，
    然后返回新对象在javascript中，
    函数参数是对实际数据的引用，
    不应该使用 student.firstName =“testing11”，
    这会改变实际的student 对象，
    应该使用Object.assign复制对象并返回新对象

let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}

function changeName(student) {
    // student.firstName = "testing11" 
    // should not do it
    let copiedStudent = Object.assign({}, student);
    copiedStudent.firstName = "testing11";
    return copiedStudent;
}

console.log(changeName(student));

console.log(student);
                            `);
    const [title, setTitle] = React.useState('不可变性(Immutability)');
    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}