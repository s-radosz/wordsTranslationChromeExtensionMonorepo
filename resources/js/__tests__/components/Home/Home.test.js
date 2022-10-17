import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import Home from './../../../components/Home/Home'
import configureMockStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureMockStore()
const store = mockStore({})

function setup() {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  )
  return { wrapper }
}

describe('<Home />', () => {
  it('UI elements', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.landing').exists()).toBe(true)
    expect(wrapper.find('.landing .landing__works--single')).toHaveLength(8)
    expect(wrapper.find('.landing .landing__works--single')).not.toHaveLength(6)
  })
})
