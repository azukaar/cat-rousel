import actions from './actions';

const reducersDefinitions = {
  [actions.next().type] : (state, action) => {
    if(state.images.length) {
      const index = (state.index + 1) % state.images.length;
      return Object.assign({}, state, {
        index,
      });
    } else {
      return state;
    }
  },

  [actions.previous().type] : (state, action) => {
    if(state.images.length) {
      const index = state.index > 0 ? 
        state.index - 1 :
        state.images.length - 1;
      return Object.assign({}, state, {
          index,
      });
    } else {
      return state;
    }
  },

  [actions.resize().type] : (state, action) => {
    return Object.assign({}, state, {
        nbImages: action.nbImages,
    });
  },

  [actions.fetchedImages().type] : (state, action) => {
      return Object.assign({}, state, {
        images: action.images,
        index: 0,
      });
  },
};

const reducers = (state = {index: 0, images: [], nbImages: 1}, action) => {
  if(reducersDefinitions[action.type]) {
    return reducersDefinitions[action.type](state, action);
  } else {
    return state;
  }
}

export default reducers;
