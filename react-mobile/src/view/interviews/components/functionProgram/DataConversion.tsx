import React, { Fragment } from 'react';

import ComponentContainer from '../ComponentContainer';

export default function DataConversion(props: any) {

    const [content, setContent] = React.useState(`
如果数据是不可变的，如何改变数据
生成原始数据的转换副本

let cities = ["irving", "lowell", "houston"];

// we can get the comma separated list
console.log(cities.join(','))
// irving,lowell,houston

// if we want to get cities start with i
const citiesI = cities.filter(
    city => city[0] === "i"
);
console.log(citiesI)
// [ 'irving' ]

// if we want to capitalize all the cities
const citiesC = cities.map(
    city => city.toUpperCase()
);
console.log(citiesC)
// [ 'IRVING', 'LOWELL', 'HOUSTON' ]
                            `);
    const [title, setTitle] = React.useState('数据转换');
    return(
        <Fragment>
            <ComponentContainer title={title} content={content} />
        </Fragment>
    )
}