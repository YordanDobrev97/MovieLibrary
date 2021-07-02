import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, TextField } from '@material-ui/core';
import Btn from './Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searcTextField: {
            marginLeft: '45px',
        },
        headingSearchBtn: {
            marginLeft: '50px',
        }
    }),
);


const Search = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TextField label="Search movie by title..." className={classes.searcTextField} variant="outlined" size="small" />
            <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Search' fz='16px' w='20%' onClick={() => {
            }} />
        </React.Fragment>
    )
}

export default Search;