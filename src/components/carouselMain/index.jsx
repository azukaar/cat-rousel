import React from 'react';
import CarouselImages from '../carouselImages';
import { connect } from 'react-redux';
import { actions } from '../../store';
import styles from './styles';

class CarouselMain extends React.Component {
	componentDidMount() {
		this.props.fetchImages();
		window.addEventListener('resize', (event) => this.onResize());
		this.onResize.apply(this);
	}

	onResize() {
		const availableSpace = (window.innerWidth - styles.containerMargin * 2);
		this.props.resize(Math.max(1, Math.floor(availableSpace / styles.imageWidth)));
	}

	render() {
		return <div className={styles.container}>
			<h1 className={styles.title}>Cat-rousel</h1>
			<div>
				<CarouselImages></CarouselImages>
			</div>
			<button className={styles.buttons} onClick={this.props.onClickPrevious}>Previous</button>
			<button className={styles.buttons} onClick={this.props.onClickNext}>Next</button>
		</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onClickNext: () => dispatch(actions.next()),
		onClickPrevious: () => dispatch(actions.previous()), 
		fetchImages: () => dispatch(actions.fetchImages),
		resize: (nbImages) => dispatch(actions.resize(nbImages)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarouselMain)