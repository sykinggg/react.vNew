import * as React from 'react';
import CustomContent from 'src/component/common/customContent';
import Component1 from './component/component1';
import Component2 from './component/component2';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}
export default class ComponentAll extends React.Component<any, any> {
    public state = {
        breadcrumb: '',
        defaultName: 'component1',
        fromLink: '/componentAll',
        linkArr: [
            {
                component: Component1,
                name: 'component1'
            },
            {
                component: Component2,
                name: 'component2'
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