import mongoose from 'mongoose'
const url = 'mongodb+srv://BaseUser:BaseUser@cluster0.9yisg.mongodb.net/MovieLibrary?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => console.log("Connected to database!"))

export default mongoose