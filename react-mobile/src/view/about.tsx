import * as React from 'react';


// 这里写一个类 对其传入参数类型也是有定义的第一个参数是props，第二个是state
// props就是用刚才上面我们定义的那样，state如果不传就写一个any就好了
export default class AboutView extends React.Component<any, any> {

    public state = {
        defaultName: 'about1',
        fromLink: '/about',
    }

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        // const linkArr = this.state.linkArr;
        // linkArr.map((item: any) => {
        //     item.link = this.props.match.url + '/' + item.name;
        // })
        // this.setState({
        //     defaultName: this.props.match.url + '/' + this.state.defaultName,
        //     linkArr,
        // })
    }

    public render() {
        return (
            <div>
                about
            </div>
        )
    }
}