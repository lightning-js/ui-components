import theme from 'theme';
import type { ContentAlign, StateStyle } from '../../../../shared/types/solid.js';
import { getHexColor } from 'utils';

const styles = {
  Container: {
    width: 400,
    height: 240,
    padding: [40, 10],
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    borderRadius: theme.radius.md,
    alpha: theme.alpha.primary,
    //color: getHexColor(...(theme.color.interactiveNeutralFocusSoft as [string, number])),
    focus: {
      //color: getHexColor(...(theme.color.interactiveNeutralFocusSoft as [string, number]))
/*       tone: {
        inverse: {
          color: getHexColor(...theme.color.interactiveInverseFocusSoft as [string, number])),
        },
        brand: {
          contentColor: getHexColor(...(theme.color.interactiveBrandFocusSoft as [string, number]))
        }
      } */
    },
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  insetBottom: {
    display: 'flex',
    mountY: 1,
    flexDirection: 'column',
    alignItems: ''
  },
  LogoContainer: {
    width: theme.spacer.lg * 5,
    height: theme.spacer.xxl + theme.spacer.md
  }
} as const;

export default styles;


