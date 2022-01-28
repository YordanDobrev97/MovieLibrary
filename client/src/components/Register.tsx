import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

import UserService from '../services/user'
import { useCookies } from 'react-cookie'
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

const Register: React.FC = props => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cookies, setCookie] = useCookies(['jwt'])
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (confirmPassword !== password) {
            return null;
        }

        const token = await UserService.registerUser(username, password);
        setCookie('jwt', token)
        context.setAuthenticated(true)
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
             <TextField
                label="ConfirmPassword"
                variant="filled"
                type="password"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </form>
    )
}

export default Register;