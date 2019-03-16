import * as React from 'react';
import CustomContent from 'src/component/common/customContent';
import Home1 from './home/home1';
import Home2 from './home/home2';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}

export default class HomeView extends React.Component<any, any> {
    public state = {
        defaultName: 'home1',
        fromLink: '/home',
        linkArr: [
            {
                component: Home1,
                name: 'home1'
            },
            {
                component: Home2,
                name: 'home2'
            }
        ]
    }
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