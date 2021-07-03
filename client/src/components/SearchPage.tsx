import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from "react-router-dom";
import Search from './Search';
import SearchList from './SearchList';
import IMovie from '../interfaces/movie';
import MovieService from '../services/movie';
import FavoriteService from '../services/favorite';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchHeading: {
            textAlign: 'center',
        },
        searchPage: {
            margin: '20px auto',
            width: '30%',
        },
        loading: {
            margin: '4px 12px',
            padding: '4px 8px',
            background: 'green',
            color: 'white',
            textAlign: 'center'
        }
    }),
);

const getUserId = () => {
    const uid = localStorage.getItem('uid');
    const userId = parseJwt(uid || '');
    return userId['userID'];
}

function parseJwt(token: string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

type TParams = { title: string };

const SearchPage = ({ match }: RouteComponentProps<TParams>) => {
    const classes = useStyles();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        const { title } = match.params;

        if (!title) {
            MovieService.getAll()
                .then(async (data) => {
                    // I need to think about how to optimize it ?
                    let result = [];
                    for (const movie of data) {
                        const isAdded = await FavoriteService.isAdded(getUserId(), movie._id);
                        result.push({ ...movie, isAdded })
                    }
                    setMovies(result);
                    setLoad(true);
                })
        } else {
            MovieService.getByTitle(title)
                .then(data => {
                    setMovies([data]);
                    setLoad(true);
                })
        }
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
                    <div className={classes.loading}>Loading...</div>
                )
            }
        </section>
    )
}

export default SearchPage;