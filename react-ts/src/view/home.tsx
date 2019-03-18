import * as React from 'react';
import CustomContent from 'src/component/common/customContent';
import Home2 from './home/home2';
import Home1 from './home/study';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

export default class HomeView extends React.Component<any, any> {
    public state = {
        breadcrumb: '/home/study',
        defaultName: 'study',
        fromLink: '/home',
        linkArr: [
            {
                component: Home1,
                name: 'study'
            },
            {
                component: Home2,
                name: 'home2'
            }
        ]
    }
    public setPathname: (breadcrumb: any) => void;
    constructor(props: any) {
        super(props);
    }
    public componentWillMount() {
        const linkArr = this.state.linkArr;
        linkArr.map((item: any) => {
            item.link = this.props.match.url + '/' + item.name;
        })
        this.setState({
            defaultName: this.props.match.url + '/' + this.state.defaultName,
            linkArr,
        })
    }
    public render() {
        return (
            <CustomContent data={this.state} />
        )
    }
}