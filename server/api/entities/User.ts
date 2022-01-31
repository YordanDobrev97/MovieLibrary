import mongoose from '../config/db'

interface User {
    _id: string;
    username: string;
    password: string;
}

const UserSchema: mongoose.Schema = new mongoose.Schema(
    {
        username: { type: String },
        password: { type: String },
    }
)

export default mongoose.model<User>('User', UserSchema)

