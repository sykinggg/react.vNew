import React, { Fragment } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import {
    makeStyles,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export interface IProps {
    title?: string;
    content?: string;
}

export default function ComponentContainer(props: IProps) {
    const { title, content, ...other } = props;
    const classes = useStyles(props);
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Fragment>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title || 'default'}
                    </Typography>
                    <pre>
                        {content || `
声明式编程是一种编程范式，它关注的是要做什么
而不是如何做,它表达逻辑而不显式地定义步骤
这意味着需要根据逻辑的计算来声明要显示的组件
它没有描述控制流步骤

HTML file

<div>
    <p>Declarative Programming</p>
</div>

SQL file
select * from studens where firstName = 
'declarative';
                        `}
                    </pre>
                    {/* <Typography variant="h5" component="h2">
                        be
                        {bull}
                        nev
                        {bull}o{bull}
                        lent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Fragment>
    )
}