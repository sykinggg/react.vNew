import React from 'react';

import { Card, Row, Col, Collapse } from 'antd';
const Panel = Collapse.Panel;

class readFileBase extends React.Component {
    constructor(props) {
        super(props);
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
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default readFileBase;