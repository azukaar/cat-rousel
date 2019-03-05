const searchImages = term => fetch(`https://pixabay.com/api/?key=${CONFIG.pixbay}&q=${term}&image_type=photo`)
  .then(res => res.json());

export {
  searchImages,
};
