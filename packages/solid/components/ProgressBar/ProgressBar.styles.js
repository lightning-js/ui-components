import theme from 'theme';
import { getHexColor } from '../../utils';

export default {
  height: theme.spacer.md,
  backdropColor: getHexColor(...theme.color.fillNeutralSecondary),
  progressColor: getHexColor(...theme.color.fillBrand),
  borderRadius: theme.radius.xs
};
