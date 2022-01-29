import React, { useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'
import Search from './Search'
import IMovie from '../interfaces/movie'
import MovieService from '../services/movie'
import Movie from './Movie'

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

const SearchPage: React.FC = props => {
    const classes = useStyles()
    const [movie, setMovie] = useState<IMovie>()
    const [searchInvalid, setSearchInvalid] = useState(false)

    const search = async (title: string) => {
        const movie = await MovieService.getByTitle(title)
        if (movie) {
            setMovie(movie)
        } else {
            setSearchInvalid(true)
        }
    }

    return (
        <section>
            <article className={classes.searchPage}>
                <h2 className={classes.searchHeading}>Search</h2>
                <Search search={search} />

                {/* {movie ? (
                    <Movie id={movie?._id || ''} imageUrl={movie?.imageUrl || ''}
                        title={movie?.title || ''} description={movie?.description || ''} />
                ) : (
                    <React.Fragment>
                        {searchInvalid ? (
                            <Alert severity="error">Invalid searching...</Alert>
                        ) : (
                            <React.Fragment></React.Fragment>
                        )}
                    </React.Fragment>
                )} */}
            </article>
        </section>
    )
}

export default SearchPage