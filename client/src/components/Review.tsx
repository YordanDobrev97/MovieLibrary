import { Rating } from '@material-ui/lab';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            margin: '5px auto',
            width: '80%',
            flexDirection: 'column',
            '& > * + *': {
                marginTop: theme.spacing(1),
            },
        },
    }),
);

const Review = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Your Review</h3>

            <Rating name="half-rating" defaultValue={0} precision={0.5} />
            <TextField
                id="filled-textarea"
                rows={5}
                label="Your private notes and comments about the movie..."
                placeholder="Your note..."
                multiline
                variant="filled"
            />
        </div>
    )
}

export default Review;