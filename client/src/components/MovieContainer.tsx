import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        favorites: {
            textAlign: 'center'
        },
        movies: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 'auto',
            width: '90%',
        }
    }),
);

const MovieContainer = () => {
    const classes = useStyles();

    return (
        <section>
            <h2 className={classes.favorites}>Your Favorites</h2>

            <div className={classes.movies}>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uCKVbasZH6hCAEcJ9o4Gg5RHaWl.jpg" />
                </div>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uCKVbasZH6hCAEcJ9o4Gg5RHaWl.jpg" />
                </div>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uCKVbasZH6hCAEcJ9o4Gg5RHaWl.jpg" />
                </div>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uCKVbasZH6hCAEcJ9o4Gg5RHaWl.jpg" />
                </div>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uCKVbasZH6hCAEcJ9o4Gg5RHaWl.jpg" />
                </div>
                <div>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uCKVbasZH6hCAEcJ9o4Gg5RHaWl.jpg" />
                </div>
            </div>
        </section>
    )
}

export default MovieContainer;