import * as React from 'react';
import './App.scss';

// import { Button } from 'antd';
// import logo from './logo.svg';

// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HeaderLink from './component/common/headerLink';
import AboutView from './view/about';
import ComponentAll from './view/componentAll';
import HomeView from './view/home';

export interface IState {
    minHeight: string;
    linkArr: any[];
    defaultName: string;
}
export default class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            defaultName: 'home',
            linkArr: [
                {
                    component: HomeView,
                    link: 'home',
                    name: 'home',
                },
                {
                    component: AboutView,
                    link: 'about',
                    name: 'about',
                },
                {
                    component: ComponentAll,
                    link: 'componentAll',
                    name: 'Component'
                }
            ],
            minHeight: '',
        }
    }

    // tslint:disable-next-line:no-empty
    public componentDidMount() {
        this.setState({
            minHeight: document.body.clientHeight + 'px'
        })
        window.onresize = () => {
            this.setState({
                minHeight: document.body.clientHeight + 'px'
            })
        }
    }

    public render() {
        return (
            <HeaderLink linkArr={this.state.linkArr} defaultName={this.state.defaultName} style={{ minHeight: this.state.minHeight }} />
        );
    }
}
