import { mount } from 'enzyme'
import { Register } from '../../components/auth/Register'
import { MemoryRouter } from 'react-router-dom'

describe('Test Register Page', () => {
    let wrapper = mount(
    <MemoryRouter>
        <Register />
    </MemoryRouter>);

    it('test render successfully', () => {
       expect(wrapper).not.toBeNull()
    });

     it('test submit register from', () => {
        const fakeEvent = { preventDefault: () => {} };
        expect(wrapper.find('form').simulate('submit', fakeEvent)).toBeTruthy()
     })
})