import Icon from './Icon';
import lightning from '../../assets/images/ic_lightning_white_32.png';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: { 
      description: 'color of icon',
      control: 'color'
    },
    fixed: {
      description: "when `true`, icon width and height will not dynamically resize",
      control: {type: 'boolean'}
    },
    icon: {
      description: "path to image or inline SVG XML",
    }

  }
};

export default meta;

export const PNG = {
  args: {
    width: 100,
    height: 100,
    icon: lightning,
    fixed: true,
  }
};

/** Potentially not compatible with SVG */

/* export const SVG = {
  args: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /></svg>',
    fixed: true
  }
}; */
