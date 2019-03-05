import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.jsx'

class CarouselImagesComponent extends React.Component {
  getStartIndex(index, nbImages) {
    return Math.max(
      index - Math.floor(nbImages / 2),
      0
    );
  }

  getEndIndex(index, nbImages, imagesLength) {
    return Math.min(
      index + Math.ceil(nbImages / 2),
      imagesLength - 1
    );
  }

  render() {
    const startIndex = this.getStartIndex(this.props.index, this.props.nbImages);
    const endIndex = this.getEndIndex(this.props.index, this.props.nbImages, this.props.images.length);

    if (this.props.images.length && endIndex > 0) {
      const images = this.props.images.slice(startIndex, endIndex);

      return images.map(image => <div key={image.id} className={styles.container}>
        <div className={
          styles.imageContainer(image.webformatURL)
        }></div>
      </div>);
    } else {
      return <div><img src='assets/load.gif' /></div>
    }
  }
}

const mapStateToProps = state => ({
  index: state.index,
  images: state.images,
  nbImages: state.nbImages,
});

const mapDispatchToProps = dispatch => ({});

const CarouselImages = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarouselImagesComponent);

export {
	CarouselImagesComponent,
	CarouselImages,
};
