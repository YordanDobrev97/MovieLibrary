import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Grid } from '@mui/material'
import {makeStyles, createStyles}  from '@mui/styles'

import MovieService from '../../services/movie'
import { externalImage } from '../../utils/baseImage'

const useStyles = makeStyles(() =>
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
    id: number;
    backdrop_path: string;
}

export const MovieContainer = () => {
    const classes = useStyles()
    const [isLoad, setLoad] = useState<boolean>(false)
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMovie = async () => {
            const movies = await MovieService.getAll()
            setMovies(movies.results)
            setLoad(true)
        }
        fetchMovie()
    }, []);
    return (
        <section>
            <h2 className={classes.favorites}>Popular Movies</h2>
            {
                isLoad && (
                    <Grid className={classes.movies} container sx={{ maxWidth:'80%'  }}>
                        {movies && movies.map((movie) => {
                            return (
                                <Grid key={movie.id} item xs={3}>
                                    <Link to={ `/movies/${movie.id}`}>
                                        <img style={{height: '200px'}} src={`${externalImage}/${movie.backdrop_path}`} />
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            }
        </section>
    )
}