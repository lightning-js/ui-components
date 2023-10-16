import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type IconStyle = {
  container: {
    height: number;
    color: number;
  };
};

const styles: IconStyle = {
  container: {
    height: theme.spacer.md,
    color: getHexColor(...(theme.color.fillNeutralSecondary as [string, number])),
  },
};

export default styles;
