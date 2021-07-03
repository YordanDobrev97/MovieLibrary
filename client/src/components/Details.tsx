import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Btn from './Button';
import Review from './Review';
import MovieService from '../services/movie';
import FavoriteService from '../services/favorite';
import Message from './Message';

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

type TParams = { title: string };

type Movie = {
    _id: string;
    title: string;
    imageUrl: string;
    description: string;
}

const getUserId = () => {
    const uid = localStorage.getItem('uid');
    const userId = parseJwt(uid || '');
    return userId ? userId['userID'] : '';
}

const Details = ({ match }: RouteComponentProps<TParams>) => {
    const classes = useStyles();

    const title = match.params.title;
    const [movie, setMovie] = useState<Movie>();
    const [isLoad, setLoad] = useState(false);
    const [isAddFavorites, addFavorites] = useState(false);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        MovieService.getByTitle(title)
            .then(movie => {
                setMovie(movie);
                if (getUserId()) {
                    FavoriteService.isAdded(getUserId() || '', movie?._id || '')
                        .then(result => {
                            addFavorites(result);
                        });
                }
                setLoad(true);
            });
    }, [movie, isAddFavorites]);

    const addFavorite = () => {
        const uid = localStorage.getItem('uid');
        if (uid) {
            const userId = parseJwt(uid);
            const movieId = movie?._id || '';

            FavoriteService.add(userId['userID'], movieId)
                .then(result => {
                    addFavorites(result); // result is boolean value
                })
        } else {
            setActive(true);
        }
    }

    return (
        <React.Fragment>
            {
                isLoad ? (
                    <section>
                        <div className={classes.searchList}>
                            <img src={movie?.imageUrl} />
                            <div className={classes.movie}>
                                <h3>{movie?.title}</h3>
                                <p className={classes.description}>{movie?.description}</p>
                                {
                                    isAddFavorites ? (
                                        <Btn bgc='white' c='red' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid red' text='Remove From Favorites' fz='16px' w='30%' onClick={addFavorite.bind(this)} />
                                    ) : (
                                        <Btn bgc='white' c='green' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Add to favorites' fz='16px' w='30%' onClick={addFavorite.bind(this)} />
                                    )
                                }
                                <Message isActive={isActive} message='You must register or log in to your account' />
                            </div>
                        </div>
                        <Review title={movie?.title || ''} />
                    </section>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </React.Fragment>
    )
}

function parseJwt(token: string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export default Details;