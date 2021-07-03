import Btn from './Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IMovie from '../interfaces/movie';
import React, { useEffect, useState } from 'react';

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

type MovieList = {
    movies: IMovie[]
}

const SearchList: React.FC<MovieList> = props => {
    const classes = useStyles();
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    })

    if (!isLoad) {
        return <React.Fragment>Loading...</React.Fragment>
    }

    return (
        <div>
            {
                props.movies.map((movie => {
                    const movieLink = `/movies/${movie.title}`;
                    return (
                        <div className={classes.searchList}>
                            <img src={movie.imageUrl} />

                            <div className={classes.movie}>
                                <h3>
                                    <Link to={movieLink}>{movie.title}</Link>
                                </h3>
                                <p className={classes.description}>{movie.description}</p>
                                {
                                    movie.isAdded ? (
                                        <Btn bgc='white' c='red' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid red' text='Remove From Favorites' fz='16px' w='30%' onClick={() => {
                                        }} />
                                    ) : (
                                        <Btn bgc='white' c='green' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Add to favorites' fz='16px' w='30%' onClick={() => {
                                        }} />
                                    )
                                }
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default SearchList;