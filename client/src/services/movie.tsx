import URL_API from '../utils/urlApi'

const getAll = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=1c339541638a8ba1e9be6723deb72edd&language=en-US')
    return await response.json()
}

const getByTitle = async (title: string) => {
    const response = await fetch(`${URL_API}/api/movies/${title}`)
    return await response.json()
}

export default {
    getAll,
    getByTitle,
}