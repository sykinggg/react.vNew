import React from 'react';
import logo from './logo.svg';
import appStyle from './App.module.scss'

const App: React.FC = () => {
    return (
        <div className={appStyle.App}>
            <header className={appStyle['App-header']}>
                <img src={logo} className={appStyle['App-logo']} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={appStyle['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
