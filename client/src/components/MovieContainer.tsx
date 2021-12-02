import React, { useState, useEffect } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import MovieService from '../services/movie'
import { Link } from 'react-router-dom'
import IMovie from '../interfaces/movie'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        favorites: {
            textAlign: 'center'
        },
        movies: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 'auto',
            width: '90%',
        }
    }),
);

const MovieContainer = () => {
    const classes = useStyles()
    const [isLoad, setLoad] = useState(false)
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        const fetchMovie = async () => {
            const movies = await MovieService.getAll()
            setMovies(movies)
            setLoad(true)
        }
        fetchMovie()
    }, []);
    return (
        <section>
            <h2 className={classes.favorites}>Your Favorites</h2>
            {
                isLoad ? (
                    <div className={classes.movies}>
                        {movies.map((movie) => {
                            const movieLink = `/movies/${movie.title}`;
                            return (
                                <div key={movie._id}>
                                    <Link to={movieLink}>
                                        <img src={movie.imageUrl} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </section>
    )
}

export default MovieContainer