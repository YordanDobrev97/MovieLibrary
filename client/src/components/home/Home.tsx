import React from 'react'
import { Heading } from './Heading'
import { MovieContainer } from '../movie/MovieContainer'

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Heading />
            <MovieContainer />
        </React.Fragment>
    )
}