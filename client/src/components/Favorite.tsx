import React from 'react';
import Btn from './Button';
import FavoriteService from '../services/favorite';

type FavoriteProps = {
    isAdded: boolean;
    movieId: string;
    setAddFavorite: (value: boolean) => void;
    setActive: (value: boolean) => void;
}

const Favorite: React.FC<FavoriteProps> = props => {

    const addFavorite = () => {
        const uid = localStorage.getItem('uid');
        if (uid) {
            const userId = parseJwt(uid);
            const movieId = props.movieId;
            FavoriteService.add(userId['userID'], movieId)
                .then(result => {
                    props.setAddFavorite(true);
                })
        } else {
            props.setActive(true);
        }
    }

    const removeFavorite = () => {
        const uid = localStorage.getItem('uid');
        if (uid) {
            const userId = parseJwt(uid);
            const movieId = props.movieId;
            console.log(userId, movieId);

            FavoriteService.remove(userId['userID'], movieId)
                .then(() => {
                    props.setAddFavorite(false);
                })
        }
    }

    return (
        props.isAdded ? (
            <Btn bgc='white' c='red' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid red' text='Remove From Favorites' fz='16px' w='30%' onClick={removeFavorite.bind(this)} />
        ) : (
            <Btn bgc='white' c='green' m='40px 7px 0px 11px' p='9px' br='0' border='1px solid green' text='Add to favorites' fz='16px' w='30%' onClick={addFavorite.bind(this)} />
        )
    )
}

export default Favorite;

function parseJwt(token: string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}