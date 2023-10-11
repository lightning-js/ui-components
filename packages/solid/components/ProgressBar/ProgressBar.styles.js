import theme from 'theme';
import { getHexColor } from '../../utils';

export default {
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
