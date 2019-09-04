import React, { Fragment, Suspense } from 'react';

export interface Iprops {
    LoadAsyncComponent: any;
}

export default function AsyncComponent(props: Iprops) {
    const { LoadAsyncComponent } = props;
    console.log('AsyncComponent');
    console.log(props);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoadAsyncComponent />
        </Suspense>
    )
}