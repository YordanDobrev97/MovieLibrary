import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Btn from './Button';

const useStyles = makeStyles((theme: Theme) =>
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
        }
    }),
);

type HeadingProps = {
    heading: string;
    description: string;
}

const Heading: React.FunctionComponent<HeadingProps> = props => {
    const classes = useStyles();

    return (
        <section id="heading-section" className={classes.headingSection}>
            <h1 className={classes.heading}>{props.heading}</h1>
            <p className={classes.description}>{props.description}</p>
            <Btn bgc="#0057D8" c='white' m='3px 50px' p='7px 15px' fz='17px' text='Search' br='10px' border='2px solid black' onClick={() => {

            }} />
        </section>
    )
}

export default Heading;