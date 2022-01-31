import mongoose from '../config/db'

interface Favorite {
    userId: string,
    movieId: Number
}

const FavoriteSchema: mongoose.Schema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        movieId: { type: Number },
    }
)

export default mongoose.model<Favorite>('Favorite', FavoriteSchema)

