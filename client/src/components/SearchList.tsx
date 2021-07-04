import IMovie from '../interfaces/movie';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Message from './Message';

type MovieList = {
    movies: IMovie[]
}

const SearchList: React.FC<MovieList> = props => {
    const [isLoad, setLoad] = useState(false);
    const [isValidSearch, setInvalidSearch] = useState(true)

    useEffect(() => {
        if (props.movies.length == 0) {
            setInvalidSearch(false);
        }
        setLoad(true);
    })

    if (!isLoad) {
        return <React.Fragment>Loading...</React.Fragment>
    }

    return (
        <div>
            {
                isValidSearch ? (
                    props.movies.map((movie => {
                        const movieLink = `/movies/${movie.title}`;
                        return (
                            <Movie id={movie._id} imageUrl={movie.imageUrl} movieLink={movieLink} title={movie.title} description={movie.description} isAdded={movie.isAdded} />
                        )
                    }))
                ) : (
                    <Message isActive={true} message={'Invalid search, check and try again'} />
                )
            }
        </div>
    )
}

export default SearchList;