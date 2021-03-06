import React, { useState } from 'react';

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
    CssBaseline,
    makeStyles,
    useTheme,
    Theme,
    createStyles,
} from '@material-ui/core';
import { BrowserRouter as Router } from "react-router-dom";

import appHeaderBar from './components/AppHeaderBar';
import container from './components/Container';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
    }),
);


export default function app() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Router>
                {appHeaderBar()}
                {container()}
            </Router>
        </div>
    );
}