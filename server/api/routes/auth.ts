import express, { Request, Response, Router } from 'express'
import UserService from '../services/user'

const router: Router = express.Router()

router.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body
    const token = await UserService.register(username, password)
    res.json(token)
})

router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body
    const token = await UserService.login(username, password)
    res.json(token)
})

export default router