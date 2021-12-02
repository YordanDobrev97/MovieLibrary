import URL_API from '../utils/urlApi'

const getAll = async () => {
    const response = await fetch(`${URL_API}/api/movies`)
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