import React, { Fragment } from 'react';

import FixedButton from '../../components/homeUIDemo/FixedButton';

import DynamicAsyncComponent from '../../components/DynamicAsyncComponent';

import { reactHomlContainerData } from './html';

export default function HtmlDataView(props: any) {
    return(
        <Fragment>
            <DynamicAsyncComponent dataComponentArr={reactHomlContainerData} choiceComponent={FixedButton} />
        </Fragment>
    )
}