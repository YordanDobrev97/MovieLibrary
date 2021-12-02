import React from 'react'
import Heading from './Heading'
import MovieContainer from './MovieContainer'

const Home: React.FC = props => {
    return (
        <React.Fragment>
            <Heading heading='Heading' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua' />
            <MovieContainer />
        </React.Fragment>
    )
}

export default Home