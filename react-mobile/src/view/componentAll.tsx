import * as React from 'react';
// tslint:disable-next-line:no-empty-interface
export interface IProps {}
// tslint:disable-next-line:no-empty-interface
export interface IState {}
export default class ComponentAll extends React.Component<any, any> {
    public state = {
        breadcrumb: '',
        defaultName: 'component1',
        fromLink: '/componentAll',
    }
    constructor(props: any) {
        super(props);
    }
    public componentWillMount() {
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
                componentAll
            </div>
        )
    }
}