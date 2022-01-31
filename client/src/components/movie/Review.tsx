import React, { useState, useEffect, useContext } from 'react'

import { Container, Box, Button, Rating, TextField, Alert } from '@mui/material'

import RatingService from '../../services/rating'
import AuthContext from '../../context/AuthContext'

interface ReviewProps {
    title: string,
}

const Review: React.FC<ReviewProps> = props => {
    const [rating, setRating] = useState<number>(0)
    const [note, setNote] = useState<string>('')
    const [success, setSuccessValue] = useState<boolean>(false)
    const context = useContext(AuthContext)

    useEffect(() => {
        const fetchReviews = async () => {
            const resRating = await RatingService.getAll(props.title)
            setRating(resRating.rating / 5)
        }

        fetchReviews()
    }, []);

    const addReview = async () => {
        const response = await RatingService.addRating(rating, note, props.title)
        if (response === 'Your note was successfully added') {
            setSuccessValue(true)
        }
    }

    return (
        <Container>
            {context.isAuthenticated && (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Your Review</h3>
                    <Rating name="half-rating" value={rating} onChange={(event, newValue) => {
                        setRating(newValue || 0)
                    }} defaultValue={0} precision={1} />
                    {success && (<Alert>Successfully vote</Alert>)}
                    <TextField
                        id="filled-textarea"
                        rows={5}
                        placeholder="Your note..."
                        multiline
                        variant="filled"
                        onChange={(e) => {
                            setNote(e.target.value);
                        }}
                    />
                    <Button onClick={addReview} variant="contained">Send</Button>
                </Box>)}
        </Container>
    )
}

export default Review