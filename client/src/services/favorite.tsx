import URL_API from '../utils/urlApi'

const add = async (userId: string, movieId: string) => {
    const response = await fetch(`${URL_API}/api/user/favorites/add`, {
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

const remove = async (userId: string, movieId: string) => {
    const response = await fetch(`${URL_API}/api/user/favorites/remove`, {
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

const isAdded = async (userId: string, movieId: string) => {
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