import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type BadgeStyle = {
  container: {
    width: number;
    height: number;
    borderRadius: number;
    paddingX: number;
    paddingY: number;
    border: {
      width: number;
      color: number;
    };
    color: number;
  };
  textStyle: {
    width: number;
    textAlign: string;
    color: number;
  };
};

const styles: BadgeStyle = {
  container: {
    width: 200, //TODO: calculate depending on content (text and/or icon)?
    height: theme.typography.tag1.lineHeight, //TODO: calculate according to text and/or icon?
    borderRadius: theme.radius.sm,
    paddingX: theme.spacer.md + theme.spacer.xxs,
    paddingY: theme.spacer.xs,
    border: {
      width: theme.stroke.sm,
      color: getHexColor(...(theme.color.strokeInverse as [string, number]))
    },
    color: getHexColor(...(theme.color.fillBrand as [string, number]))
  },
  textStyle: {
    ...theme.typography.tag1,
    width: 200,
    textAlign: 'center',
    color: getHexColor(...(theme.color.textNeutral as [string, number]))
  }
};

export default styles;
