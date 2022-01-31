import mongoose from '../config/db'

interface Rating {
    rating: number,
    note: string,
    title: string
}

const RatingSchema: mongoose.Schema = new mongoose.Schema(
    {
        rating: { type: Number },
        note: { type: String },
        title: { type: String },
    }
)

export default mongoose.model<Rating>('Rating', RatingSchema)

