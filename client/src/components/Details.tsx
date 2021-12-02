import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Review from './Review'
import MovieService from '../services/movie'
import FavoriteService from '../services/favorite'
import Message from './Message'
import Favorite from './Favorite'
import { useCookies } from 'react-cookie'
import jwtParser from '../utils/jwtParser'
import AuthContext from '../context/AuthContext'

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

type Movie = {
    _id: string;
    title: string;
    imageUrl: string;
    description: string;
}

const Details: React.FC = props => {
    const classes = useStyles()
    const params = useParams()
    const [movie, setMovie] = useState<Movie>()
    const [isLoad, setLoad] = useState(false)
    const [isAddFavorites, addFavorites] = useState(false)
    const [isActive, setActive] = useState(false)
    const [cookies] = useCookies(['jwt'])
    const context = useContext(AuthContext)

    useEffect(() => {
        const fetchMovie = async (title: string) => {
            const movie = await MovieService.getByTitle(title)
            setMovie(movie);
            const jwt = cookies?.jwt
            const { userID } = jwtParser(jwt)
            if (userID) {
                const isAdded = await FavoriteService.isAdded(userID || '', movie?._id)
                addFavorites(!!isAdded)
            }
            setLoad(true);
        }

        fetchMovie(params.title || '')
    }, []);

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
                                {context.isAuthenticated ? (
                                    <Favorite isAdded={isAddFavorites} movieId={movie?._id || ''} setAddFavorite={addFavorites} setActive={setActive} />
                                ) : (
                                    <React.Fragment></React.Fragment>
                                )}
                                <Message isActive={isActive} message='You must register or log in to your account' />
                            </div>
                        </div>
                        <Review title={movie?.title || ''} />
                    </section>
                ) : (
                    <React.Fragment>
                        <Alert severity="info">Loading...</Alert>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Details