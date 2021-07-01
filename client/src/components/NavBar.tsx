import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, TextField, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: 'black'
    },
    navigation: {
      background: '#F8F9FA',
    },
    searchBtn: {
      marginLeft: '6px',
      border: '1px solid green',
      color: 'green'
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
            <Button variant="outlined" className={classes.searchBtn}>
              Search
            </Button>
          </Box>
        </Grid>
      </AppBar>
    </div>
  );
}

export default NavBar;