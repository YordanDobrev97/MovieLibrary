import express, { Request, Response } from 'express';
import User from './entities/User';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const newUser = new User({
        username: 'First user',
        password: '123456789',
    })

    await newUser.save();

    res.send(newUser.username);
})

export default router;