import { CSS, units,  } from 'electron-css';

const { px } = units;

const imageWidth = 250;
const containerMargin = 20;

const totalImageWidth = imageWidth + 40;
const totalContainerMargin = containerMargin + 60;

const container = CSS({
  margin: 'auto',
  display: 'inline-block',
  marginBottom: px(containerMargin),
});

const imageContainer = (src) => CSS({
  width: px(imageWidth),
  height: px(imageWidth),
  boxSizing: 'borderBox',
  backgroundImage: `URL(${src})`,
  backgroundSize: 'cover',
  margin: px(10),
  border: [
    'white',
    '10px',
    'solid'
  ],
  boxShadow: ['0px',
    '10px',
    '50px',
    '0px',
    'rgba(0,0,0,0.5)'
  ],
});

export default {
  totalImageWidth,
  totalContainerMargin,
  container,
  imageContainer,
};
