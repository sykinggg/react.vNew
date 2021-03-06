import React, { Fragment } from 'react';
import AsyncBottomNavigation from '../components/common/AsyncBottomNavigation';
import { RouterList } from './aboutViews/About.router';

export default function About(props: any) {
    if (props.location.pathname === '/about') {
        props.history.push('/about/favorites');
    }
    return (
        <Fragment>
            <AsyncBottomNavigation RouterList={RouterList} {...props} />
        </Fragment>
    )
}