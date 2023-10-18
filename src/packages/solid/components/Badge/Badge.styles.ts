import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

// styles in LUI for Badge
//  contentSpacing: theme.spacer.sm,
//  offsetY: theme.spacer.xs,
//  paddingX: theme.spacer.md + theme.spacer.xxs,
//  paddingY: theme.spacer.xs,
//  radius: theme.radius.sm,
//  strokeWidth: theme.stroke.sm,
//   textStyle: {
//     ...theme.typography.tag1,
//     textAlign: 'center'
//    }

type BadgeStyle = {
  container: {
    width: number;
    height: number;
    color: number;
    borderRadius: number;
    border: {
      width: number;
      color: number;
    };
  };
  textStyle: {
    width: number;
    textAlign: string;
    color: number;
  };
};

const styles: BadgeStyle = {
  container: {
    width: 200,
    height: theme.typography.tag1.lineHeight,
    color: getHexColor(...(theme.color.fillBrand as [string, number])),
    borderRadius: theme.radius.sm,
    border: {
      width: theme.stroke.sm,
      color: getHexColor(...(theme.color.strokeInverse as [string, number]))
    }
  },
  textStyle: {
    width: 200,
    ...theme.typography.tag1,
    textAlign: 'center'
  }
};

export default styles;
