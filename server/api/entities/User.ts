import mongoose from '../config/db'
import IUser from '../interfaces/user'

const UserSchema: mongoose.Schema = new mongoose.Schema(
    {
        username: { type: String },
        password: { type: String },
    }
)

export default mongoose.model<IUser>('User', UserSchema)

