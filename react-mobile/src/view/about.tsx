import React, {SetStateAction, useState, useEffect, Fragment} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Container, Box, createStyles } from '@material-ui/core';

import { RouterList } from './aboutViews/About.router';
import { NavLink, Router, Route, Switch } from 'react-router-dom';

import undefinedComponent from '../components/404';
import AsyncComponent from '../components/common/AsyncComponent';

const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            overflow: 'hidden',
            height: '100%',
            position: 'absolute',
            left: '0px',
            right: '0px',
            width: '100%',
            paddingTop: '64px',
            paddingBottom: '64px',
            bottom: '0px'
        },
        bottomNavigation: {
            position: 'fixed',
            left: '0px',
            right: '0px',
            bottom: '0px'
        },
        container: {
            padding: theme.spacing(1),
            overflowY: 'auto',
            height: '100%'
        }
    })
);

export default function About(props: any) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [value, setValue] = useState(location && location.pathname);

    function aboutRouterHandle(event: any, newValue: SetStateAction<string>) {
        setValue(newValue);
        props && props.history && props.history.push(newValue);
    }

    return (
        <Fragment>
            <Container className={classes.root}>
                <Box className={classes.container}>
                    <Switch>
                        <Route path="/" render={() => <AsyncComponent LoadAsyncComponent={RouterList.linkArr[0].component} />} exact />
                        {/* <Redirect from='/' to={'/' + RouterList.linkArr[0].link} exact={exact} /> */}
                        {RouterList.linkArr.map((item, i) => {
                            return (
                                <Route key={item.link} render={() => <AsyncComponent LoadAsyncComponent={item.component} />} path={item.link} />
                                // <React.Suspense key={item.link} fallback={null}>
                                //     <Route path="/" render={() => <AsyncComponent LoadAsyncComponent={item.component} />} exact />
                                // </React.Suspense>
                            )
                        })}
                        <Route component={undefinedComponent} />
                    </Switch>
                </Box>
                <BottomNavigation
                    value={location && location.pathname}
                    onChange={aboutRouterHandle}
                    className={classes.bottomNavigation}
                >
                    {RouterList.linkArr.map((item: any, index: number) => {
                        return (
                            <BottomNavigationAction value={item.link} key={item.link} label={item.name} icon={<item.icon />} >
                                {/* <NavLink to={'/' + item.link} key={item.link} ></NavLink> */}
                            </BottomNavigationAction>
                        )
                    })}
                </BottomNavigation>
            </Container>
        </Fragment>
    )
}