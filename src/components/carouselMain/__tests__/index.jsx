import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { CarouselMainComponent } from '../';


test('Can mount', () => {
  const wrapper = shallow(<CarouselMainComponent
    fetchImages={() => {}}
    resize={() => {}}
  />);
  expect(wrapper.find('div').length).toBeGreaterThan(0);
});

test('displays errors', () => {
  const wrapper = shallow(<CarouselMainComponent
    fetchImages={() => {}}
    resize={() => {}}
    displayError={true}
  />);

  expect(wrapper.text()).toContain('Error');
});

test('properly initialize', () => {
  const fetch = jest.fn();
  const resize = jest.fn();

  const wrapper = shallow(<CarouselMainComponent
    fetchImages={fetch}
    resize={resize}
  />);

  expect(fetch).toHaveBeenCalled();
  expect(resize).toHaveBeenCalled();
});