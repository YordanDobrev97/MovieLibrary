import IMovie from '../interfaces/movie';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';

type MovieList = {
    movies: IMovie[]
}

const SearchList: React.FC<MovieList> = props => {
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
                        <Movie id={movie._id} imageUrl={movie.imageUrl} movieLink={movieLink} title={movie.title} description={movie.description} isAdded={movie.isAdded} />
                    )
                }))
            }
        </div>
    )
}

export default SearchList;