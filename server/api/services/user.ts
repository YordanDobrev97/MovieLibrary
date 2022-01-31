import bcrypt from 'bcrypt'
import jtw from 'jsonwebtoken'

import User from '../entities/User'
import Favorite from '../entities/Favorite'

const privateKey = "secret"

interface Movie {
    movieId: number;
}

const existUser = async (userId: string) => {
    const user = await User.exists({ _id: userId })
    return user
}

const favoriteMovies = async (userId: string): Promise<number[]> => {
    const userMovies = await Favorite.find().where('userId').in([userId]).lean() as []
    const ids: number[] = userMovies.map((movie: Movie) => {
        return movie.movieId
    })
    return ids
}

const register = async (username: string, password: string) => {
    const salt = await bcrypt.genSalt(8)
    const hashPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
        username: username,
        password: hashPassword,
    });

    const userObj = await newUser.save()
    const token = generateToken(userObj._id)
    return token
}

const login = async (username: string, password: string) => {
    const user = await User.findOne({ username: username }).lean()
    const comparePass: boolean = await bcrypt.compare(password, user?.password || '')

    if (comparePass) {
        return generateToken(user?._id)
    }

    return null
}

function generateToken(id: any) {
    return jtw.sign(
        {
            userID: id,
        },
        privateKey
    );
}

export default { register, login, existUser, favoriteMovies }