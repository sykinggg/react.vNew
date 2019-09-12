import React, {Fragment} from 'react';
import ComponentContainer from '../../../../components/common/ComponentContainer';

export default function PureFunction(props: any) {

    const [content, setContent] = React.useState(`
    纯函数是始终接受一个或多个参数
        并计算参数并返回数据或函数的函数
        它没有副作用，例如设置全局状态，
        更改应用程序状态，它总是将参数视为不可变数据

    使用 appendAddress 的函数向
        student对象添加一个地址
    如果使用非纯函数，它没有参数，
        直接更改 student 对象来更改全局状态

    使用纯函数，它接受参数，
        基于参数计算，返回一个新对象而不修改参数

    let student = {
        firstName: "testing",
        lastName: "testing",
        marks: 500
    }

    // 非纯函数
    function appendAddress() {
        student.address = {
            streetNumber:"0000",
            streetName: "first",
            city:"somecity"
        };
    }

    console.log(appendAddress());

    // 纯函数
    function appendAddress(student) {
        let copystudent = Object.assign(
            {},
            student
        );
        copystudent.address = {
            streetNumber:"0000",
            streetName: "first",
            city:"somecity"
        };
        return copystudent;
    }

    console.log(appendAddress(student));

    console.log(student);
                            `);
    const [title, setTitle] = React.useState('纯函数');
    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}