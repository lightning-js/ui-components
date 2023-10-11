import ProgressBar from './ProgressBar';
import theme from 'theme';

const meta = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'color of bar representing the total progress',
      control: 'color'
    },
    progressColor: {
      description: 'color of bar representing the current progress',
      control: 'color'
    },
    progress: {
      description: 'Percentage of current progress in a decimal format from 0 to 1',
      control: { type: 'number', step: 0.1, min: 0, max: 1.0 }
    },
    borderRadius: {
      description: 'Radius of the bar',
      control: { type: 'number', step: 1, min: 0, max: 50 }
    }
  }
};

export default meta;

export const Basic = {
  args: {
    width: 500,
    height: theme.spacer.md,
    progress: 0.5,
    // TODO make it so we don't need to do this
    color: theme.color.fillNeutralSecondary[0],
    progressColor: theme.color.fillBrand[0],
    borderRadius: theme.radius.xs
  }
};
