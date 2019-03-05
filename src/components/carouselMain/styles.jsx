import { CSS, color, units } from 'electron-css';
import carouselImagesStyles from '../carouselImages/styles';
const { px, pct } = units;

const container = CSS({
	textAlign: 'center',
	position: 'absolute',
	top:0,
	bottom: 0,
	left: 0,
	right: 0,
	padding: px(30),
	fontFamily: ['Ropa Sans'],
	backgroundColor: color.rgb(252, 252, 228),
	backgroundImage: `URL(assets/back.jpg)`,
	backgroundSize: 'cover',
});

const buttons = CSS({
	width: px(115),
	height: px(50),
	margin: px(10),
	backgroundColor: '#7da0e0',
	border: 'none',
	color: 'white',
	fontWeight: 'bold',
	fontSize: pct(130),
	fontFamily: ['Ropa Sans'],
});

const title = CSS({
	color: '#4e73b7',
	fontSize: '300%'
});

const error = CSS({
	color: '#b74e6d',
	fontWeight: 'bold',
	fontSize: '200%',
	padding: px(10),
	backgroundColor: '#e5c3cd',
	border: [
		'#b74e6d',
		px(1),
		'solid'
	],
});

export default {
	imageWidth: carouselImagesStyles.totalImageWidth,
	containerMargin: carouselImagesStyles.totalContainerMargin,
	title, 
	error,
  buttons,
  container,
};
