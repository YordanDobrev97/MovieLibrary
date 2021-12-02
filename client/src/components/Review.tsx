import React, { useState, useEffect, useContext } from 'react'
import { Rating } from '@material-ui/lab'
import { Button } from '@material-ui/core'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import RatingService from '../services/rating'
import Message from './Message'
import AuthContext from '../context/AuthContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            margin: '2px 8em',
            width: '40%',
            flexDirection: 'column',
            '& > * + *': {
                marginTop: theme.spacing(1),
            },
        },
        ratingBtn: {
            border: 'none',
        },
    }),
);

type ReviewProps = {
    title: string,
}

const Review: React.FC<ReviewProps> = props => {
    const classes = useStyles()
    const [rating, setRating] = useState(0)
    const [note, setNote] = useState('')
    const [success, setSuccessValue] = useState(false)
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
        <div>
            {context.isAuthenticated ? (
                <div className={classes.root}>
                    <h3>Your Review</h3>
                    <Rating name="half-rating" value={rating} onChange={(event, newValue) => {
                        setRating(newValue || 0)
                    }} defaultValue={0} precision={1} />
                    <Message isActive={success} message='You voted successfully, thank you!' />
                    <TextField
                        id="filled-textarea"
                        rows={5}
                        label="Your private notes and comments about the movie..."
                        placeholder="Your note..."
                        multiline
                        variant="filled"
                        onChange={(e) => {
                            setNote(e.target.value);
                        }}
                    />
                    <Button onClick={addReview} variant="outlined">Send</Button>
                </div>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </div>
    )
}

export default Review