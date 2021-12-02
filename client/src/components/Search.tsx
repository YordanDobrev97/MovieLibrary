import React, { useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import Btn from './Button'

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

type SearchMovie = {
    search: (title: string) => void
}

const Search: React.FC<SearchMovie> = props => {
    const classes = useStyles()
    const [textField, setField] = useState('')

    const searchMovie = () => {
        props.search(textField)
    }

    return (
        <React.Fragment>
            <TextField label="Search movie by title..." onChange={(e) => {
                setField(e.target.value)
            }} className={classes.searcTextField} variant="outlined" size="small" />

            <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0' border='1px solid green'
                text='Search' fz='16px' w='20%' onClick={searchMovie} />
        </React.Fragment>
    )
}

export default Search