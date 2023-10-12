import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

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
    color: getHexColor(...(theme.color.fillNeutralSecondary as [string, number])),
    borderRadius: theme.radius.xs
  },
  progressBar: {
    borderRadius: theme.radius.xs,
    color: getHexColor(...(theme.color.fillBrand as [string, number]))
  }
};

export default styles;
