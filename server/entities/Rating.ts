import mongoose from '../config/db';
import IRating from '../interfaces/rating';

const RatingSchema: mongoose.Schema = new mongoose.Schema(
    {
        rating: { type: Number },
        note: { type: String },
        title: { type: String },
    }
)

export default mongoose.model<IRating>('Rating', RatingSchema);

