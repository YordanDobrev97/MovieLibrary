import React from 'react'
import Btn from './Button'
import FavoriteService from '../services/favorite'
import { useCookies } from 'react-cookie'
import jwtParser from '../utils/jwtParser'

type FavoriteProps = {
    isAdded: boolean;
    movieId: string;
    setAddFavorite: (value: boolean) => void;
    setActive: (value: boolean) => void;
}

const Favorite: React.FC<FavoriteProps> = props => {
    const [cookies] = useCookies(['jwt'])

    const addFavorite = async () => {
        const jwtToken = cookies?.jwt
        if (jwtToken) {
            const userId = jwtParser(jwtToken)
            const movieId = props.movieId
            const res = await FavoriteService.add(userId['userID'], movieId)
            props.setAddFavorite(true)
        } else {
            props.setActive(true)
        }
    }

    const removeFavorite = async () => {
        const jwtToken = cookies?.jwt
        if (jwtToken) {
            const userId = jwtParser(jwtToken)
            const movieId = props.movieId

            const res = await FavoriteService.remove(userId['userID'], movieId)
            props.setAddFavorite(false);
        }
    }

    return (
        props.isAdded ? (
            <Btn bgc='white' c='red' m='40px 7px 0px 11px' p='9px' br='0'
                border='1px solid red' text='Remove From Favorites' fz='16px' w='30%'
                onClick={removeFavorite.bind(this)} />
        ) : (
            <Btn bgc='white' c='green' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid green'
                text='Add to favorites' fz='16px' w='30%' onClick={addFavorite.bind(this)} />
        )
    )
}

export default Favorite;