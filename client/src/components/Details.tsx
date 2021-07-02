import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Btn from './Button';
import Review from './Review';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchList: {
            display: 'flex',
            margin: '50px 120px'
        },
        movie: {
            margin: '0px 30px',
        },
        description: {
            maxWidth: '55em'
        }
    }),
);

type TParams = { title: string };

type Movie = {
    title: string;
    imageUrl: string;
    description: string;
}

const Details = ({ match }: RouteComponentProps<TParams>) => {
    const classes = useStyles();

    const title = match.params.title;
    const [movie, setMovie] = useState<Movie>();
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/movies/${title}`)
            .then(r => r.json())
            .then(data => {
                setMovie(data);
                setLoad(true);
            })
    }, []);

    return (
        <React.Fragment>
            {
                isLoad ? (
                    <section>
                        <div className={classes.searchList}>
                            <img src={movie?.imageUrl} />

                            <div className={classes.movie}>
                                <h3>{movie?.title}</h3>
                                <p className={classes.description}>{movie?.description}</p>
                                <Btn bgc='white' c='green' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Add to favorites' fz='16px' w='30%' onClick={() => {
                                }} />
                            </div>
                        </div>
                        <Review />
                    </section>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Details;