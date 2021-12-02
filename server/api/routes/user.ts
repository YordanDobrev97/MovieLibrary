import express, { Request, Response } from 'express'
import UserService from '../services/user'
import RatingService from '../services/rating'
import FavoriteService from '../services/favorite'

const router = express.Router()

router.post('/rating/add', async (req: Request, res: Response) => {
    const { note, rating, title } = req.body
    const result = await RatingService.addRating(rating, note, title)
    res.json(result)
})

router.get('/rating/all?:title', async (req: Request, res: Response) => {
    const title = req.query.title as string
    const result = await RatingService.getVotes(title)
    res.json(result)
})

router.post('/favorites/add', async (req: Request, res: Response) => {
    const { userId, movieId } = req.body
    const result = await FavoriteService.add(userId, movieId)
    res.json(result)
})

router.post('/favorites/remove', async (req: Request, res: Response) => {
    const { userId, movieId } = req.body
    const result = await FavoriteService.remove(userId, movieId)
    res.json(result)
})

router.post('/favorites/isAdded', async (req: Request, res: Response) => {
    const { userId, movieId } = req.body
    const result = await FavoriteService.isAdded(userId, movieId)
    res.json(result)
})

router.get('/favorites/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const favorites = await UserService.favoriteMovies(id)
    res.json(favorites)
})

export default router