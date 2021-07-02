import bcrypt from 'bcrypt';
import jtw from 'jsonwebtoken';
import User from '../entities/User';
const privateKey = "secret";

const register = async (username: string, password: string) => {
    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        username: username,
        password: hashPassword,
    });

    const userObj = await newUser.save();
    const token = generateToken(userObj._id);
    return token;
}

function generateToken(id: Document) {
    return jtw.sign(
        {
            userID: id,
        },
        privateKey
    );
}

export default { register };