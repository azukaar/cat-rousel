import React from 'react';
import { CarouselImages } from '../carouselImages';
import { connect } from 'react-redux';
import { actions } from '../../store';
import styles from './styles';

class CarouselMainComponent extends React.Component {
	componentDidMount() {
		this.onResize.apply(this);
		this.props.fetchImages();

		window.addEventListener('resize', (event) => this.onResize());
		window.addEventListener('keyup', (event) => this.onKeyUp(event));
	}

	onKeyUp(event) {
		if (event.key === 'ArrowRight') {
			this.props.onClickNext();
		} else if (event.key === 'ArrowLeft') {
			this.props.onClickPrevious();
		} 
	}

	onResize() {
		const availableSpace = (window.innerWidth - styles.containerMargin * 2);
		this.props.resize(Math.max(1, Math.floor(availableSpace / styles.imageWidth)));
	}

	render() {
		return <div className={styles.container}>
			<h1 className={styles.title}>Cat-rousel</h1>
			{ this.props.displayError ? 
				<div>
					<div className={styles.error}>Error occued !</div>
					<img src="assets/error.gif" />
				</div> :
				<div>
					<div>
						<CarouselImages></CarouselImages>
					</div>
					<button className={styles.buttons} onClick={this.props.onClickPrevious}>Previous</button>
					<button className={styles.buttons} onClick={this.props.onClickNext}>Next</button>
				</div>
			}
		</div>;
  }
}

const mapStateToProps = state => ({
	displayError: state.displayError
});

const mapDispatchToProps = dispatch => ({
    onClickNext: () => dispatch(actions.next()),
		onClickPrevious: () => dispatch(actions.previous()), 
		fetchImages: () => dispatch(actions.fetchImages),
		resize: (nbImages) => dispatch(actions.resize(nbImages)),
});

const CarouselMain = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarouselMainComponent);

export {
	CarouselMainComponent,
	CarouselMain,
};
