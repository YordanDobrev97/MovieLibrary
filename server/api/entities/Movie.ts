import mongoose from '../config/db'
import IMovie from '../interfaces/user'

const MovieSchema: mongoose.Schema = new mongoose.Schema(
    {
        title: { type: String },
        imageUrl: { type: String },
        description: { type: String },
    }
)

export default mongoose.model<IMovie>('Movie', MovieSchema)

