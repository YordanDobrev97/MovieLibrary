import URL_API from '../utils/urlApi'

const registerUser = async (username: string, password: string) => {
    const response = await fetch(`${URL_API}/api/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            username, password
        })
    });
    return await response.json();
}

const loginUser = async (username: string, password: string) => {
    const response = await fetch(`${URL_API}/api/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            username, password
        })
    });
    return await response.json();
}

const favoriteMovies = async (userId: string) => {
    const response = await fetch(`${URL_API}/api/user/favorites/${userId}`)
    return await response.json()
}

export default {
    registerUser,
    loginUser,
    favoriteMovies
}