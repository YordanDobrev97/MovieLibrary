import URL_API from '../utils/urlApi'

const getAll = async (title: String) => {
    const response = await fetch(`${URL_API}/api/user/rating/all?title=${title}`)
    return await response.json()
}

const addRating = async (rating: number, note: string, title: string) => {
    const response = await fetch(`${URL_API}/api/user/rating/add`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            rating, note, title
        })
    });
    return await response.json()
}

export default {
    addRating,
    getAll,
}