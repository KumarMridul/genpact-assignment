import React from 'react';

import {App} from './App';
import {shallow} from 'enzyme';
describe('<App/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
});
it('shallow rendering test', () => {
  expect(wrapper.find('.mainContainer').length).toEqual(1);
}) 
});
