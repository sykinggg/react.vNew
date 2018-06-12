import React from 'react';

import { Card, Row, Col, Collapse } from 'antd';
const Panel = Collapse.Panel;

class readFileBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: {
                as: 1,
                as1: 2,
                as2: {
                    dd1: 1,
                    dd2: 2,
                    dd3: {
                        ss1: 1,
                        ss2: 2,
                        ss3: {
                            ww: 1
                        }
                    }
                }
            }
        }
    }

    componentDidMount() {
        this.setState({
            a: {
                as: 1,
                as1: 2,
                as2: {
                    dd1: 1,
                    dd2: 2,
                    dd3: {
                        ss1: 1,
                        ss2: 2,
                        ss3: {
                            ww: 22
                        }
                    }
                }
            }
        })
        console.log(this.state);
    }

    callback(key) {
        console.log(key)
    }

    render() {
        return(
            <div>
                <Row>
                    <Col span={22} offset={1}>
                        <Card title="React 基本概念">
                            <Collapse accordion onChange={this.callback} defaultActiveKey={['1']}>
                                <Panel header="JSX中使用表达式" key="1">
                                    <pre>
                                        function formatName(user) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return user.firstName + ' ' + user.lastName;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        const user = &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;firstName: 'Harper',{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;lastName: 'Perez'{'\n'}
                                        };{'\n'}
                                        {'\n'}
                                        const element = ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, &#123;formatName(user)}!{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;/h1>{'\n'}
                                        );{'\n'}
                                        {'\n'}
                                        ReactDOM.render({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;element,{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root'){'\n'}
                                        );{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="JSX渲染表达式" key="2">
                                    <pre>
                                        因为在编译后JSX 其实会被转化为普通的 JavaScript 对象{'\n'}
                                        function getGreeting(user) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;if (user) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Hello, &#123;formatName(user)}!&#60;/h1>;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Hello, Stranger.&#60;/h1>;{'\n'}
                                        }
                                    </pre>
                                </Panel>
                                <Panel header="JSX属性" key="3">
                                    <pre>
                                        值为字符串的属性{'\n'}
                                        const element = &#60;div tabIndex="0">&#60;/div>;{'\n'}
                                        值为变量的属性{'\n'}
                                        const element = &#60;img src=&#123;user.avatarUrl} />{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="JSX嵌套" key="4">
                                    <pre>
                                        闭合标签一定得有/{'\n'}
                                        单标签{'\n'}
                                        const element = &#60;img src=&#123;user.avatarUrl} />;{'\n'}
                                        互相嵌套{'\n'}
                                        const element = ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>Good to see you here.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        );{'\n'}
                                        注意：
                                        因为 JSX 的特性更接近 JavaScript 而不是 HTML , {'\n'}
                                        所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，{'\n'}
                                        而不是使用 HTML 的属性名称.{'\n'}
                                        例如，class 变成了 className，而 tabindex 则对应着 tabIndex
                                    </pre>
                                </Panel>
                                <Panel header="JSX 防注入攻击" key="5">
                                    <pre>
                                        const title = response.potentiallyMaliciousInput;{'\n'}
                                        // 直接使用是安全的：{'\n'}
                                        const element = &#60;h1>&#123;title}&#60;/h1>;{'\n'}
                                        React DOM 在渲染之前默认会 过滤 所有传入的值{'\n'}
                                        所有的内容在渲染之前都被转换成了字符串{'\n'}
                                        可以有效地防止 XSS(跨站脚本) 攻击
                                    </pre>
                                </Panel>
                                <Panel header="JSX 代表 Objects" key="6">
                                    <pre>
                                        Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用{'\n'}
                                        const element = ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;h1 className="greeting">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, world!{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;/h1>{'\n'}
                                        );{'\n'}
                                        {'\n'}
                                        const element = React.createElement({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;'h1',{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#123;className: 'greeting'},{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;'Hello, world!'{'\n'}
                                        );{'\n'}
                                        {'\n'}
                                        React.createElement() 这个方法首先会进行一些避免bug的检查{'\n'}
                                        {'\n'}
                                        const element = &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;type: 'h1',{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;props: &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className: 'greeting',{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children: 'Hello, world'{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        };{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="元素渲染" key="7">
                                    <pre>
                                        元素是构成 React 应用的最小单位{'\n'}
                                        const element = &#60;h1>Hello, world&#60;/h1>;{'\n'}
                                        仅是元素而非组件{'\n'}
                                        ReactDOM.render() 的方法来渲染到页面{'\n'}
                                        {'\n'}
                                        更新元素渲染{'\n'}
                                        ReactDOM.render() 方法{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="组件&Props" key="8">
                                    <pre>
                                        组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”）{'\n'}
                                        并返回一个需要在页面上展示的React元素{'\n'}
                                        {'\n'}
                                        函数定义/类定义组件{'\n'}
                                        {'\n'}
                                        定义一个组件最简单的方式是使用JavaScript函数{'\n'}
                                        function Welcome(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Hello, &#123;props.name}&#60;/h1>;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        该函数是一个有效的React组件，它接收一个单一的“props”对象并返回了一个React元素{'\n'}
                                        {'\n'}
                                        也可以使用 ES6 class 来定义一个组件{'\n'}
                                        class Welcome extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Hello, &#123;this.props.name}&#60;/h1>;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="组件渲染" key="9">
                                    <pre>
                                        const element = &#60;Welcome name="Sara" />;{'\n'}
                                        {'\n'}
                                        function Welcome(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Hello, &#123;props.name}&#60;/h1>;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        const element = &#60;Welcome name="Sara" />;{'\n'}
                                        ReactDOM.render({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;element,{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root'){'\n'}
                                        );{'\n'}
                                        {'\n'}
                                        渲染说明{'\n'}
                                        &#60;Welcome name="Sara" />元素调用了ReactDOM.render()方法{'\n'}
                                        React将&#123;name: 'Sara'}作为props传入并调用Welcome组件{'\n'}
                                        Welcome组件将&#60;h1>Hello, Sara&#60;/h1>元素作为结果返回{'\n'}
                                        React DOM将DOM更新为&#60;h1>Hello, Sara&#60;/h1>{'\n'}
                                        {'\n'}
                                        注意{'\n'}
                                        组件名称必须以大写字母开头{'\n'}
                                        例如，&#60;div /> 表示一个DOM标签，但 &#60;Welcome /> 表示一个组件，并且在使用该组件时你必须定义或引入它{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="组合组件" key="10">
                                    <pre>
                                        组件可以在它的输出中引用其它组件{'\n'}
                                        可以用同一组件来抽象出任意层次的细节{'\n'}
                                        在React应用中，按钮、表单、对话框、整个屏幕的内容等，这些通常都被表示为组件{'\n'}
                                        {'\n'}
                                        可以创建一个App组件，用来多次渲染Welcome组件{'\n'}
                                        function Welcome(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Hello, &#123;props.name}&#60;/h1>;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        function App() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Welcome name="Sara" />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Welcome name="Cahal" />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Welcome name="Edite" />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        ReactDOM.render({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;App />,{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root'){'\n'}
                                        );{'\n'}
                                        {'\n'}
                                        注意:{'\n'}
                                        组件的返回值只能有一个根元素{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="提取组件" key="11">
                                    <pre>
                                        可以将组件切分为更小的组件{'\n'}
                                        function Comment(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="Comment">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="UserInfo">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;img className="Avatar"{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&#123;props.author.avatarUrl}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&#123;props.author.name}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="UserInfo-name">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.author.name}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="Comment-text">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="Comment-date">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;formatDate(props.date)}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        这个组件接收author(对象)、text(字符串)、以及date(Date对象)作为props{'\n'}
                                        {'\n'}
                                        提取Avatar组件{'\n'}
                                        function Avatar(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;img className="Avatar"{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&#123;props.user.avatarUrl}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&#123;props.user.name}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                        Avatar作为Comment的内部组件，不需要知道是否被渲染{'\n'}
                                        建议从组件自身的角度来命名props，而不是根据使用组件的上下文命名{'\n'}
                                        {'\n'}
                                        提取一个UserInfo组件{'\n'}
                                        function UserInfo(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="UserInfo">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Avatar user=&#123;props.user} />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="UserInfo-name">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.user.name}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        进一步简化Comment组件{'\n'}
                                        function Comment(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="Comment">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;UserInfo user=&#123;props.author} />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="Comment-text">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div className="Comment-date">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;formatDate(props.date)}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="组件-Props的只读性" key="12">
                                    <pre>
                                        无论是使用函数或是类来声明一个组件，它决不能修改它自己的props{'\n'}
                                        {'\n'}
                                        纯函数{'\n'}
                                        function sum(a, b) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return a + b;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        非纯函数{'\n'}
                                        function withdraw(account, amount) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;account.total -= amount;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        所有的React组件必须像纯函数那样使用它们的props{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="状态&生命周期" key="13">
                                    <pre>
                                        状态与属性十分相似，但是状态是私有的，完全受控于当前组件{'\n'}
                                        从状态以及组件的详细渲染流程产生生命周期{'\n'}
                                        {'\n'}
                                        将函数转换为类{'\n'}
                                        1.创建一个名称扩展为 React.Component 的ES6 类{'\n'}
                                        2.创建一个叫做render()的空方法{'\n'}
                                        3.将函数体移动到 render() 方法中{'\n'}
                                        4.在 render() 方法中，使用 this.props 替换 props{'\n'}
                                        5.删除剩余的空函数声明{'\n'}
                                        {'\n'}
                                        class Clock extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello, world!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>It is &#123;this.props.date.toLocaleTimeString()}.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        使用类就允许使用其它特性，例如局部状态、生命周期钩子{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="一个类添加局部状态" key="14">
                                    <pre>
                                        通过3个步骤将 date 从属性移动到状态中{'\n'}
                                        {'\n'}
                                        1.在 render() 方法中使用 this.state.date 替代 this.props.date{'\n'}
                                        class Clock extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello, world!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>It is &#123;this.state.date.toLocaleTimeString()}.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        2.添加一个类构造函数来初始化状态 this.state{'\n'}
                                        class Clock extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;date: new Date()};{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello, world!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>It is &#123;this.state.date.toLocaleTimeString()}.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        注意:传递 props 到基础构造函数{'\n'}
                                        constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;date: new Date()};{'\n'}
                                        }{'\n'}
                                        类组件应始终使用props调用基础构造函数{'\n'}
                                        {'\n'}
                                        3.从 &#60;Clock /> 元素移除 date 属性{'\n'}
                                        class Clock extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;date: new Date()};{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello, world!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>It is &#123;this.state.date.toLocaleTimeString()}.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        ReactDOM.render({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#60;Clock />,{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('root'){'\n'}
                                        );{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="将生命周期方法添加到类中" key="15">
                                    <pre>
                                        销毁时释放组件所占用的资源非常重要{'\n'}
                                        {'\n'}
                                        每当Clock组件第一次加载到DOM中的时候，都生成定时器，这在React中被称为挂载{'\n'}
                                        每当Clock生成的这个DOM被移除的时候，清除定时器，这在React中被称为卸载{'\n'}
                                        {'\n'}
                                        class Clock extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;date: new Date()};{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;componentDidMount() &#123;{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;componentWillUnmount() &#123;{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello, world!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>It is &#123;this.state.date.toLocaleTimeString()}.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        当组件输出到 DOM 后会执行 componentDidMount() 钩子，这是一个建立定时器的好地方{'\n'}
                                        componentDidMount() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;this.timerID = setInterval({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() => this.tick(),{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        如果不在 render() 中使用某些东西，它就不应该在状态中{'\n'}
                                        在 componentWillUnmount()生命周期钩子中卸载计时器{'\n'}
                                        componentWillUnmount() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;clearInterval(this.timerID);{'\n'}
                                        }{'\n'}

                                        <p>最后，实现了每秒钟执行的 tick() 方法</p>
                                        <p>使用 this.setState() 来更新组件局部状态</p>
                                        class Clock extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;date: new Date()};{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;componentDidMount() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.timerID = setInterval({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() => this.tick(),{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;componentWillUnmount() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clearInterval(this.timerID);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;tick() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date: new Date(){'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello, world!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2>It is &#60;this.state.date.toLocaleTimeString()}.&#60;/h2>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        <h4>回顾</h4>
                                        {'\n'}
                                        <ul>
                                            <li>
                                                <p>1.当 &#60;Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数</p>
                                                <p>&nbsp;&nbsp;由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state</p>
                                            </li>
                                            <li>
                                                <p>2.React 然后调用 Clock 组件的 render() 方法</p>
                                                <p>React 更新 DOM 以匹配 Clock 的渲染输出</p>
                                            </li>
                                            <li>
                                                <p>3.当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子</p>
                                                <p>在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()</p>
                                            </li>
                                            <li>
                                                <p>4.浏览器每秒钟调用 tick() 方法</p>
                                                <p>其中，Clock 组件通过使用包含当前时间的对象调用 setState() 来调度UI更新</p>
                                                <p>通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上应当显示什么</p>
                                                <p>render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，并相应地更新DOM</p>
                                            </li>
                                            <li>
                                                <p>5.一旦Clock组件被从DOM中移除</p>
                                                <p>React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除</p>
                                            </li>
                                        </ul>
                                    </pre>
                                </Panel>
                                <Panel header="使用状态" key="16">
                                    <pre>
                                        <h3>三个关键点</h3>
                                        <ul>
                                            <li>
                                                <p>1.不要直接更新状态</p>
                                                <pre>
                                                    // Wrong{'\n'}
                                                    this.state.comment = 'Hello';{'\n'}
                                                    // Correct{'\n'}
                                                    this.setState(&#123;comment: 'Hello'});{'\n'}
                                                    注意:构造函数是唯一能够初始化 this.state 的地方
                                                </pre>
                                            </li>
                                            <li>
                                                <p>2.状态更新可能是异步的</p>
                                                <p>提高性能：React 可以将多个setState() 调用合并成一个调用来提高性能</p>
                                                <p>因为 this.props 和 this.state 可能是异步更新的，</p>
                                                <p>不应该依靠它们的值来计算下一个状态</p>
                                                <pre>
                                                    // Wrong{'\n'}
                                                    this.setState(&#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;counter: this.state.counter + this.props.increment,{'\n'}
                                                    });{'\n'}
                                                    // Correct{'\n'}
                                                    this.setState((prevState, props) => (&#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;counter: prevState.counter + props.increment{'\n'}
                                                    })){'\n'}
                                                    常规函数{'\n'}
                                                    this.setState(function(prevState, props) &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;return &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter: prevState.counter + props.increment{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;};{'\n'}
                                                    });
                                                </pre>
                                            </li>
                                            <li>
                                                <p>3.状态更新合并</p>
                                                <p>当调用 setState() 时，React 将你提供的对象合并到当前状态</p>
                                                <p>状态可能包含一些独立的变量</p>
                                                <pre>
                                                    constructor(props) &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;posts: [],{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comments: []{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;};{'\n'}
                                                    }{'\n'}
                                                    调用 setState() 独立地更新它们{'\n'}
                                                    componentDidMount() &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;fetchPosts().then(response => &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;posts: response.posts{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;});{'\n'}
                                                    {'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;fetchComments().then(response => &#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comments: response.comments{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});{'\n'}
                                                    &nbsp;&nbsp;&nbsp;&nbsp;});{'\n'}
                                                    }
                                                </pre>
                                            </li>
                                            <li>
                                                <p>这里的合并是浅合并</p>
                                                <p>也就是说this.setState(&#123;comments})完整保留了this.state.posts，但完全替换了this.state.comments</p>
                                                <p>也就是说仅支持一个对象的写入，如果要全部赋值的话就得在外面将新的状态值全部重组成功然后一次性全部替换当前的状态</p>
                                                <p>浅合并比较注重效率并且不会有其他奇怪的问题产生</p>
                                            </li>
                                        </ul>
                                    </pre>
                                </Panel>
                                <Panel header="数据自顶向下流动(单项数据流、静态的数据结构)" key="17">
                                    <pre>
                                        <p>组件可以选择将其状态作为属性传递给其子组件</p>
                                        &#60;h2>It is &#123;this.state.date.toLocaleTimeString()}.&#60;/h2>
                                        {'\n'}
                                        <p>用户定义的组件</p>
                                        &#60;FormattedDate date=&#123;this.state.date} />
                                        {'\n'}
                                        <p>FormattedDate 组件将在其属性中接收到 date 值</p>
                                        <p>并且不知道它是来自 Clock 状态、还是来自 Clock 的属性、亦或手工输入</p>
                                        function FormattedDate(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h2>It is &#60;props.date.toLocaleTimeString()}.&#60;/h2>;{'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        <h5>描述:</h5>
                                        <p>被称为自顶向下或单向数据流,</p>
                                        <p>任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件</p>
                                        {'\n'}
                                        所有组件都是真正隔离的
                                        {'\n'}
                                        function App() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Clock />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Clock />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Clock />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="事件处理" key="18">
                                    <h3>React 元素的事件处理和 DOM元素的很相似</h3>

                                    <ul>
                                        <li>React事件绑定属性的命名采用驼峰式写法，而不是小写</li>
                                        <li>果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)</li>
                                    </ul>

                                    <pre>
                                        传统的 HTML{'\n'}
                                        &#60;button onclick="activateLasers()">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;Activate Lasers{'\n'}
                                        &#60;/button>{'\n'}
                                        {'\n'}
                                        React{'\n'}
                                        &#60;button onClick=&#123;activateLasers}>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;Activate Lasers{'\n'}
                                        &#60;/button>{'\n'}
                                    </pre>

                                    <h4>在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为</h4>
                                    <p>必须明确的使用 preventDefault</p>

                                    <pre>
                                        传统的 HTML 中阻止链接默认打开一个新页面{'\n'}
                                        &#60;a href="#" onclick="console.log('The link was clicked.'); return false">{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;Click me{'\n'}
                                        &#60;/a>{'\n'}
                                        {'\n'}
                                        React{'\n'}
                                        function ActionLink() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;function handleClick(e) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('The link was clicked.');{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;a href="#" onClick=&#123;handleClick}>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/a>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        }{'\n'}
                                        e 是一个合成事件{'\n'}
                                        React 根据 W3C spec 来定义这些合成事件{'\n'}
                                        不需要担心跨浏览器的兼容性问题{'\n'}
                                        {'\n'}
                                        使用 React 的时候通常你不需要使用 addEventListener 为一个已创建的 DOM 元素添加监听器{'\n'}
                                        仅仅需要在这个元素初始渲染的时候提供一个监听器{'\n'}
                                    </pre>

                                    <h5>当你使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法</h5>
                                    <p>Toggle 组件渲染一个让用户切换开关状态的按钮</p>
                                    <pre>
                                        class Toggle extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;isToggleOn: true};{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// This binding is necessary to make `this` work in the callback{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.handleClick = this.handleClick.bind(this);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;handleClick() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(prevState => (&#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isToggleOn: !prevState.isToggleOn{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}));{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;button onClick=&#123;this.handleClick}>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.isToggleOn ? 'ON' : 'OFF'}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/button>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                    </pre>
                                    <h3>注意:</h3>
                                    <p>谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的</p>
                                    <p>如果忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined</p>

                                    <p>产生原因:</p>
                                    <p>通常情况下，如果你没有在方法后面添加 ()</p>
                                    <p>例如 onClick=&#123;this.handleClick}，你应该为这个方法绑定 this</p>

                                    <h3>如果使用 bind 让你很烦，这里有两种方式可以解决</h3>
                                    <p class="f-c-999">使用属性初始化器来绑定回调函数</p>
                                    <pre>
                                        class LoggingButton extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;// This syntax ensures `this` is bound within handleClick.{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;// Warning: this is *experimental* syntax.{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;handleClick = () => &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('this is:', this);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;button onClick=&#123;this.handleClick}>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/button>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                    </pre>

                                    <p class="f-c-999">可以在回调函数中使用 箭头函数</p>
                                    <pre>
                                        class LoggingButton extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;handleClick() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('this is:', this);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// This syntax ensures `this` is bound within handleClick{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;button onClick=&#123;(e) => this.handleClick(e)}>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/button>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                    </pre>
                                    <p>使用这个语法有个问题就是每次 LoggingButton 渲染的时候都会创建一个不同的回调函数</p>
                                    <p>如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染</p>
                                    <p>通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题</p>
                                </Panel>
                                <Panel header="向事件处理程序传递参数" key="19">
                                    <h3>为事件处理程序传递额外的参数</h3>
                                    <pre>
                                        &#60;button onClick=&#123;(e) => this.deleteRow(id, e)}>Delete Row&#60;/button>{'\n'}
                                        &#60;button onClick=&#123;this.deleteRow.bind(this, id)}>Delete Row&#60;/button>{'\n'}
                                    </pre>
                                    <h5>描述:</h5>
                                    <p>分别通过 arrow functions 和 Function.prototype.bind 来为事件处理函数传递参数</p>
                                    <p>参数 e 作为 React 事件对象将会被作为第二个参数进行传递</p>
                                    <p>通过箭头函数的方式，事件对象必须显式的进行传递</p>
                                    <p>通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递</p>
                                    <h5>注意:</h5>
                                    <p>通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面</p>
                                    <pre>
                                        class Popper extends React.Component&#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor()&#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super();{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;name:'Hello world!'};{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;preventPop(name, e)&#123;    //事件对象e要放在最后{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(name);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render()&#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;p>hello&#60;/p>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;/* Pass params via bind() method. */}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;a href="https://reactjs.org" onClick=&#123;this.preventPop.bind(this,this.state.name)}>Click&#60;/a>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="条件渲染基础" key="20">
                                    <p class="f-c-999">
                                        React 中的条件渲染和 JavaScript 中的一致，
                                        使用 JavaScript 操作符 if 或条件运算符来创建表示当前状态的元素，
                                        然后让 React 根据它们来更新 UI
                                    </p>
                                    <pre>
                                        function Greeting(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;const isLoggedIn = props.isLoggedIn;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;if (isLoggedIn) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#60;UserGreeting />;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;GuestGreeting />;{'\n'}
                                        }{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="元素变量" key="21">
                                    <pre>
                                        基础组件{'\n'}
                                        function UserGreeting(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Welcome back!&#60;/h1>;{'\n'}
                                        }{'\n'}
                                        function GuestGreeting(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h1>Please sign up.&#60;/h1>;{'\n'}
                                        }{'\n'}
                                        基础组件组成一块相对独立的逻辑点{'\n'}
                                        function Greeting(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;const isLoggedIn = props.isLoggedIn;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;if (isLoggedIn) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#60;UserGreeting />;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return &#60;GuestGreeting />;{'\n'}
                                        }{'\n'}
                                        在功能中使用抽离出来的逻辑点{'\n'}
                                        class LoginControl extends React.Component &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;constructor(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super(props);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.handleLoginClick = this.handleLoginClick.bind(this);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.handleLogoutClick = this.handleLogoutClick.bind(this);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;isLoggedIn: false};{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;handleLoginClick() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;isLoggedIn: true});{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;handleLogoutClick() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;isLoggedIn: false});{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const isLoggedIn = this.state.isLoggedIn;{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let button = null;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (isLoggedIn) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button = &#60;LogoutButton onClick=&#123;this.handleLogoutClick} />;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button = &#60;LoginButton onClick=&#123;this.handleLoginClick} />;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        {'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;Greeting isLoggedIn=&#123;isLoggedIn} />{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;button}{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;}{'\n'}
                                        }{'\n'}
                                    </pre>
                                </Panel>
                                <Panel header="运算符" key="22">
                                    <p class="f-c-999">可以通过用花括号包裹代码在 JSX 中嵌入任何表达式</p>
                                    <h3>与运算符 &&</h3>
                                    <pre>
                                        function Mailbox(props) &#123;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;const unreadMessages = props.unreadMessages;{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;return({'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;div>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1>Hello!&#60;/h1>{'\n'}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;{'\n'}
                                                        unreadMessages.length > 0 &&{'\n'}
                                                        &#60;h2>{'\n'}
                                                            You have &#123;unreadMessages.length} unread messages.{'\n'}
                                                        &#60;/h2>{'\n'}
                                                    }{'\n'}
                                                &#60;/div>{'\n'}
                                            ){'\n'}
                                        }{'\n'}
                                        {'\n'}
                                        const messages = ['React', 'Re: React', 'Re:Re: React'];{'\n'}
                                        {'\n'}
                                        &#60;Mailbox unreadMessages=&#123;messages} />{'\n'}
                                    </pre>
                                    <h4>总结：</h4>
                                    <ul>
                                        <li>true && expression 返回 expression</li>
                                        <li>false && expression 返回 false</li>
                                    </ul>
                                    <h3>三目运算符</h3>
                                    <p>条件渲染的另一种方法是使用 JavaScript 的条件运算符 condition ? true : false</p>
                                    <pre>
                                        The user is <b>&#123;isLoggedIn ? 'currently' : 'not'}</b> logged in.
                                    </pre>
                                </Panel>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default readFileBase;