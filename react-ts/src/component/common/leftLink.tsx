import * as React from 'react';
import './leftLink.scss';
// tslint:disable-next-line:ordered-imports
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

// tslint:disable-next-line:no-empty-interface
export interface IPorps { }
// tslint:disable-next-line:no-empty-interface
export interface IState { }
export default class LeftLink extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // tslint:disable-next-line:no-console
        console.log(this.props);
    }
    public render() {
        return (
            <Menu theme="dark">
                {this.props.linkArr.map((item: any) => {
                    return (
                        <Menu.Item key={item.name} >
                            <NavLink activeClassName="ant-menu-item-selected" to={item.link}>{item.name}</NavLink>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )
    }
}