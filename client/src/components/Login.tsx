import { useState, useContext } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

import UserService from '../services/user'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['jwt'])
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const token: string = await UserService.loginUser(username, password)
        context.setAuthenticated(true)
        setCookie("jwt", token)
        navigate('/')
    }
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Username"
                variant="filled"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Sign in
                </Button>
            </div>
        </form>
    )
}

export default Login;