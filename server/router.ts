import express from 'express'
const router = express.Router()
import Auth from './api/routes/auth'
import Movie from './api/routes/movie'
import User from './api/routes/user'

router.use('/api/auth', Auth)
router.use('/api/movies', Movie)
router.use('/api/user', User)

export default router