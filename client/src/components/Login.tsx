import { useState, useContext } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Btn from './Button';
import UserService from '../services/user'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

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


const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['jwt'])
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const login = async () => {
        const token: string = await UserService.loginUser(username, password)
        context.setAuthenticated(true)
        setCookie("jwt", token)
        navigate('/')
    }
    return (
        <section className={classes.registerSection}>
            <div className={classes.row}>
                <input className={classes.input} type="text" placeholder="Username" onChange={(e) => {
                    setUsername(e.target.value);
                }} />
            </div>

            <div className={classes.row}>
                <input className={classes.input} type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }} />
            </div>

            <div className={classes.row}>
                <Btn bgc='white' c='blue' m='0px 7px 0px 11px' p='9px' br='18px' border='1px solid blue' text='Login' fz='16px' w='80%' onClick={login.bind(this)} />
            </div>
        </section>
    )
}

export default Login;