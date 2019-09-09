import React, { Fragment } from 'react';

import AsyncBottomNavigation from '../components/common/AsyncBottomNavigation';

import { RouterList } from './baseInterviews/BaseInterview.router';

export default function BaseInterviews(props: any) {
    if (props.location.pathname === '/baseInterviews') {
        props.history.push('/baseInterviews/html');
    }
    return (
        <Fragment>
            <AsyncBottomNavigation RouterList={RouterList} {...props} />
        </Fragment>
    )
}