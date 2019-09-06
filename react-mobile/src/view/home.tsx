import React, { Fragment } from 'react';

import FixedButton from '../components/homeUIDemo/FixedButton';

export default function Home(props: any) {
    console.log(props);
    return (
        <Fragment>
            Home1
            {FixedButton(props)}
        </Fragment>
    )
}