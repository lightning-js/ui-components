import { IntrinsicCommonProps } from '@lightningjs/solid';
import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/getHexColor';

interface CommonStyleProps {
  display: string;
  flexDirection: string;
  justifyContent: string;
  width: number;
  height: number;
  color: Color;
  alpha: number;
  borderRadius: number;
  border: { width: number; color: Color };
  scale: number;
}

type Color = number | string;
type AnimationSettings = { duration?: number; delay?: number; timing?: string };
type TextContain = 'width' | 'height' | 'both';
type TextAlign = 'left' | 'center' | 'right';
type States = 'active' | 'focus' | 'disabled';

/**
 * allows the property to either be the supplied type,
 * or an array containing that type and an animationSettings object
 */
type Animatable<Type> = Type | [Type, AnimationSettings];

/**
 * for each key in the supplied type, make the type for that key Animatable
 */
type ComponentStyle<Type> = {
  // TODO see if we can specifically type capital keys
  [key in keyof Type]: Animatable<Type[key]>;
};

/**
 * states can contain any of the style object's properties, except other states
 */
type StateStyle<Type> = Partial<Omit<Type, States>>;

type ButtonStyle = {
  Container: ComponentStyle<{
    display: string;
    flexDirection: string;
    justifyContent: string;
    padding: number[];
    // width: number;
    // height: number;
    color: Animatable<Color>;
    alpha: Animatable<number>;
    borderRadius: number;
    focus?: StateStyle<ButtonStyle['Container']>;
    active?: StateStyle<ButtonStyle['Container']>;
    disabled?: StateStyle<ButtonStyle['Container']>;
  }>;
  Text?: ButtonTextStyle;
  Prefix?: {
    focus?: StateStyle<ButtonTextStyle>;
  };
  Suffix?: {
    mountX: number;
    focus?: StateStyle<ButtonTextStyle>;
  };
  FlexContainer?: {
    display: string;
    flexDirection: string;
    justifyContent: string;
    mountY: number;
  };
};

const styles: ButtonStyle = {
  Container: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    padding: [40, 10],
    // width: 386,
    // height: 136,
    color: getHexColor(...(theme.color.fillNeutralTertiary as [string, number])),
    alpha: theme.alpha.alpha3,
    borderRadius: 30,
    focus: {
      color: [getHexColor(...(theme.color.interactiveNeutralFocus as [string, number])), { duration: 200 }],
      alpha: [1, { duration: 200, delay: 200, timing: 'easy-in' }]
    },
    active: {
      color: '#33ff55'
    },
    disabled: {
      alpha: 1
    }
  }
};

type ButtonTextStyle = {
  fontSize: number;
  // lineHeight: number;
  // contain: TextContain;
  // mountY: number;
  textAlign: TextAlign;
  color: Animatable<Color>;
  // height: number;
  // width: number;
  focus?: StateStyle<ButtonTextStyle>;
  active?: StateStyle<ButtonTextStyle>;
  disabled?: StateStyle<ButtonTextStyle>;
};

const Text: ButtonTextStyle = {
  fontSize: 32,
  // lineHeight: styles.Container.height,
  // contain: 'width',
  // mountY: -0.35,
  textAlign: 'center',
  color: getHexColor(...(theme.color.textNeutral as [string, number])),
  // height: styles.Container.height,
  // width: styles.Container.width,
  focus: {
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

styles.Text = Text;
styles.FlexContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  mountY: -0.2
};

styles.Prefix = {
  focus: {
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

styles.Suffix = {
  mountX: 1,
  focus: {
    color: getHexColor(...(theme.color.textInverse as [string, number]))
  }
};

export default styles;
