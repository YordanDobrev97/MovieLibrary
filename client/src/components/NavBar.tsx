import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, TextField, AppBar, Toolbar } from '@material-ui/core';
import Btn from './Button';

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
            <Btn bgc='white' c='green' m='0px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Search' fz='16px' onClick={() => {

            }} />
          </Box>
        </Grid>
      </AppBar>
    </div>
  );
}

export default NavBar;