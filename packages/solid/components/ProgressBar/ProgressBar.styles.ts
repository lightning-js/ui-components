import theme from 'theme';
import { getHexColor } from '../../utils';

type ProgressBarStyle = {
  container: {
    height: number;
    color: number;
    borderRadius: number;
  };
  progressBar: {
    color: number;
    borderRadius: number;
  };
};

const styles: ProgressBarStyle = {
  container: {
    height: theme.spacer.md,
    color: getHexColor(...theme.color.fillNeutralSecondary),
    borderRadius: theme.radius.xs
  },
  progressBar: {
    borderRadius: theme.radius.xs,
    color: getHexColor(...theme.color.fillBrand)
  }
};

export default styles;
