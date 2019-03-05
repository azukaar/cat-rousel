import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.jsx'

class CarouselImages extends React.Component {
  render() {
    const startIndex = Math.max(
        this.props.index - Math.floor(this.props.nbImages / 2),
        0
    );

    const endIndex = Math.min(
      this.props.index + Math.ceil(this.props.nbImages / 2),
      this.props.images.length - 1
    );

    if (this.props.images.length && endIndex > 0) {
      const images = this.props.images.slice(startIndex, endIndex);

      return images.map(image => <div className={styles.container}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarouselImages);