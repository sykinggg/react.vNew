import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function HigherComponent(props: any) {

    const [content, setContent] = React.useState(`
HOC(Higher Order Componennt) 
    是在 React 机制下社区形成的一种组件模式

简述:

    1.高阶组件不是组件，是 增强函数，
        可以输入一个元组件，返回出一个新的增强组件；

    2.高阶组件的主要作用是 代码复用，操作 状态和参数；

用法:(属性代理|反向继承)

    1.属性代理 (Props Proxy): 
        返回出一个组件，它基于被包裹组件进行 功能增强

        1.1.默认参数: 可以为组件包裹一层默认参数；

function proxyHoc(Comp) {
    return class extends React.Component {
        render() {
            const newProps = {
                name: 'tayde',
                age: 1,
            }
            return <Comp {...this.props} {...newProps} />
        }
    }
}

        1.2.提取状态: 可以通过 props 将被包裹
            组件中的 state 依赖外层，例如用于转换受控组件:

function withOnChange(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: '',
            }
        }
        onChangeName = () => {
            this.setState({
                name: 'dongdong',
            })
        }
        render() {
            const newProps = {
                value: this.state.name,
                onChange: this.onChangeName,
            }
            return <Comp {...this.props} {...newProps} />
        }
    }
}

使用姿势如下，这样就能非常快速的将一个 Input 组件转化成受控组件

const NameInput = props => (<input name="name" {...props} />)
export default withOnChange(NameInput)

        1.3.包裹组件: 可以为被包裹元素进行一层包装

function withMask(Comp) {
  return class extends React.Component {
      render() {
		  return (
		      <div>
				  <Comp {...this.props} />
					<div style={{
					  width: '100%',
					  height: '100%',
					  backgroundColor: 'rgba(0, 0, 0, .6)',
				  }} 
			  </div>
		  )
	  }
  }
}

    2.反向继承 (Inheritance Inversion): 
        返回出一个组件，继承于被包裹组件，常用于以下操作

function IIHoc(Comp) {
    return class extends Comp {
        render() {
            return super.render();
        }
    };
}
        2.1.渲染劫持 (Render Highjacking)

            2.1.1.条件渲染: 根据条件，渲染不同的组件

function withLoading(Comp) {
    return class extends Comp {
        render() {
            if(this.props.isLoading) {
                return <Loading />
            } else {
                return super.render()
            }
        }
    };
}
            可以直接修改被包裹组件渲染出的 React 元素树

            2.1.2.操作状态 (Operate State):
            可以直接通过 this.state 获取到被包裹组件的状态，
            并进行操作。
            但这样的操作容易使 state 变得难以追踪，
            不易维护，谨慎使用
    
    3.应用场景:

        3.1.权限控制，通过抽象逻辑，
        统一对页面进行权限判断，
        按不同的条件进行页面渲染:

function withAdminAuth(WrappedComponent) {
    return class extends React.Component {
		constructor(props){
			super(props)
			this.state = {
		    	isAdmin: false,
			}
		} 
		async componentWillMount() {
            const currentRole = 
                await getCurrentUserRole();
		    this.setState({
		        isAdmin: currentRole === 'Admin',
		    });
		}
		render() {
		    if (this.state.isAdmin) {
		        return <Comp {...this.props} />;
		    } else {
		        return (
                    <div>
                        您没有权限查看该页面，请联系管理员！
                    </div>
                    );
		    }
		}
    };
}

        3.2.性能监控，包裹组件的生命周期，进行统一埋点

function withTiming(Comp) {
    return class extends Comp {
        constructor(props) {
            super(props);
            this.start = Date.now();
            this.end = 0;
        }
        componentDidMount() {
            super.componentDidMount && 
            super.componentDidMount();
            this.end = Date.now();
            console.log(
                '$WrappedComponent.name 
                组件渲染时间为 
                $this.end - this.start ms'
            );
        }
        render() {
            return super.render();
        }
    };

}

        3.3.代码复用，可以将重复的逻辑进行抽象

使用注意:

    1纯函数: 增强函数应为纯函数，
        避免侵入修改元组件；

    2.避免用法污染: 理想状态下，
        应透传元组件的无关参数与事件，
        尽量保证用法不变；

    3.命名空间: 
        为 HOC 增加特异性的组件名称，
        这样能便于开发调试和查找问题；

    4.引用传递: 
        如果需要传递元组件的 refs 引用，
        可以使用React.forwardRef；

    5.静态方法: 
        元组件上的静态方法并无法被自动传出，
        会导致业务层无法调用；解决:

        5.1.函数导出
        
        5.2.静态方法赋值

    6.重新渲染: 
        由于增强函数每次调用是返回一个新组件，
        因此如果在 Render 中使用增强函数，
        就会导致每次都重新渲染整个HOC，
        而且之前的状态会丢失；
                                    `);
    const [title, setTitle] = React.useState('React高阶组件');

    return (
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}