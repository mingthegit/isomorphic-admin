import AppRouter from '../AppRouter';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<AppRouter />', () => {
  it('renders with default props', () => {
    const store = mockStore();
    const wrapper = shallow(<AppRouter store={store} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
