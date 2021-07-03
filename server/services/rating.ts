import Rating from '../entities/Rating';

const getVotes = async (title: string) => {
    const rating = await getByTitle(title);
    return {
        rating: rating?.rating
    };
}

const addRating = async (rating: number, note: string, title: string) => {
    let result = await getByTitle(title);

    if (!result) {
        const newRating = new Rating({
            rating,
            note,
            title
        })

        result = await newRating.save();
    } else {
        result.rating += rating;
        result?.save();
    }

    return result.id;
}

const getByTitle = async (title: string) => {
    const rating = await Rating.findOne({ title: title });
    return rating;
}

export default {
    addRating,
    getVotes,
}