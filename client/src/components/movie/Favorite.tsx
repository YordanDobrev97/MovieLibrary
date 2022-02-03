import React from 'react'
import { useCookies } from 'react-cookie'

import { Button } from '@mui/material'

import FavoriteService from '../../services/favorite'
import jwtParser from '../../utils/jwtParser'
 
interface FavoriteProps {
    isAdded: boolean;
    movieId: number;
    setAddFavorite: (value: boolean) => void;
}

export const Favorite: React.FC<FavoriteProps> = ({ movieId, isAdded, setAddFavorite } : FavoriteProps) => {
    const [cookies] = useCookies(['jwt'])

    const addFavorite = async () => {
        const jwtToken = cookies?.jwt
        if (jwtToken) {
            const userId = jwtParser(jwtToken)
            await FavoriteService.add(userId['userID'], movieId)
            setAddFavorite(true)
        }
    }

    const removeFavorite = async () => {
        const jwtToken = cookies?.jwt
        if (jwtToken) {
            await FavoriteService.remove(movieId)
            setAddFavorite(false);
        }
    }

    return (
        isAdded ? (
            <Button data-testid="removeBtn" variant="outlined" color="error" onClick={removeFavorite}>Remove From Favorites</Button>
        ) : (
            <Button data-testid="addButton" variant="outlined" color="success" onClick={addFavorite}>Add to favorites</Button>
        )
    )
}