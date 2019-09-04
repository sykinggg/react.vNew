import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme, createStyles } from '@material-ui/core';

import axios from 'axios';

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            maxWidth: '30%',
            margin: theme.spacing(1),
            float: 'left',
        }
    })
);



export default function Favorites(props: any) {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [value, setValue] = useState([]);


    useEffect(() => {
        if (!value || !value.length) {
            axios.get('http://127.0.0.1:666/pic/dataFind', { params: { type: '5aav' } })
                .then((res: any) => {
                    console.log(res);
                    setValue(res.data.address);
                })
        }
    }, [value]);

    return (
        <Fragment>
            {
                value.map((item: any) => {
                    return (
                        <Card key={item} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={item || 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}