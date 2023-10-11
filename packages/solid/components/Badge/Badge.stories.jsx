import Badge from './Badge';
import theme from 'theme';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'color of badge background'
    }
  }
};

export default meta;

export const Basic = {
  args: {
    children: 'Badge Text',
    width: 100,
    color: theme.color.fillBrand[0]
  }
};
