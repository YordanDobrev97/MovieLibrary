import { mount } from 'enzyme'
import { Login } from '../../components/auth/Login'
import { MemoryRouter } from 'react-router-dom'

describe('Test Login Page', () => {
    let wrapper = mount(
    <MemoryRouter>
        <Login />
    </MemoryRouter>);

    it('test username label is exist', () => {
       expect(wrapper.find('#username').exists()).toBeTruthy()
    });

    it('test password label is exist', () => {
        expect(wrapper.find('#password').exists()).toBeTruthy()
     });

     it('test submit login from', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        expect(wrapper.find('form').simulate('submit', fakeEvent)).toBeTruthy()
     })
})