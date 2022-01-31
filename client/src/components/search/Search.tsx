import React, { useState, useEffect } from 'react'

import { TextField, Button } from '@mui/material'

interface SearchMovie {
    search: (title: string) => void
}

export const Search: React.FC<SearchMovie> = props => {
    const [textField, setField] = useState<string>('')

    useEffect(() => {
        props.search(textField)
    }, [textField])

    return (
        <>
            <TextField label="Search movie by title..." onChange={(e) => {
                setField(e.target.value)
            }} variant="outlined" size="small" />

            <Button variant="outlined" size="medium" color="success">Search</Button>
        </>
    )
}