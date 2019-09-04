import React, { Fragment, useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Axios } from '../../axios';

import axios from 'axios';
import PositionedSnackbar from '../../components/common/PositionedSnackbar';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
            height: 450,
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        titleBar: {
            background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        icon: {
            color: 'white',
        },
    })
);



export default function Favorites(props: any) {
    const classes = useStyles(props);

    const [value, setValue] = useState([]);
    const [message, setMessage] = useState('');


    useEffect(() => {
        if (!value || !value.length) {
            axios.get('http://127.0.0.1:666/pic/dataFind', { params: { type: '5aav' } })
                .then((res: any) => {
                    console.log(res);
                    setValue(res.data.address);
                })
                .catch((res: any) => {
                    console.log(res.message);
                    setMessage(res.message);
                })
        }
    }, [value]);

    return (
        <Fragment>
            <div className={classes.root}>
                <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                    {value.map((tile: any, index: number) => (
                        <GridListTile key={tile} cols={index ? 2 : 1} rows={index ? 2 : 1}>
                            <img src={tile} alt={tile.title} />
                            <GridListTileBar
                                title={index}
                                titlePosition="top"
                                actionIcon={
                                    <IconButton aria-label={`star ${index}`} className={classes.icon}>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <PositionedSnackbar messageConf={{
                vertical: 'top',
                horizontal: 'right',
                variant: 'error',
                message
            }} />
        </Fragment>
    )
}