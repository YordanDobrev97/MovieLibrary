import Favorite from '../entities/Favorite'
import UserService from './user'
import MovieService from './movie'

const getFavorites = async (userId: string) => {
    const favoriteMovies = await UserService.favoriteMovies(userId)
    return favoriteMovies
}

const isAdded = async (userId: string, movieId: string) => {
    const user = await UserService.existUser(userId)
    const movie = await MovieService.existMovie(movieId)

    if (!user || !movie) {
        return false
    }

    return await Favorite.findOne({ userId, movieId }).lean()
}

const add = async (userId: string, movieId: string) => {
    const user = await UserService.existUser(userId)
    const movie = await MovieService.existMovie(movieId)

    if (user && movie) {
        const favorite = new Favorite({
            userId,
            movieId
        });

        await favorite.save()
        return true
    }
    return false
}

const remove = async (userId: string, movieId: string) => {
    await Favorite.deleteOne({ userId, movieId }).lean()
    return true
}

export default {
    getFavorites,
    add,
    remove,
    isAdded
}