import Badge from './Badge';
import theme from 'theme';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'color of badge background',
      control: 'color'
    },
    title: {
      description: 'text inside of badge'
    }
  }
};

export default meta;

export const Basic = {
  args: {
    title: 'Badge Text',
    width: 200,
    color: theme.color.fillBrand[0]
  }
};
