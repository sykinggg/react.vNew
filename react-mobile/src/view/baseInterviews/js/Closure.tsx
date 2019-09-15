import React,{Fragment} from 'react';
import ComponentContainer from '../../../components/common/ComponentContainer';

export default function Closure(props: any) {
    const [content, setContent] = React.useState(`
只要内部函数有一个引用了形参或者私有变量，
    外部函数就会变成闭包

也就是如果函数内部使用外部的某一变量就会延时
    浏览器的清除机制
                            `);
    const [title, setTitle] = React.useState('闭包');


    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}