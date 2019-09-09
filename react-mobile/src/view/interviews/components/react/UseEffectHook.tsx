import React, { Fragment } from 'react';

export default function UseEffectHook(props: any) {
    return (
        <Fragment>
            <pre>{`
1.使用useEffect，可以直接在函数组件内处理生命周期事件

如果希望effect较少运行，可以提供第二个参数-值数组。
将它们视为该effect的依赖关系。
如果其中一个依赖项自上次更改后，effect将再次运行。

const [value, setValue] = useState('initial');

useEffect(() => {
    // 仅在 value 更改时更新
    console.log(value);
}, [value]) 

传入 [value] 作为第二个参数
如果value的值是 5，
而且组件重渲染的时候 value 还是等于 5，
React将对前一次渲染的[5]和后一次渲染的[5]进行比较。
因为数组中的所有元素都是相等的(5 === 5)，
React 会跳过这个 effect，这就实现了性能的优化

2.仅在挂载和卸载的时候执行

如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行）
可以传递一个空数组（[]）作为第二个参数。
这就告诉 React 你的 effect 不依赖于
props 或 state 中的任何值，
所以它永远都不需要重复执行

这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式

useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
}, []) 

3.只在挂载的时候执行

import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  // 存储对 input 的DOM节点的引用
  const inputRef = useRef();

  // 将输入值存储在状态中
  const [value, setValue] = useState("");

  useEffect(
    () => {
      // 这在第一次渲染之后运行
      console.log("render");
      // inputRef.current.focus();
    },
	// effect 依赖  inputRef
    [inputRef]
  );

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

使用useRef创建一个空的ref。
将它传递给input的ref prop ,
在渲染DOM 时设置它
useRef返回的值在渲染之间是稳定的 - 它不会改变

这基本上是 componentDidMount 效果了

4.使用 useEffect 获取数据

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Reddit() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      "https://www.reddit.com/r/reactjs.json"
    );

    const json = await res.json();

    setPosts(json.data.children.map(c => c.data));
  }); // 这里没有传入第二个参数，你猜猜会发生什么？

  // Render as usual
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

依旧是设置第二个参数的变动次数来控制前面的方法执行
            `}</pre>
        </Fragment>
    )
}