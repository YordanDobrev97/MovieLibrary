import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import SearchList from './SearchList';
import IMovie from '../interfaces/movie';
import MovieService from '../services/movie';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchHeading: {
            textAlign: 'center',
        },
        searchPage: {
            margin: '20px auto',
            width: '30%',
        }
    }),
);

const SearchPage = () => {
    const classes = useStyles();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        MovieService.getAll()
            .then(data => {
                setMovies(data);
                setLoad(true);
            });
    }, []);

    return (
        <section>
            <article className={classes.searchPage}>
                <h2 className={classes.searchHeading}>Search</h2>
                <Search />
            </article>
            {
                isLoad ? (
                    <SearchList movies={movies} />
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </section>
    )
}

export default SearchPage;