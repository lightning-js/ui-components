import theme from 'theme';
import { getHexColor } from '../../utils';

export default {
  container: {
    width: 100, // TODO: calculated with text & icon width,  padding and content spacing
    height: 40, // TODO: calculated with text or icon height,
    contentSpacing: theme.spacer.sm,
    offsetY: theme.spacer.xs,
    paddingX: theme.spacer.md + theme.spacer.xxs,
    paddingY: theme.spacer.xs,
    radius: theme.radius.sm,
    border: { width: theme.stroke.sm, color: getHexColor(...theme.color.strokeInverse) },
    color: getHexColor(...theme.color.fillBrand)
  },
  textStyle: {
    ...theme.typography.tag1,
    textAlign: 'center',
    color: getHexColor(...theme.color.textNeutral)
  }
};
