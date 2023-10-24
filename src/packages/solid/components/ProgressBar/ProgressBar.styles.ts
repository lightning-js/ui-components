import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type ProgressBarStyle = {
  container: {
    height: number;
    color: number;
  };
  progressBar: {
    color: number;
  };
  animationSettings: object;
  borderRadius: number;
};

const styles: ProgressBarStyle = {
  container: {
    height: theme.spacer.md,
    color: getHexColor(...(theme.color.fillNeutralSecondary as [string, number]))
  },
  progressBar: {
    color: getHexColor(...(theme.color.fillBrand as [string, number]))
  },
  borderRadius: theme.radius.xs,
  animationSettings: {}
};

export default styles;
