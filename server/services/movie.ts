import Movie from '../entities/Movie';

const getAll = async () => {
    const data = await Movie.find().lean();
    return data;
}

const getByTitle = async (title: string) => {
    const movie = await Movie.findOne({ title: title }).lean();
    return movie;
}

export default {
    getAll,
    getByTitle,
}