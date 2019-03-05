import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { CarouselImagesComponent } from '../';


test('Can mount', () => {
  const wrapper = shallow(<CarouselImagesComponent
    images={[]}
  />);
  expect(wrapper.find('div').length).toBeGreaterThan(0);
});
  
test('Start Index', () => {
  const wrapper = new CarouselImagesComponent();

  expect(wrapper.getStartIndex(0,1)).toBe(0);
  expect(wrapper.getStartIndex(-1,1)).toBe(0);
  expect(wrapper.getStartIndex(1,2)).toBe(0);
  expect(wrapper.getStartIndex(5,2)).toBe(4);
});
  
test('End Index', () => {
  const wrapper = new CarouselImagesComponent();

  expect(wrapper.getEndIndex(0,1,10)).toBe(1);
  expect(wrapper.getEndIndex(1,2,10)).toBe(2);
  expect(wrapper.getEndIndex(7,5,10)).toBe(9);
});
  