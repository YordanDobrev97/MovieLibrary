import React from 'react'
import {
    Container,
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button
} from '@material-ui/core'

import { Alert } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import UserService from '../services/user'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import jwtParser from '../utils/jwtParser'

type UserMovie = {
    title: string;
    imageUrl: string
}

const Profile: React.FC = props => {
    const [load, setLoad] = useState(false)
    const [movies, setMovies] = useState([])
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

    return (
        <Container maxWidth="sm">
            <h2>My Movies</h2>

            {load ? (
                <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {movies && movies.map((movie: UserMovie) => {
                        return (
                            <Card style={{ maxWidth: '200px', minWidth: '200px', margin: '3px 10px' }}>
                                <CardMedia width='200' component='img' image={movie?.imageUrl} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie?.title}
                                    </Typography>

                                    <Link to={`/movies/${movie.title}`}>
                                        <Button variant="outlined">Details</Button>
                                    </Link>
                                </CardContent>
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

export default Profile