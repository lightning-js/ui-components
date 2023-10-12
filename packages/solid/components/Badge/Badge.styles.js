import theme from 'theme';
import { getHexColor } from '../../utils';

export default {
  container: {
    width: 200, //TODO: calculate depending on content (text and/or icon)?
    height: theme.typography.tag1.lineHeight, //TODO: calculate according to text and/or icon?
    borderRadius: theme.radius.sm,

    border: { width: theme.stroke.sm, color: getHexColor(...theme.color.strokeInverse) },
    color: getHexColor(...theme.color.fillBrand)
  },
  textStyle: {
    ...theme.typography.tag1,
    width: 200,
    textAlign: 'center',
    color: getHexColor(...theme.color.textNeutral)
  }
};
