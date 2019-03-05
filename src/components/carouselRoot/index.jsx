import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { CarouselMain } from '../carouselMain';

export default class CarouselRoot extends React.Component {
  render() {
  	return <Provider store={store}>
      <CarouselMain></CarouselMain>
    </Provider>
  }
}
