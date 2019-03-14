import * as React from 'react';
import './App.scss';

// import { Button } from 'antd';
// import logo from './logo.svg';

// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HeaderLink from './component/common/headerLink';
import AboutView from './view/about';
import HomeView from './view/home';

export interface IState {
    minHeight: string;
}
export default class App extends React.Component<any, IState> {
    private linkArr: any[] = [];

    constructor(props: any) {
        super(props);
        this.state = {
            minHeight: ''
        }
        this.linkArr = [
            {
                component: HomeView,
                link: 'home',
                name: 'home',
            },
            {
                component: AboutView,
                link: 'about',
                name: 'about',
            }
        ]
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
            <HeaderLink linkArr={this.linkArr} style={{ minHeight: this.state.minHeight }} />
        );
    }
}
