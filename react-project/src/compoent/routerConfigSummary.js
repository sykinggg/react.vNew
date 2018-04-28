/**
 * <BrowserRouter>
 *     描述：包含<Route>的路由容器
 *     		<Route>使用html5历史记录api（pushstate，replacestate和popstate事件）使ui与url保持同步。
 *     属性：
 *     		basename: string
 *     			所在位置的基本网址
 *     				实例：
 *     			<BrowserRouter basename="/calendar">
 *     			 	<Link to="/today"> renders <a href="/calendar/today">
 *     		getUserConfirmation: func
 *     			一个用来确认导航的功能,默认使用window.confirm
 *     				实例：
 *     			<BrowserRouter getUserConfirmation={getConfirmation}/>
 *     			const getConfirmation = (message, callback) => {
 *     				const allowTransition = window.confirm(message)
 *     				callback(allowTransition)
 *     			}
 *     		forceRefresh: bool
 *     			如果为true，则路由器将在页面导航中使用整页刷新
 *     			常在不支持html5历史api的浏览器中使用它
 *     				实例：
 *     			const supportsHistory = 'pushState' in window.history
 *     			<BrowserRouter forceRefresh={!supportsHistory}/>
 *     		keyLength: number
 *     			location.key的长度,默认为6
 *     				实例：
 *     			<BrowserRouter keyLength={12}/>
 *     		children: node
 *     			一个要渲染的子元素
 * <HashRouter>
 *     	描述：包含<Route>的路由实例
 *     		<Route>使用URL的哈希部分（即window.location.hash）来保持用户界面与网址同步
 *     	注意：哈希历史记录不支持location.key或location.state，由于此技术仅用于支持传统浏览器
 *     		尽量使用<browserhistory>来代替
 *     	使用：https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string
 *     		有时间再看
 * <Link>
 *     	描述：声明式的可访问导航
 *     		<Link to="/about">About</Link>
 *     	属性：
 *     		to: string
 *     			链接位置的字符串表示，通过连接位置的路径名，搜索和哈希属性创建
 *     		to: object
 *     			可以具有以下任何属性的对象
 *     			*pathname:表示要链接到的路径的字符串
 *     			*search:查询参数的字符串表示
 *     			*hash:url中的哈希值
 *     			*state:状态同步位置
 *     				实例：
 *     			<Link to='/courses?sort=name'/>
 *     			<Link to={{
 *     				pathname: '/courses',
 *     				search: '?sort=name',
 *     				hash: '#the-hash',
 *     				state: { fromDashboard: true }
 *     			}}/>
 *     		replace: bool
 *     			如果为true，则单击该链接将替换历史堆栈中的当前条目而不是添加新条目
 *     				实例：
 *     			<Link to="/courses" replace />
 *     		innerRef: func
 *     			允许访问组件的底层引用
 *     				实例：
 *     			const refCallback = node => {}
 *     			<Link to="/" innerRef={refCallback} />
 * <NavLink>
 *     描述：一个特殊的<link>版本，当它与当前的url相匹配时，会为呈现的元素添加样式属性
 *     		<NavLink to="/about">About</NavLink>
 *     属性：
 *     		activeClassName: string
 *     			当该元素处于活动状态时，该类将给予该元素,这将与类名prop连接
 *     				实例：
 *     			<NavLink
 *     				to="/faq"
 *     				activeClassName="selected"
 *     			>FAQs</NavLink>
 *     		activeStyle: object
 *     			在元素处于活动状态时应用于该元素的样式
 *     				实例：
 *     			<NavLink
 *     				to="/faq"
 *     				activeStyle={{
 *     					fontWeight: 'bold',
 *     					color: 'red'
 *     				}}
 *     			>FAQs</NavLink>
 *     		exact: bool
 *     			如果为true，则仅在位置完全匹配时才应用活动的类/样式
 *     				实例：
 *     			<NavLink
 *     				exact
 *     				to="/profile"
 *     			>Profile</NavLink>
 *     		strict: bool
 *     			如果为true，则在确定位置是否与当前url匹配时，将考虑位置路径名中的尾部斜线
 *     				实例：
 *     			<NavLink
 *     				strict
 *     				to="/events/"
 *     			>Events</NavLink>
 *     		isActive: func
 *     			添加额外逻辑以确定链接是否处于活动状态的功能
 *     			如果想做的不止是验证链接的路径名与当前url的路径名相匹配，那么应该使用它
 *     				实例：
 *     			const oddEvent = (match, location) => {
 *     				if (!match) {
 *     					return false
 *     				}
 *     				const eventID = parseInt(match.params.eventID)
 *     				return !isNaN(eventID) && eventID % 2 === 1
 *     			}
 *     			<NavLink
 *     				to="/events/123"
 *     				isActive={oddEvent}
 *     			>Event 123</NavLink>
 *     		location: object
 *     			isactive比较当前的历史位置（通常是当前的浏览器url）
 *     			可以传递一个地址对象
 * <Prompt>
 *     描述：从核心提示符重新导出
 * <MemoryRouter>
 *     描述：这会将“url”的历史记录保存在内存中（不会读取或写入地址栏）
 *     		在测试和非浏览器环境中很有用，比如反应原生
 *     使用：https://reacttraining.com/react-router/web/api/MemoryRouter
 *     		有时间再看
 * <Redirect>
 *     描述：渲染一个<Redirect>将导航到一个新的位置(重定向)
 *     		新位置将覆盖历史堆栈中的当前位置，例如服务器端重定向（http 3xx）。
 *     			实例：
 *     		<Route exact path="/" render={() => (
 *     			loggedIn ? (
 *     				<Redirect to="/dashboard"/>
 *     			):(
 *     				<PublicHomePage/>
 *     			)
 *     		)}/>
 *     属性：
 *     		to: string
 *     			要重定向到的网址
 *     			path-to-regexp可以理解的任何有效的url路径
 *     			所有使用的url参数必须由from覆盖
 *     				实例：
 *     			<Redirect to="/somewhere/else"/>
 *     		to: object
 *     			一个要重定向到的位置
 *     			pathname可以是path-to-regexp可以理解的任何有效的url路径
 *     				实例：
 *     			<Redirect to={{
 *     				pathname: '/login',
 *     				search: '?utm=your+face',
 *     				state: { referrer: currentLocation }
 *     			}}/>
 *     			状态对象可以通过重定向到的组件中的this.props.location.state来访问
 *     			这个新的引用键（referrer这不是一个特殊的名字）将通过路径名'/ login'指向的登录组件中的
 *     			this.props.location.state.referrer来访问
 *     		push: bool
 *     			如果属实，重定向会将新条目推向历史记录，而不是替换当前条目
 *     				实例：
 *     			<Redirect push to="/somewhere/else"/>
 *     		from: string
 *     			重定向的路径名
 *     			path-to-regexp可以理解的任何有效的url路径
 *     			所有匹配的url参数都提供给to中的模式
 *     			必须包含在to中使用的所有参数
 *     			to未使用的其他参数将被忽略
 *     			这只能用于在呈现<switch>内的<redirect>时匹配位置
 *     				实例：
 *     			<Switch>
 *     			 	<Redirect from='/old-path' to='/new-path'/>
 *     			 	<Route path='/new-path' component={Place}/>
 *     			</Switch>
 *     			<Switch>
 *     			 	必须包含在to中使用的所有参数
 *     			 	<Redirect from='/users/:id' to='/users/profile/:id'/>
 *     			 	<Route path='/users/profile/:id' component={Profile}/>
 *     			</Switch>
 *     		exact: bool
 *     			完全匹配,相当于route.exact
 *     		strict: bool
 *     			严格匹配,相当于route.strict
 * <Route>
 *     描述：路由组件中最重要的一环
 *     		import { BrowserRouter as Router, Route } from 'react-router-dom'
 *
 *     		<Router>
 *     		 	<div>
 *     		 	  	<Route exact path="/" component={Home}/>
 *     		 	  	<Route path="/news" component={NewsFeed}/>
 *     		 	</div>
 *     		</Router>
 *
 *     		<div>
 *     		 	<Home/>
 *     		 	<!-- react-empty: 2 -->
 *     		</div>
 *     		<div>
 *     		 	<!-- react-empty: 1 -->
 *     			<NewsFeed/>
 *     		</div>
 *     使用：
 *     		Route render methods(渲染)
 *     			*<Route component>
 *     			*<Route render>
 *     			*<Route children>
 *     			每个在不同的情况下都很有用
 *     			只在给定的<Route>上使用这些工具中的一个
 *     			常用 component
 *     		Route props
 *     			所有三种渲染方法将通过相同的三种路线工具
 *     			*match
 *     			*location
 *     			*history
 *     		component
 *     			只有当位置匹配时才会渲染反应组分
 *     			用路线道具来渲染
 *     				实例：
 *     			<Route path="/user/:username" component={User}/>
 *     			const User = ({ match }) => {
 *     				return <h1>Hello {match.params.username}!</h1>
 *     			}
 *
 *     			当使用component（而不是render或children，如下）时，
 *     				路由器使用react.createelement从给定的组件创建一个新的react元素
 *     			这意味着如果您为组件prop提供了内联函数，则每个渲染都会创建一个新组件
 *     			这会导致现有组件卸载和新组件安装，而不是仅更新现有组件
 *     			当使用内联函数进行内联渲染时，请使用渲染或子项目
 *     				实例：
 *     			<Route path="/home" render={() => <div>Home</div>}/>
 *
 *     			const FadingRoute = ({ component: Component, ...rest }) => (
 *     				<Route {...rest} render={props => (
 *     					<FadeIn>
 *     					 	<Component {...props}/>
 *     					</FadeIn>
 *     				)}/>
 *     			)
 *
 *     			<FadingRoute path="/cool" component={Something}/>
 *     		注意:<route component>优先于<route render>，所以不要在同一个<route>中使用两者
 *     		children: func
 *     			需要渲染路径是否匹配位置
 *     			可以使用函数children prop
 *     				它的工作方式与渲染完全相同，不同之处在于它会调用是否匹配
 *     				子渲染道具接收与组件和渲染方法相同的路径道具，除非路径未匹配url，则match为null
 *     			允许根据路由是否匹配来动态调整UI
 *     			如果路线匹配，将添加一个活动的类
 *     				实例：
 *     			<ul>
 *     			 	<ListItemLink to="/somewhere"/>
 *     			 	<ListItemLink to="/somewhere-else"/>
 *     			</ul>
 *
 *     			const ListItemLink = ({ to, ...rest }) => (
 *     				<Route path={to} children={({ match }) => (
 *     					<li className={match ? 'active' : ''}>
 *     					 	<Link to={to} {...rest}/>
 *     					</li>
 *     				)}/>
 *     			)
 *
 *     			<Route children={({ match, ...rest }) => (
 *     				<Animate>
 *     				 	{match && <Something {...rest}/>}
 *     				</Animate>
 *     			)}/>
 *     		注意:<route component>和<route render>都优先于<route children>，因此不要在同一个<route>中使用多个路由
 *			path: string
 *				path-to-regexp可以理解的任何有效的url路径
 *				没有路径的路线总是匹配
 *					实例：
 *				<Route path="/users/:id" component={User}/>
 *			exact: bool
 *				当为true时，只有在路径完全匹配location.pathname时才会匹配
 *					实例：
 *				<Route exact path="/one" component={About}/>
 *				path: /one
 *				location.pathname: /one/two
 *				exact:
 *					false => 可以匹配
 *					true => 不能匹配
 *			strict: bool
 *				如果为true，则具有尾部斜线的路径将只与具有尾部斜线的位置路径名相匹配
 *					实例：
 *				<Route strict path="/one/" component={About}/>
 *				path: /one/
 *				location.pathname: /one =>	不能匹配
 *				location.pathname: /one/ =>	可以匹配
 *				location.pathname: /one/two =>	可以匹配
 *			注意：可以使用strict来强制执行location.pathname没有结尾斜杠
 *				但为了执行此操作，strict和exact都必须为true
 *			location: object
 *				<Route>元素会尝试将其路径与当前历史位置（通常是当前浏览器url）相匹配
 *				但是，也可以传递具有不同路径名的位置进行匹配
 *				如果需要将<Route>与当前历史记录位置以外的位置相匹配
 *				如果<Route>元素包裹在<switch>中并匹配传递的位置到<switch>（或当前历史记录位置），
 *				那么传递给<route>的位置prop将被<switch>（在此给出）使用的位置替代
 *			sensitive: bool
 *				当为真时，如果路径区分大小写，则匹配
 *					实例：
 *				<Route sensitive path="/one" component={About}/>
 *	<Router>
 *	   描述：所有路由器组件的通用低级接口
 *	   		应用程序将使用其中一个高级路由器
 *	   		*<BrowserRouter>
 *	   		*<HashRouter>
 *	   		*<MemoryRouter>
 *	   		*<NativeRouter>
 *	   		*<StaticRouter>
 *	   		使用低级别<router>的最常见用法是将自定义历史记录与像redux或mobx这样的状态管理库进行同步
 *	   属性：
 *	   		history: object
 *	   			用于导航的历史记录对象
 *	   				实例：
 *	   			import createBrowserHistory from 'history/createBrowserHistory'
 *	   			const customHistory = createBrowserHistory()
 *	   			<Router history={customHistory}/>
 *	   		children: node
 *	   			一个要渲染的子元素
 *	   				实例：
 *	   			<Router><App/><Router>
 *	<StaticRouter>
 *	   描述:一个永远不会改变位置的<Router>
 *	       在服务器端渲染场景中
 *	       		实例：
 *	       import { createServer } from 'http'
 *	       import React from 'react'
 *	       import ReactDOMServer from 'react-dom/server'
 *	       import { StaticRouter } from 'react-router'
 *
 *	       createServer((req, res) => {
 *	       		const context = {}
 *	       		const html = ReactDOMServer.renderToString(
 *	       			<StaticRouter location={req.url} context={context}>
 *	       			 	<App/>
 *	       			</StaticRouter>
 *	       		)
 *	       		if (context.url) {
 *	       			res.writeHead(302, {
 *	       				Location: context.url
 *	       			})
 *	       			res.end()
 *	       		} else {
 *	       			res.write(html)
 *	       			res.end()
 *	       		}
 *	       }).listen(3000)
 *	   属性：
 *	   		basename: string
 *	   			所在位置的基本网址
 *	   				实例:
 *	   			<StaticRouter basename="/calendar">
 *	   			 	<Link to="/today"/> // renders <a href="/calendar/today">
 *	   			</StaticRouter>
 *	   		location: string
 *	   			服务器收到的URL，可能是节点服务器上的req.url
 *	   				实例：
 *	   			<StaticRouter location={req.url}>
 *	   			 	<App/>
 *	   			</StaticRouter>
 *	   		context: object
 *	   			一个普通的javascript对象
 *	   			在渲染期间，组件可以向对象添加属性以存储有关render.const context = {}的信息
 *	   			<staticrouter context = {context}>
 *	   			    <app />
 *	   			</ staticrouter>
 *	   			当<route>匹配时，它会将上下文对象传递给它作为staticcontext prop呈现的组件
 *	   		children: node
 *	   			一个要渲染的子元素
 *	<Switch>
 *	   描述：呈现与该位置匹配的第一个子元素<Route>或<Redirect>
 *	       	import { Switch, Route } from 'react-router'
 *	       	<Switch>
 *	       	    <Route exact path="/" component={Home}/>
 *	       	    <Route path="/about" component={About}/>
 *	       	    <Route path="/:user" component={User}/>
 *	       	    <Route component={NoMatch}/>
 *	       	</Switch>
 *	       	将默认匹配path的值和路由中的pathname加载相应的component
 *	       	如果为空就默认匹配
 *	   属性：
 *	   		location: object
 *	   			一个用于匹配子元素而不是当前历史位置
 *	   			通常是当前浏览器url
 *	   		children: node
 *	   			<switch>的子元素都应该是<route>或<redirect>元素
 *	   			只有第一个匹配当前位置的子元素将被渲染
 *	   			<route>元素使用它们的路径prop匹配，<redirect>元素使用它们的prop匹配
 *	   			一个path不带路径prop或<redirect>不带from prop将始终与当前位置相匹配
 *	   			当在<switch>中包含<redirect>时，它可以使用任何<route>的位置匹配
 *	   			from只是路径prop的别名
 *	   				实例：
 *	   			<Switch>
 *	   			 	<Route exact path="/" component={Home}/>
 *	   			 	<Route path="/users" component={Users}/>
 *	   			 	<Redirect from="/accounts" to="/users"/>
 *	   			 	<Route component={NoMatch}/>
 *	   			</Switch>
 *	history
 *		描述：封装了一次浏览器的history对象
 *			*browser history => 一个dom特定的实现，在支持html5历史api的web浏览器中很有用
 *			*hash history => 针对传统网络浏览器的特定于DOM的实现
 *			*memory history => 内存中的历史实现，可用于测试和非DOM环境，如React Native
 *		属性：
 *			length: number
 *				历史堆栈中的条目数量
 *			action: string
 *				当前操作(PUSH, REPLACE, or POP)
 *			location: object
 *				*pathname: string => 网址的路径
 *				*search: string => url查询字符串
 *				*hash: string => url散列片段
 *				*state: object => 仅在浏览器和内存历史记录中可用
 *			push: function
 *				将新条目推入历史堆栈
 *			replace: function
 *				替换历史堆栈上的当前条目
 *			go: function
 *				通过n个条目将历史堆栈中的指针移动
 *			goBack: function
 *				相当于go(-1)
 *			goForward: function
 *				相当于go(1)
 *			block: function
 *				阻止导航
 *		class Comp extends React.Component {
 *			componentWillReceiveProps(nextProps) {
 *				const locationChanged = nextProps.location !== this.props.location
 *				const locationChanged = nextProps.history.location !== this.props.history.location
 *			}
 *		}
 *		<Route component={Comp}/>
 *	match
 *		描述：匹配对象包含有关<Route path>如何匹配url的信息
 *			*params: object => Key/value对从与路径的动态段相对应的url解析
 *			*isExact: bool => 如果整个网址都匹配，则为true（无尾随字符）
 *			*path: string => 用于匹配的路径模式,用于构建嵌套的<Route>
 *			*url: string => url的匹配部分用于构建嵌套的<Link>
 *			 将在不同的地方访问匹配对象
 *			 	*Route component
 *			 	*Route render
 *			 	*Route children
 *			 	*withRouter
 *			 	*matchPath
 *			 如果路线没有路径，并因此始终匹配，则会得到最接近的父匹配
 *	matchPath
 *		描述：使您可以使用与<Route>相同的匹配代码，除非在正常渲染周期之外
 *			在服务器上渲染之前收集数据依赖性
 *		属性：
 *			pathname
 *				第一个参数是你想要匹配的路径名,如果你在服务器上使用node.js，它将是req.path
 *			props
 *				第二个参数是匹配的道具，它们与匹配道具路线接受的相同
 *			实例：
 *				import { matchPath } from 'react-router'
 *				const match = matchPath('/users/123', {
 *					path: '/users/:id',
 *					exact: true,
 *					strict: false
 *				})
 * */