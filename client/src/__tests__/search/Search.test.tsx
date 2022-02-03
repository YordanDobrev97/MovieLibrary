import { mount } from 'enzyme'
import { SearchPage } from '../../components/search/SearchPage'
import { MemoryRouter } from 'react-router-dom'
import FetchAPI from '../../utils/fetchApi'
import { mockFetch } from '../../utils/mockFetch'

interface SearchMovie {
    title: string;
}

describe('Test Search Page', () => {
    let wrapper = mount(
        <MemoryRouter>
            <SearchPage />
        </MemoryRouter>);

    it('test render successfully', () => {
        expect(wrapper).not.toBeNull()
    });

    it('test fetch movie by title', async () => {
        const data = {
            title: 'Spider-man'
        };

        mockFetch(200, data);

        const fetchAPI = new FetchAPI<SearchMovie>();
        const res = await fetchAPI.fetchMovies();
        expect(res).toEqual(data);
    })
})
