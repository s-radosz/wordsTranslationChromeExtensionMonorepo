import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import Login from './../../../components/Login/Login'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({})

function setup() {
  const wrapper = mount(
    <Provider store={store}>
      <Login />
    </Provider>,
  )
  return { wrapper }
}

describe('<Login />', () => {
  it('UI elements', () => {
    const { wrapper } = setup()

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('form > input')).toHaveLength(2)
    expect(wrapper.find('form > button')).toHaveLength(1)
  })
})
