import { createContext } from 'react'

const AuthContext = createContext({
    isAuthenticated: false,
    setAuthenticated: (value: boolean) => { }
})
export default AuthContext
