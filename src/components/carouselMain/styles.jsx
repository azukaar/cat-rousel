import { CSS, color } from 'electron-css';
import carouselImagesStyles from '../carouselImages/styles';

const container = CSS({
	textAlign: 'center',
	position: 'absolute',
	top:0,
	bottom: 0,
	left: 0,
	right: 0,
	padding: '30px',
	fontFamily: ['Ropa Sans'],
	backgroundColor: color.rgb(252, 252, 228),
	backgroundImage: `URL(assets/back.jpg)`,
	backgroundSize: 'cover',
});

const buttons = CSS({
	width: '115px',
	height: '50px',
	margin: '10px',
	backgroundColor: '#7da0e0',
	border: 'none',
	color: 'white',
	fontWeight: 'bold',
	fontSize: '130%',
	fontFamily: ['Ropa Sans'],
});

const title = CSS({
	color: '#4e73b7',
	fontSize: '300%'
});

export default {
	imageWidth: carouselImagesStyles.totalImageWidth,
	containerMargin: carouselImagesStyles.totalContainerMargin,
  title, 
  buttons,
  container,
};
