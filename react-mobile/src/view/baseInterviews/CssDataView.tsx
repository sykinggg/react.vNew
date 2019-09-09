import React, { Fragment } from 'react';

import FixedButton from '../../components/homeUIDemo/FixedButton';

import DynamicAsyncComponent from '../../components/DynamicAsyncComponent';

import { reactCssContainerData } from './css';

export default function CssDataView(props: any) {
    return (
        <Fragment>
            <DynamicAsyncComponent dataComponentArr={reactCssContainerData} choiceComponent={FixedButton} />
        </Fragment>
    )
}