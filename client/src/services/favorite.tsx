import URL_API from '../utils/urlApi'

const add = async (userId: string, movieId: number) => {
    const response = await fetch(`${URL_API}/api/user/favorites`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            userId, movieId
        })
    });
    return await response.json();
}

const remove = async (movieId: number) => {
    const response = await fetch(`${URL_API}/api/user/favorites/${movieId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    });
    return await response.json();
}

const isAdded = async (userId: string, movieId: number) => {
    const response = await fetch(`${URL_API}/api/user/favorites/isAdded`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            userId, movieId
        })
    });
    return await response.json();
}

export default {
    add,
    remove,
    isAdded,
}