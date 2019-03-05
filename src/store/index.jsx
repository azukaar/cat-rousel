import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import actions from './actions';
import reducers from './reducers';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export {
  actions,
  store,
};
