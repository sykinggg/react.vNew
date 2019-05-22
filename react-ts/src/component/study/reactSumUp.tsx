import { Card } from 'antd';
import { Component } from 'react';
import * as React from 'react';

import './reactSumUp.scss';

export default class ReactSumUp extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Card title="react 总结" className="mar-b-16">
                    <h3>react 总结描述</h3>
                    <ul>
                        <li>
                            <p>JSX</p>
                            <ul>
                                <li>JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML</li>
                                <li>React 可以用 JSX 来描述你的组件长什么样的</li>
                                <li>React JSX 等同于 createElement</li>
                                <li>react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上</li>
                            </ul>
                        </li>
                        <li>
                            <p>组件的复杂使用（组合、嵌套）类似于dom</p>
                            <ul>
                                <li>首先 react 不鼓励继承</li>
                                <li>组件相互组合嵌套形成树-自顶部向下的单项数据流</li>
                            </ul>
                        </li>
                        <li>
                            <p>事件</p>
                            <ul>
                                <li>注意当前方法中的指向</li>
                                <li>React 的组件添加事件监听 react 提供 on*方法</li>
                                <li>React 会自动每个事件监听传入一个 event 对象这个对象提供的功能和浏览器提供的功能一致，而且它是兼容所有浏览器的</li>
                            </ul>
                        </li>
                        <li>
                            <p>state && setState</p>
                            <ul>
                                <li>state 对象的形式 对当前组件的状态进行描述</li>
                                <li>通过setState对于state进行操作符合单项数据流</li>
                            </ul>
                        </li>
                        <li>
                            <p>setState</p>
                            <ul>
                                <li>setState 分为同步和异步的操作</li>
                                <li>当setState 方法传递为一个对象时则为state同步操作即当前完成对state的操作</li>
                                <li>当setState 方法传递为一个方法时则为state异步操作即当前注册操作然后统一完成</li>
                                <li>
                                    <p>有何异同</p>
                                    <ul>
                                        <li>
                                            就渲染效果异步好过同步也就是当出发变化setState会集中处理state——运行速度快
                                        </li>
                                        <li>
                                            就后续操作同步不存在回调一说，异步改变时则在setState后面会有一个回掉函数用于后续方法的执行
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>props</p>
                            <ul>
                                <li>根据单向个数据流原则是由外部组件产生，并由外部组件改变</li>
                                <li>注意当前组件不能对外层组件传入的props进行修改</li>
                                <li>可以通过defaultProps进行默认参数的配置</li>
                            </ul>
                        </li>
                        <li>
                            <p>state && props</p>
                            <ul>
                                <li>state:主要作用是用于组件保存、控制、修改自己的可变状态</li>
                                <li>props: 的主要作用是让使用该组件的父组件可以传入参数来配置该组件</li>
                                <li>使用策略: 尽量少地用 state，尽量多地用 props</li>
                                <li>没有 state 的组件叫无状态组件（stateless component）</li>
                                <li>设置了 state 的叫做有状态组件（stateful component）</li>
                                <li>react 非常鼓励 无状态组件</li>
                            </ul>
                        </li>
                        <li>
                            <p>map && key</p>
                            <ul>
                                <li>React 高效原因：Virtual-DOM 策略</li>
                                <li>当dom进行移动React无法判断移动元素只能重新渲染</li>
                            </ul>
                        </li>
                        <li>
                            <p>状态提升</p>
                            <ul>
                                <li>抽离子组件中的状态到父组件也就是将子组件尽可能的优化为无状态组件</li>
                            </ul>
                        </li>
                        <li>
                            <p>life</p>
                            <ul>
                                <li>
                                    <p>default life</p>
                                    <ul>
                                        <li>初始化任务放置于constructor中</li>
                                        <li>组件启动（不依赖DOM && (ajax数据获取 || 定时器启动)）放置于componentWillMount</li>
                                        <li>组件启动（依赖DOM && (动画 || canvas || map)）放置于componentDidMount</li>

                                    </ul>
                                </li>
                                <li>
                                    <p>update life</p>
                                    <ul>
                                        <li>
                                            <p>shouldComponentUpdate(nextProps, nextState)</p>
                                            <ul>
                                                <li>通过这个方法控制组件是否重新渲染</li>
                                                <li>如果返回 false 组件就不会重新渲染</li>
                                                <li>一般用于渲染优化</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>componentWillReceiveProps(nextProps)</p>
                                            <ul>
                                                <li>组件从父组件接收到新的 props 之前调用</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>componentWillUpdate()</p>
                                            <ul>
                                                <li>组件开始重新渲染之前调用</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>componentDidUpdate()</p>
                                            <ul>
                                                <li>组件重新渲染并且把更改变更到真实的 DOM 以后调用</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>force update</p>
                                    <ul>
                                        <li>强制刷新跳过 shouldComponentUpdate() ，直接调用 render()</li>
                                        <li>触发子组件的正常生命周期方法</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>ref && dom</p>
                            <ul>
                                <li>ref无法通过change类型的事件即时获取可输dom的值</li>
                                <li>获取的为react的js描述dom对象</li>
                                <li>也就是与dom需要有同步开支</li>
                            </ul>
                        </li>
                        <li>
                            <p>性能优化</p>
                            <ul>
                                <li>谨慎分配 state 以避免不必要的 render 调用</li>
                                <li>合并状态更新</li>
                                <li>
                                    <h6>性能优化-方向</h6>
                                    <ul>
                                        <li>
                                            <p>判断数据变化 => 重新渲染页面</p>
                                        </li>
                                        <li>
                                            <p>虚拟dom => 减少改动对于页面渲染的开支</p>
                                        </li>
                                        <li>
                                            <p>另一个方向就是减少判断数据变化的开支</p>
                                            <p>使用 PureComponent 和 React.memo 以避免不必要的 render 调用</p>
                                            <p>React.memo 包裹的函数式组件</p>
                                            <p>继承自 React.PureComponent 的 class 组件</p>
                                            <p>注意：render 执行适用于浅比较——以牺牲更新准确率来减少状态比较的开支</p>
                                            <h6>注意解决办法：不传递对象作为 props，而是将对象拆分成基本类型（减少数据的复杂度）</h6>
                                            <p>可以通过React.memo的第二个参数也就是一个比较函数来确定浅比较的更新流程</p>
                                            <h6>React.memo 与 shouldComponentUpdate 的返回值判断相反</h6>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>组件细分</p>
                            <ul>
                                <li>ui 组件: 仅为页面渲染 ui逻辑</li>
                                <li>容器 组件: 仅为逻辑处理（官方推荐的状态升级） (数据|功能)逻辑</li>
                                <li>
                                    <p>无状态组件：也就是是有render方法（也可以理解为一个函数接受一个props进行ui渲染——简单的ui 组件）</p>
                                    <p>性能高 => 也就是单独函数不存在当前组件状态</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Card>
            </div>
        )
    }
}