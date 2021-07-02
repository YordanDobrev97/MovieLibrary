import express, { Request, Response } from 'express';
const router = express.Router();
import UserService from './services/user';

router.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await UserService.register(username, password);
    res.json(token);
})


export default router;