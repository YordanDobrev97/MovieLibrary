import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Btn from './Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        registerSection: {
            margin: '15px auto',
            width: '50%',
            background: '#f7f7f7',
            padding: '20px'
        },
        row: {
            margin: '18px auto',
            width: '30%',
        },
        input: {
            borderRadius: '10px',
            padding: '10px 5px'
        },
        button: {
            background: 'white',
            color: 'blue',
            margin: '7px auto',
            width: '80%',
            padding: '9px',
            borderRadius: '15px',
            border: '1px solid blue',
            fontSize: '16px',
            textDecoration: 'none'
        }
    }),
);


const Register = () => {
    const classes = useStyles();

    return (
        <section className={classes.registerSection}>
            <div className={classes.row}>
                <input className={classes.input} type="text" placeholder="Username" />
            </div>

            <div className={classes.row}>
                <input className={classes.input} type="password" placeholder="Password" />
            </div>

            <div className={classes.row}>
                <input className={classes.input} type="password" placeholder="Confirm Password" />
            </div>

            <div className={classes.row}>
                <Btn bgc='white' c='blue' m='0px 7px 0px 11px' p='9px' br='18px' border='1px solid blue' text='Register' fz='16px' w='80%' onClick={() => {
                }} />
            </div>
        </section>
    )
}

export default Register;