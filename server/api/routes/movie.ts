import express, { Request, Response } from 'express'
import MovieService from '../services/movie'

const router = express.Router()

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const movie = await MovieService.getByTitle(id)
    res.json(movie)
})

router.get('/', async (req: Request, res: Response) => {
    const movies = await MovieService.getAll()
    res.json(movies)
})

export default router