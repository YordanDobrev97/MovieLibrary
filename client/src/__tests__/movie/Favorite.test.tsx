import { render, fireEvent } from '@testing-library/react'
import { Favorite } from '../../components/movie/Favorite'

describe('Test Add Favorite Movie', () => {
    const movieId = 634649;
    const addFavoriteFn = jest.fn();

    it('test add movie to favorites collection', async () => {
        let { getAllByTestId } = render(<Favorite isAdded={false} movieId={movieId} setAddFavorite={addFavoriteFn}/>);
        
        const button = getAllByTestId('addButton')
        const res = fireEvent.click(button[0])
        expect(res).toEqual(true)
    })

    it('test remove movie from favorites collection', async () => {
        let { getAllByTestId } = render(<Favorite isAdded={true} movieId={movieId} setAddFavorite={addFavoriteFn}/>);
        
        const button = getAllByTestId('removeBtn')
        const res = fireEvent.click(button[0])
        expect(res).toEqual(true)
    })
})
