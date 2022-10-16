import React from 'react';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import Footer from './../../../components/utils/Footer/Footer';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

function setup() {
    const wrapper = mount(
        <Provider store={store}>
            <Footer />
        </Provider>
    );
    return { wrapper };
}

describe('<Footer />', () => {
    it('UI elements', () => {
        const { wrapper } = setup();

        expect(wrapper.find('.homepage__footer--wrapper').exists()).toBe(true);
        expect(wrapper.find('.homepage__footer--wrapper p')).toHaveLength(1);
        expect(wrapper.find('.homepage__footer--wrapper a')).toHaveLength(2);
        expect(wrapper.find('.homepage__footer--wrapper img')).toHaveLength(2);
    });
});