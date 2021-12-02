import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Favorite from './Favorite';

type MovieProps = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchList: {
            display: 'flex',
            margin: '50px 120px'
        },
        movie: {
            margin: '0px',
            display: 'flex',
            flexDirection: 'column'
        },
        description: {
            maxWidth: '55em'
        },
        a: {
            textAlign: 'center'
        }
    }),
);

const Movie: React.FC<MovieProps> = props => {
    const classes = useStyles();
    return (
        <div className={classes.searchList}>
            <div className={classes.movie}>
                <Link to={`/movies/${props?.title}`}>{props?.title}</Link>
                <img src={props?.imageUrl} />
            </div>
        </div>
    )
}

export default Movie;