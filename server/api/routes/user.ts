import express, { Request, Response, Router } from 'express'
import UserService from '../services/user'
import RatingService from '../services/rating'
import FavoriteService from '../services/favorite'

const router: Router = express.Router()

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

router.post('/favorites', async (req: Request, res: Response) => {
    const userId: string = req.body.userId
    const movieId: number = Number(req.body.movieId)
    const result = await FavoriteService.add(userId, movieId)
    res.json(result)
})

router.delete('/favorites/:movieId', async (req: Request, res: Response) => {
    const { movieId } = req.params
    const result = await FavoriteService.remove(Number(movieId))
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