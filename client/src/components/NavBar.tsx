import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, TextField, AppBar, Toolbar } from '@material-ui/core';
import Btn from './Button';

import Heading from './Heading';
import MovieContainer from './MovieContainer';
import Register from './Register';

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
    }
  }),
);

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.navigation}>
        <Grid container direction="row" justify="space-between" alignItems="baseline">
          <Toolbar className={classes.title}>My Movie Collection</Toolbar>
          <Box>
            <TextField label="Search movie by title..." className={classes.searcTextField} variant="outlined" size="small" />
          </Box>
        </Grid>
      </AppBar>
    </div>
  );
}

export default NavBar;