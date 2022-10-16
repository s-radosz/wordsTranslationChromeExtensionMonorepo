import React from 'react';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import Register from './../../../components/Register/Register';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

function setup() {
    const wrapper = mount(
        <Provider store={store}>
            <Register />
        </Provider>
    );
    return { wrapper };
}

describe('<Register />', () => {
    it('UI elements', () => {
        const { wrapper } = setup();

        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('form > input')).toHaveLength(3);
        expect(wrapper.find('form > select')).toHaveLength(1);
        expect(wrapper.find('form > button')).toHaveLength(1);
    });
});