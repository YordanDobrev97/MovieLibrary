import Movie from '../entities/Movie';

const existMovie = async (movieId: string) => await Movie.exists({ _id: movieId }) != null;

const getAll = async () => await Movie.find({}).lean();

const getByTitle = async (title: string) => await Movie.findOne({ title: title }).lean();

export default {
    getAll,
    getByTitle,
    existMovie
}