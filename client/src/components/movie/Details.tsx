import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import { Container, Box, Card, Alert } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import MovieService from '../../services/movie'
import FavoriteService from '../../services/favorite'
import { Favorite } from './Favorite'
import { externalImage } from '../../utils/baseImage'
import Review from './Review'
import jwtParser from '../../utils/jwtParser'
import AuthContext from '../../context/AuthContext'

const useStyles = makeStyles(() =>
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

interface Genre {
    name: string
}

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    genres: Genre[]
}

export const Details: React.FC = () => {
    const classes = useStyles()
    const params = useParams()
    const [movie, setMovie] = useState<Movie>()
    const [isLoad, setLoad] = useState<boolean>(false)
    const [isAddFavorites, addFavorites] = useState<boolean>(false)

    const [cookies] = useCookies(['jwt'])
    const context = useContext(AuthContext)

    useEffect(() => {
        const fetchMovie = async (id: number) => {
            const movie = await MovieService.getById(id)
            if (movie.id) {
                setMovie(movie)
                if (context.isAuthenticated) {
                    const jwt = cookies?.jwt
                    const { userID }  = jwtParser(jwt)
                    const isAdded = await FavoriteService.isAdded(userID, id)
                    addFavorites(!!isAdded)
                }
                setLoad(true)
            }
        }

        if (params.id) {
            fetchMovie(Number(params.id))
        }
    }, []);

    return (
        <>
            {
                isLoad ? (
                    <Container>
                        <Box className={classes.searchList}>
                            <img src={`${externalImage}/${movie?.backdrop_path}`} />
                            <div className={classes.movie}>
                                <h3>{movie?.title}</h3>
                                {movie?.genres.map((item: Genre) => <span>{item.name} | </span>)}
                                <p className={classes.description}>{movie?.overview}</p>
                                {context.isAuthenticated ? (
                                    <>
                                        <Favorite isAdded={isAddFavorites} movieId={movie?.id || 0} setAddFavorite={addFavorites} />
                                        <Review title={movie?.title || ''} />
                                    </>
                                ) : (
                                    <>
                                        <Card sx={{ minWidth: 275 }}>
                                            <Link to='/login'>Login</Link> and Add to collection
                                        </Card>
                                    </>
                                )}
                            </div>
                        </Box>
                    </Container>
                ) : (
                    <>
                        <Alert severity="info">Loading...</Alert>
                    </>
                )
            }
        </>
    )
}