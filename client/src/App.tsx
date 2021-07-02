import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, TextField, AppBar, Toolbar } from '@material-ui/core';
import Btn from './components/Button';

import Heading from './components/Heading';
import MovieContainer from './components/MovieContainer';
import Register from './components/Register';
import Login from './components/Login';

import './App.css';

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

const App = () => {
  const classes = useStyles();

  const logout = () => {
    localStorage.removeItem('uid');
    window.location.href = "/"
  }

  return (
    <Router>
      <AppBar position="static" className={classes.navigation}>
        <Grid container direction="row" justify="space-between" alignItems="baseline">
          <Toolbar className={classes.title}>
            <Link className={classes.link} to='/'>My Movie Collection</Link>
          </Toolbar>
          <Box display='flex'>
            <TextField label="Search movie by title..." className={classes.searcTextField} variant="outlined" size="small" />
            <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Search' fz='16px' w='20%' onClick={() => {
            }} />

            {
              localStorage.getItem('uid') ? (
                <React.Fragment>
                  <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Logout' fz='16px' w='20%' onClick={logout.bind(this)}>Logout</Btn>
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

      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />

        <Route exact path='/'>
          <Heading heading='Heading' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua' />
          <MovieContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
