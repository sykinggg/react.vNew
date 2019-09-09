import React, { Fragment } from 'react';

import FixedButton from '../../components/homeUIDemo/FixedButton';

import DynamicAsyncComponent from '../../components/DynamicAsyncComponent';

import {reactJsContainerData} from './js';

export default function JsDataView(props: any) {
    return (
        <Fragment>
            <DynamicAsyncComponent dataComponentArr={reactJsContainerData} choiceComponent={FixedButton} />
        </Fragment>
    )
}