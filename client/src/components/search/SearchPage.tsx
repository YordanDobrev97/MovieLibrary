import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { createStyles, makeStyles } from '@mui/styles'
import { Card, CardMedia, Alert } from '@mui/material'

import { Search } from './Search'
import MovieService from '../../services/movie'
import { externalImage } from '../../utils/baseImage'

const useStyles = makeStyles(() =>
    createStyles({
        searchHeading: {
            textAlign: 'center',
        },
        searchPage: {
            margin: '20px auto',
            width: '30%',
        },
        card: {
            maxWidth: 300,
            margin: "100px",
            transition: "0.3s",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
                boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
            }
        },
        media: {
            paddingTop: "56.25%"
        },
    }),
);

interface Movie {
    id: number;
    backdrop_path: string;
}

export const SearchPage: React.FC = () => {
    const classes = useStyles()
    const [movies, setMovies] = useState<Movie[]>([])
    const [searchInvalid, setSearchInvalid] = useState(false)

    const search = async (title: string) => {
        const moviesRes = await MovieService.searchByTitle(title)
        if (moviesRes.results) {
            setMovies(moviesRes.results)
            setSearchInvalid(false)
        } else {
            if (title) {
                setSearchInvalid(true)
            } else {
                setMovies([])
            }
        }
    }

    return (
        <article className={classes.searchPage}>
            <h2 className={classes.searchHeading}>Search</h2>
            <Search search={search} />

            {
                searchInvalid ? (
                    <Alert>Invalid title</Alert>
                ) : (
                    movies && movies.map(movie => {
                        return (
                            <Card key={movie.id} className={classes.card}>
                                <Link to={`/movies/${movie.id}`}>
                                    <CardMedia
                                        className={classes.media}
                                        image={`${externalImage}/${movie.backdrop_path}`}
                                    />
                                </Link>
                            </Card>
                        )
                    })
                )
            }
        </article>
    )
}