import React, { Fragment } from 'react';
import InterviewDynamicAsyncComponent from '../components/InterviewDynamicAsyncComponent';

import { reactInterviewContainerData } from './interviews/components';

export default function home(props?: any) {

    return (
        <Fragment>
            <InterviewDynamicAsyncComponent reactInterviewContainerData={reactInterviewContainerData} />
        </Fragment>
    )
}