import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import actions from './actions';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export {
  actions,
  store,
};
