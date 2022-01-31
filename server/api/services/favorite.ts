import Favorite from '../entities/Favorite'
import UserService from './user'

const getFavorites = async (userId: string) => {
    const favoriteMovies = await UserService.favoriteMovies(userId)
    return favoriteMovies
}

const isAdded = async (userId: string, movieId: number) => {
    const user = await UserService.existUser(userId)
    
    if (!user) return false

    return await Favorite.findOne({ userId, movieId }).lean()
}

const add = async (userId: string, movieId: number) => {
    const exist = await Favorite.findOne({userId, movieId})
    if (exist) {
        return false
    }
    
    const favorite = new Favorite({
        userId,
        movieId
    });

    await favorite.save()
    return true
}

const remove = async (movieId: number) => {
    return await Favorite.deleteOne({ movieId }).lean()
}

export default {
    getFavorites,
    add,
    remove,
    isAdded
}