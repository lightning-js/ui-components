import theme from 'theme';
import { getHexColor } from '../../utils';

export default {
  height: theme.spacer.md,
  backdropColor: getHexColor(...theme.color.fillNeutralSecondary),
  overlayColor: getHexColor(...theme.color.fillBrand),
  effects: {
    radius: {
      radius: theme.radius.xs
    }
  }
};
