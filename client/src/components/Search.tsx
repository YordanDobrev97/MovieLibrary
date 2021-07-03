import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Btn from './Button';
import AppContext from '../context/AppContext';

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
    const [textField, setField] = useState('');
    const [isRedirect, setRedirect] = useState(false);

    const search = () => {
        setRedirect(true);
    }

    if (isRedirect) {
        window.location.href = `/search/${textField}`;
    }

    return (
        <React.Fragment>
            <AppContext.Provider value={{ setSearchField: search }}>
                <TextField label="Search movie by title..." onChange={(e) => {
                    setField(e.target.value)
                }} className={classes.searcTextField} variant="outlined" size="small" />
                <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Search' fz='16px' w='20%' onClick={search.bind(this)} />
            </AppContext.Provider>
        </React.Fragment>
    )
}

export default Search;