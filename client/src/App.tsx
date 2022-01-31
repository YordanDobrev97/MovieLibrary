import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useCookies } from 'react-cookie'

import { Home } from './components/home/Home'
import { Register } from './components/auth/Register'
import { Login } from './components/auth/Login'
import { SearchPage } from './components/search/SearchPage'
import { Details } from './components/movie/Details'
import { Profile } from './components/user/Profile'
import { Navbar } from './components/home/Navbar'

import AuthContext from './context/AuthContext'

import './App.css'

const App = () => {
  const [cookies, _, remove] = useCookies(['jwt'])
  const [isAuthenticated, setAuthenticated] = useState(cookies?.jwt || false)

  const logout = () => {
    setAuthenticated(false)
    remove('jwt')
  }

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <Navbar logout={logout} />

        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/movies/:id' element={<Details />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App