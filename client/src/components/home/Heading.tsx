import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() =>
    createStyles({
        headingSection: {
            background: '#F5F5F5',
            height: '300px',
            border: '1px solid black'
        },
        heading: {
            margin: '80px 0 -20px 50px',
            fontSize: '28px',
            color: 'white'
        },
        description: {
            marginLeft: '50px',
            marginTop: '30px',
            maxWidth: '33%',
            fontSize: '18px',
            color: 'white',
        },
        headingSearchBtn: {
            marginLeft: '50px',
        },
        searchLink: {
            background: '#0057D8',
            width: '10%',
            color: 'white',
            margin: '3px 50px',
            padding: '7px 15px',
            fontSize: '17px',
            border: '2px solid black',
            borderRadius: '20px',
            textDecoration: 'none',
        }
    }),
);

export const Heading: React.FC = () => {
    const classes = useStyles()

    return (
        <section id="heading-section" className={classes.headingSection}>
            <h1 className={classes.heading}>Heading</h1>
            <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Link className={classes.searchLink} to='/search'>Search</Link>
        </section>
    )
}