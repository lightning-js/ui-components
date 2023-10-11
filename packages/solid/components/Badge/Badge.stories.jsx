import Badge from './Badge';
import theme from 'theme';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs']
};

export default meta;

export const Basic = {
  args: {
    width: 100,
    color: theme.color.fillBrand[0],
    children: 'Badge text'
  }
};
