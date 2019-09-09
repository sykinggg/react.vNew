import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }),
);

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap(props: any) {
    const classes = useStyles(props);

    return (
        <Fragment>
            <pre>{`
弹性布局元素的默认属性值为 min-width：auto
当子元素使用 white-space: nowrap;时会出现布局冲突

<Grid item xs>
    <Typography noWrap>

需要设置 min-width: 0
也可以通过设置 zeroMinWidth 属性解决问题

<Grid item xs zeroMinWidth>
    <Typography noWrap>
            `}</pre>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{message}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography noWrap>{message}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>{message}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Fragment>
    );
}