import express, { Request, Response } from 'express';
const router = express.Router();
import UserService from './services/user';
import MovieService from './services/movie';
import RatingService from './services/rating';
import FavoriteService from './services/favorite';

router.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await UserService.register(username, password);
    res.json(token);
})

router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await UserService.login(username, password);
    res.json(token);
})

router.post('/rating', async (req: Request, res: Response) => {
    const { note, rating, title } = req.body;
    const result = await RatingService.addRating(rating, note, title);
    res.json(result);
})

router.post('/favorites/add', async (req: Request, res: Response) => {
    const { userId, movieId } = req.body;
    const result = await FavoriteService.add(userId, movieId);
    res.json(result);
})

router.post('/favorites/isAdded', async (req: Request, res: Response) => {
    const { userId, movieId } = req.body;
    const result = await FavoriteService.isAdded(userId, movieId);
    res.json(result);
})

router.post('/favorites/remove', async (req: Request, res: Response) => {
    const { userId, movieId } = req.body;
    const result = await FavoriteService.remove(userId, movieId);
    res.json(result);
})

router.get('/favorites', async (req: Request, res: Response) => {
    const favorites = await FavoriteService.getAll();
    res.json(favorites);
})

router.get('/rating/all?:title', async (req: Request, res: Response) => {
    const title = req.query.title as string;
    const result = await RatingService.getVotes(title);
    res.json(result);
})

router.get('/movies/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const movie = await MovieService.getByTitle(id);
    res.json(movie);
})

router.get('/movies/', async (req: Request, res: Response) => {
    const movies = await MovieService.getAll();
    res.json(movies);
})

export default router;