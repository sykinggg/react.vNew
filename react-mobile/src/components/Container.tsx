import React, { useState, Suspense } from 'react';

// component
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Link from '@material-ui/core/Link';
// import Container from '@material-ui/core/Container';

// icons

import {
    Container,
    CssBaseline,
    makeStyles,
    useTheme,
    Theme,
    createStyles,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { RouterList, TextRouter } from '../router';
import undefinedComponent from './404';
import AsyncComponent from './common/AsyncComponent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            // padding: theme.spacing(3),
            paddingTop: theme.spacing(8),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            // marginLeft: -drawerWidth,
        },
    }),
);

// function asyncComponent(Component: any) {
//     return(
//         <Suspense fallback={<div>Loading...</div>}>
//             <Component/>
//         </Suspense>
//     )
// }

export default function container() {
    const classes = useStyles();
    const theme = useTheme();
    const exact = false;

    return (
        <Container maxWidth={false} className={classes.content}>
            {/* 路由匹配完全默认路由 */}
            {/* <Redirect from='/' to={'/' + RouterList.linkArr[0].link} exact={exact} /> */}
            <Switch>

                {/* {asyncComponent(TextRouter)} */}
                {/* <Suspense fallback={<div>Loading...</div>}><TextRouter/></Suspense> */}
                <Route path="/" render={() => <AsyncComponent LoadAsyncComponent={RouterList.linkArr[0].component} />} exact />
                {/* <Route path="/" component={RouterList.linkArr[0].component} exact /> */}
                {/* <Redirect from='/' to={'/' + RouterList.linkArr[0].link} exact={exact} /> */}
                {RouterList.linkArr.map((item, i) => {
                    if (item.synchronize) {
                        return (
                            <Route key={item.link} path={'/' + item.link} component={item.component} />
                        )
                    } else {
                        return (
                            < Route key = { item.link } path = { '/' + item.link } render = {(props) => <AsyncComponent {...props} LoadAsyncComponent={item.component} />} />
                        )
                    }
        })}
                <Route component={undefinedComponent} />
            </Switch>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        </Container>
    );
}