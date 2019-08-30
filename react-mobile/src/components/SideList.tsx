import React, { useState, Fragment } from 'react';

// icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {
    // Link,
    ListItemText,
    ListItemIcon,
    ListItem,
    List,
    makeStyles,
    useTheme,
    Theme,
    createStyles
} from '@material-ui/core';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { RouterList } from '../router';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        selected: {
            backgroundColor: 'rgba(0, 0, 0, 0.14)',
            color: 'red'
        },
        link: {
            textDecoration: 'none',
        },
    }),
);
type DrawerSide = 'top' | 'left' | 'bottom' | 'right';

export default function sideList(props: any) {
    const side: DrawerSide = props.type;
    const toggleDrawer = props.toggleDrawerFun;
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Fragment>
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(side, false)}
                onKeyDown={toggleDrawer(side, false)}
            >
                <List>
                    {RouterList.linkArr.map((item, index) => (
                        <NavLink to={'/' + item.link} key={item.link} className={classes.link} activeClassName={classes.selected}>
                            <ListItem button>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </NavLink>
                    ))}
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
                </List>
                {/* <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
            </div>
        </Fragment>
    )
}