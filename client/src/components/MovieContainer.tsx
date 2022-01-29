import React, { useState, useEffect } from 'react'

import { Container, Grid, Theme } from '@mui/material'
import {makeStyles, createStyles}  from '@mui/styles'
import MovieService from '../services/movie'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        favorites: {
            textAlign: 'center'
        },
        movies: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            margin: 'auto',
            width: '80%',
        }
    }),
);

interface Movie {
    title: string;
    backdrop_path: string;
}

const MovieContainer = () => {
    const classes = useStyles()
    const [isLoad, setLoad] = useState(false)
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMovie = async () => {
            const movies = await MovieService.getAll()
            console.log(movies)
            setMovies(movies.results)
            setLoad(true)
        }
        fetchMovie()
    }, []);
    return (
        <section>
            <h2 className={classes.favorites}>Your Favorites</h2>
            {
                isLoad ? (
                    <Grid className={classes.movies} container sx={{ maxWidth:'80%'  }}>
                        {movies.map((movie) => {
                            const movieLink = `/movies/${movie.title}`
                            const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                            return (
                                <Grid key={movie.title} item xs={3}>
                                    <Link to={movieLink}>
                                        <img style={{height: '200px'}} src={imageUrl} />
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </section>
    )
}

export default MovieContainer