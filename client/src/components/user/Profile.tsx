import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import {
    Container,
    Box,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Alert,
} from '@mui/material'

import UserService from '../../services/user'
import jwtParser from '../../utils/jwtParser'

type UserMovie = {
    title: string;
    imageUrl: string
}

export const Profile: React.FC = () => {
    const [load, setLoad] = useState<boolean | null>(false)
    const [movies, setMovies] = useState<UserMovie[] | []>([])
    const [cookies] = useCookies(['jwt'])

    useEffect(() => {
        const fetchMovies = async () => {
            const { userID } = jwtParser(cookies?.jwt)
            if (userID) {
                const resMovies = await UserService.favoriteMovies(userID)
                setMovies(resMovies)
                setLoad(true)
            }
        }

        fetchMovies()
    }, [])

    if (load && movies.length === 0) {
        return <Alert variant="outlined" severity="info">No movies added</Alert>
    }

    return (
        <Container maxWidth="lg">
            <h2>My Favorite Movies</h2>

            {load ? (
                <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {movies && movies.map((movie) => {
                        return (
                            <Card key={movie.title} style={{ maxWidth: '200px', minWidth: '200px', margin: '3px 10px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={movie.imageUrl}
                                    alt="movie"
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie?.title}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Link to={`/movies/${movie.title}`}>
                                        <Button variant="outlined">Details</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        )
                    })}
                </Box>
            ) : (
                <React.Fragment>
                    <Alert severity="info">Loading...</Alert>
                </React.Fragment>
            )}
        </Container>
    )
}