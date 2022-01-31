import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { Box, Grid, AppBar, Toolbar, Button } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import AuthContext from '../../context/AuthContext'

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            color: 'black'
        },
        navigation: {
            background: '#FBF8F1',
        },
        searcTextField: {
            marginLeft: '45px',
        },
        link: {
            textDecoration: 'none'
        },
        button: {
            background: 'white',
            color: 'blue',
            margin: '0px 7px 0px 11px',
            padding: '9px',
            borderRadius: '15px',
            border: '1px solid blue',
            fontSize: '16px',
            textDecoration: 'none'
        },
        grid: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "baseline",
            background: 'whitesmoke'
        }
    }),
);

interface NavbarProps {
    logout: () => void
}

export const Navbar: React.FC<NavbarProps> = ({logout}: NavbarProps) => {
    const classes = useStyles()
    const context = useContext(AuthContext)

    return (
        <AppBar position="static" className={classes.navigation}>
            <Grid container className={classes.grid}>
                <Toolbar className={classes.title}>
                    <Link className={classes.link} to='/'>My Movie Collection</Link>
                </Toolbar>
                <Box display='flex'>
                    {
                        context.isAuthenticated ? (
                            <React.Fragment>
                                <Link className={classes.button} to='/profile'>Profile</Link>
                                <Button onClick={logout}>Logout</Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Link className={classes.button} to='/login'>Login</Link>
                                <Link className={classes.button} to='/register'>Register</Link>
                            </React.Fragment>
                        )
                    }
                </Box>
            </Grid>
        </AppBar>
    )
}