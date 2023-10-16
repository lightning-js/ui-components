import Icon from './Icon';
import lightning from '../../../assets/images/ic_lightning_white_32.png';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    w: {
      control: {
        type: 'range',
        min: 1,
        max: 96
      },
      description: 'Width of the icon',
      table: {
        defaultValue: { summary: 0 }
      }
    },
    h: {
      control: { type: 'range', min: 1, max: 96 },
      description: 'Height of the icon',
      table: {
        defaultValue: { summary: 0 }
      }
    }
  }
};

export default meta;

export const PNG = {
  args: {
    icon: lightning
  }
};

export const SVG = {
  args: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /></svg>',
  }
};
