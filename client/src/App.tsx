import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import SearchPage from './components/SearchPage'
import Details from './components/Details'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import AuthContext from './context/AuthContext'
import { useCookies } from 'react-cookie'

import './App.css'

const App = () => {
  const [cookies] = useCookies(['jwt'])
  const [isAuthenticated, setAuthenticated] = useState(cookies?.jwt || false)

  const logout = () => {
    setAuthenticated(false)
  }

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <Navbar logout={logout.bind(this)} />

        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/movies/:title' element={<Details />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App
