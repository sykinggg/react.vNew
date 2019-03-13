import * as React from 'react';
import './App.scss';

import { Button } from 'antd';
import logo from './logo.svg';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from './view/about';
import Home from './view/home';

class App extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
    }
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                    <Button type="primary">Button</Button>
                </p>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="home">home</Link>
                                </li>
                                <li>
                                    <Link to="about">about</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
