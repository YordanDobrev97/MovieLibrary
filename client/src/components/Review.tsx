import { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RatingService from '../services/rating';
import Message from './Message';

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
    const classes = useStyles();
    const [isVote, setVote] = useState(false);
    const [rating, setRating] = useState(0);
    const [note, setNote] = useState('');
    const [success, setSuccessValue] = useState(false);

    useEffect(() => {
        RatingService.getAll(props.title)
            .then(result => {
                if (result) {
                    setRating(result.rating / 5)
                }
            })
    }, []);

    if (isVote && note) {
        RatingService
            .addRating(rating, note, props.title)
            .then(result => {
                if (result) {
                    setRating(0);
                    setNote('');
                    setSuccessValue(true);
                }
            })
    }

    return (
        <div className={classes.root}>
            <h3>Your Review</h3>
            <Rating name="half-rating" value={rating} onChange={(event, newValue) => {
                setRating(newValue || 0);
                setVote(true);
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
        </div>
    )
}

export default Review;