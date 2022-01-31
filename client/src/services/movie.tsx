import { externalAPI } from '../utils/movieDbApi'
import { APIKEY } from '../utils/apiKey'

const getAll = async () => {
    const response = await fetch(`${externalAPI}/movie/popular${APIKEY}`)
    return await response.json()
}

const getById = async (id: number) => {
    const response = await fetch(`${externalAPI}/movie/${id}${APIKEY}`)
    return await response.json()
}

const searchByTitle = async (title: string) => {
    const response = await fetch(`${externalAPI}/search/multi${APIKEY}&language=en-US&query=${title}&page=1&include_adult=false`)
    return await response.json()
}

export default {
    getAll,
    getById,
    searchByTitle
}