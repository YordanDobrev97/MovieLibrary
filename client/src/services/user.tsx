import URL_API from '../utils/urlApi'

const registerUser = async (username: string, password: string) : Promise<string> => {
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
    const res: string = await response.json();
    return res;
}

const loginUser = async (username: string, password: string): Promise<string> => {
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
    const res: string = await response.json();
    return res;
}

type UserMovie = {
    title: string;
    imageUrl: string
}

const favoriteMovies = async (userId: string): Promise<UserMovie[]> => {
    const response = await fetch(`${URL_API}/api/user/favorites/${userId}`)
    const res: UserMovie[] = await response.json();
    return res
}

export default {
    registerUser,
    loginUser,
    favoriteMovies
}