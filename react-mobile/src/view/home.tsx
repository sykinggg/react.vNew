import React, { Fragment } from 'react';

import FixedButton from '../components/homeUIDemo/FixedButton';

import DynamicAsyncComponent from '../components/DynamicAsyncComponent';

import { reactAboutContainerData } from './homeViews/index';

export default function Home(props: any) {
    console.log(props);
    return (
        <Fragment>
            <DynamicAsyncComponent dataComponentArr={reactAboutContainerData} choiceComponent={FixedButton} />
        </Fragment>
    )
}