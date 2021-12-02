import mongoose from '../config/db'
import IFavorite from '../interfaces/favorite'

const FavoriteSchema: mongoose.Schema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    }
)

export default mongoose.model<IFavorite>('Favorite', FavoriteSchema)

