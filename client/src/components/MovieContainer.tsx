import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MovieService from '../services/movie';
import { Link } from 'react-router-dom';

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

interface Movie {
    _id: string;
    title: string;
    imageUrl: string;
}

const MovieContainer = () => {
    const classes = useStyles();
    const [isLoad, setLoad] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        MovieService.getAll()
            .then(data => {
                setMovies(data);
                setLoad(true);
            });
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
        </section >
    )
}

export default MovieContainer;