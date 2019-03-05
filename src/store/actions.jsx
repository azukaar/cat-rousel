const actions = {
  next: () => ({
    type: 'NEXT'
  }),
  previous: () => ({
    type: 'PREVIOUS'
  }),
  fetchImages: (dispatch) => {
    return fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=cat&image_type=photo')
      .then((res) => res.json())
      .then((res) => {
        dispatch(actions.fetchedImages(res.hits))
      });
  },
  fetchedImages: (images) => ({
    type: 'FETCHED_IMAGES',
    images,
  }),
  resize: (nbImages) => ({
    type: 'RESIZE',
    nbImages
  }),
};

export default actions;
