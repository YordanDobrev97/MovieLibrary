import Movie from '../entities/Movie';

const getAll = async () => {
    const data = await Movie.find().lean();
    return data;
}

export default {
    getAll
}