import theme from 'theme';
import { getHexColor } from '../../utils';

export default {
  container: {
    width: 200,
    height: 40,
    borderRadius: theme.radius.sm,
    border: { width: theme.stroke.sm, color: getHexColor(...theme.color.strokeInverse) },
    color: getHexColor(...theme.color.fillBrand)
  },
  textStyles: {
    ...theme.typography.tag1,
    textAlign: 'center',
    color: getHexColor(...theme.color.textNeutral)
  }
};
