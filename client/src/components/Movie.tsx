import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Favorite from './Favorite';

type MovieProps = {
    id: string;
    imageUrl: string;
    movieLink: string;
    title: string;
    description: string;
    isAdded: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchList: {
            display: 'flex',
            margin: '50px 120px'
        },
        movie: {
            margin: '0px 30px',
        },
        description: {
            maxWidth: '55em'
        }
    }),
);

const Movie: React.FC<MovieProps> = props => {
    const classes = useStyles();
    const [isAddFavorites, addFavorites] = useState(false);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        if (props.isAdded) {
            addFavorites(props.isAdded);
        }
    })

    return (
        <div className={classes.searchList}>
            <img src={props.imageUrl} />
            <div className={classes.movie}>
                <h3>
                    <Link to={props.movieLink}>{props.title}</Link>
                </h3>
                <p className={classes.description}>{props.description}</p>
                <Favorite isAdded={isAddFavorites} movieId={props.id} setAddFavorite={addFavorites} setActive={setActive} />
            </div>
        </div>
    )
}

export default Movie;