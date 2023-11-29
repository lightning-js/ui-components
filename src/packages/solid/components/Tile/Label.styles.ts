import theme from 'theme';
import type { Color } from '../../../../shared/types/solid.js';
import { getHexColor } from 'utils';

type LabelStyle = {
  Container: {
    color: Color;
    padding: number[];
    borderRadius: number[];
    height: number;
  };
  textStyle: object;
};

const styles: LabelStyle = {
  Container: {
    display: 'flex',
    color: getHexColor(...(theme.color.textNeutral as [string, number])), //TODO: set states
    padding: [theme.spacer.md, theme.spacer.lg],
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
    height: theme.typography.caption1.lineHeight + theme.spacer.md
  },
  textStyle: {
    ...theme.typography.caption1,
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

export default styles;
