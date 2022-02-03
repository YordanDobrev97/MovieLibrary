import { mount } from 'enzyme'
import { MovieContainer } from '../../components/movie/MovieContainer'
import { MemoryRouter } from 'react-router-dom'
import FetchAPI from '../../utils/fetchApi'
import { mockFetch } from '../../utils/mockFetch'

interface Movie {
    id: number;
    name: string;
}

describe('Test Movie Page', () => {
    let wrapper = mount(
        <MemoryRouter>
            <MovieContainer />
        </MemoryRouter>);

    it('test render successfully', () => {
        expect(wrapper).not.toBeNull()
    });

    it('test fetch movies', async () => {
        const data = {
            id: "634649",
            name: "Spider-Man: No Way Home",
        };

        mockFetch(200, data);

        const fetchAPI = new FetchAPI<Movie>();
        const res = await fetchAPI.fetchMovies();
        expect(res).toEqual(data);
    })
})