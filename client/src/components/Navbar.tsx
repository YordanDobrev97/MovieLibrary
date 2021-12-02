import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Box, Grid, AppBar, Toolbar } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Btn from './Button'
import AuthContext from '../context/AuthContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            color: 'black'
        },
        navigation: {
            background: '#F8F9FA',
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
        }
    }),
);

const Navbar = (props: any) => {
    const classes = useStyles()
    const context = useContext(AuthContext)

    return (
        <AppBar position="static" className={classes.navigation}>
            <Grid container direction="row" justify="space-between" alignItems="baseline">
                <Toolbar className={classes.title}>
                    <Link className={classes.link} to='/'>My Movie Collection</Link>
                </Toolbar>
                <Box display='flex'>
                    {
                        context.isAuthenticated ? (
                            <React.Fragment>
                                <Link className={classes.button} to='/profile'>Profile</Link>
                                <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0'
                                    border='1px solid green' text='Logout' fz='16px' w='50%' onClick={props.logout}>Logout</Btn>
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

export default Navbar