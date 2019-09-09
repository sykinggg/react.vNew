import React, { Fragment } from 'react';
import DynamicAsyncComponent from '../components/DynamicAsyncComponent';

import { reactInterviewContainerData } from './interviews/components';

export default function home(props?: any) {

    return (
        <Fragment>
            <DynamicAsyncComponent dataComponentArr={reactInterviewContainerData} />
        </Fragment>
    )
}