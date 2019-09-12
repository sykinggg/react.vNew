import React, { Fragment } from 'react';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(8),
            right: theme.spacing(2),
        },
        fabGreen: {
            color: theme.palette.common.white,
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[600],
            },
        },
    }),
);

export interface IFixedButtonProps {
    clickFun: any;
}

export default function FixedButton(props: any) {
    const classes = useStyles(props);
    const theme = useTheme();
    return (
        <Fragment>
            <div className={classes.root}>
                <Fab aria-label={'Add'} onClick={props.clickFun} className={classes.fab} color={'primary' as 'primary'}>
                    {<AddIcon />}
                </Fab>
            </div>
        </Fragment>
    )
}