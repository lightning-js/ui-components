import theme from 'theme';
import { Color, StateStyle } from '../../../../shared/types/solid';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type LabelStyle = {
  Container: {
    color: Color;
    padding: number[];
    borderRadius: number[];
  };
  textStyle: object;
};

const styles: LabelStyle = {
  Container: {
    color: getHexColor(...(theme.color.textNeutral as [string, number])), //TODO: set states
    padding: [theme.spacer.md, theme.spacer.lg],
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none]
  },
  textStyle: {
    ...theme.typography.caption1,
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

export default styles;
