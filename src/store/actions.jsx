import { searchImages } from '../utils/pixbay';

const actions = {
  next: () => ({
    type: 'NEXT',
  }),
  previous: () => ({
    type: 'PREVIOUS',
  }),
  fetchImages: dispatch => searchImages('cat')
    .then((res) => {
      dispatch(actions.fetchedImages(res.hits));
    })
    .catch(() => {
      dispatch(actions.displayError());
    }),
  displayError: () => ({
    type: 'DISPLAY_ERROR',
  }),
  fetchedImages: images => ({
    type: 'FETCHED_IMAGES',
    images,
  }),
  resize: nbImages => ({
    type: 'RESIZE',
    nbImages,
  }),
};

export default actions;
