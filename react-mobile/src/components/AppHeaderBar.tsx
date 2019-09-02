import React, { useState } from 'react';
import clsx from 'clsx';
// icons
import MenuIcon from '@material-ui/icons/Menu';

import {
    IconButton,
    Typography,
    Toolbar,
    AppBar,
    makeStyles,
    useTheme,
    Theme,
    createStyles,
    SwipeableDrawer
} from '@material-ui/core';

import sideList from './SideList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
    }),
);

export default function appHeaderBar() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: false,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer('left', true)}
                    edge="start"
                    className={clsx(classes.menuButton, false && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                {/* <Button onClick={toggleDrawer('left', true)}>Open Left drawer</Button>
                <Button onClick={toggleDrawer('right', true)}>Open Right drawer</Button>
                <Button onClick={toggleDrawer('top', true)}>Open Top drawer</Button>
                <Button onClick={toggleDrawer('bottom', true)}>Open Bottom drawer</Button> */}
                <SwipeableDrawer
                    open={state.left}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {sideList({
                        type: 'left',
                        toggleDrawerFun: toggleDrawer
                    })}
                </SwipeableDrawer>
                {/* <SwipeableDrawer
                    anchor="top"
                    open={state.top}
                    onClose={toggleDrawer('top', false)}
                    onOpen={toggleDrawer('top', true)}
                >
                    {fullList('top')}
                </SwipeableDrawer>
                <SwipeableDrawer
                    anchor="bottom"
                    open={state.bottom}
                    onClose={toggleDrawer('bottom', false)}
                    onOpen={toggleDrawer('bottom', true)}
                >
                    {fullList('bottom')}
                </SwipeableDrawer>
                <SwipeableDrawer
                    anchor="right"
                    open={state.right}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {sideList('right')}
                </SwipeableDrawer> */}
                <Typography variant="h6" noWrap>
                    sideList状态：{JSON.stringify(state.left)}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}