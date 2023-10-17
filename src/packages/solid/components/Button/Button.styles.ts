import theme from 'theme';

type Color = number | string;
type AnimationSettings = { duration?: number; delay?: number; timing?: string };
type TextContain = 'width' | 'height' | 'both';
type TextAlign = 'left' | 'center' | 'right';
type Animatable<T> = T | [T, AnimationSettings];

type ButtonStyle = {
  container: {
    width: number;
    height: number;
    color: Color;
    alpha: number;
    borderRadius: number;
    border: { width: number; color: Color };
    scale: number;
    focus: {
      color: Animatable<Color>;
      scale: number;
      border: { width: number; color: Color };
      alpha: Animatable<number>;
    };
    active: {
      color: Color;
    };
    disabled: {
      alpha: number;
    };
  };
  Text?: ButtonTextStyle;
};

type ButtonTextStyle = {
  fontSize: number;
  lineHeight: number;
  contain: TextContain;
  textAlign: TextAlign;
  mountY: number;
  color: Color;
  height: number;
  width: number;
  focus: {
    fontSize: number;
  };
};

const styles: ButtonStyle = {
  container: {
    width: 386,
    height: 136,
    color: theme.color.black[0],
    alpha: theme.alpha.alpha3,
    borderRadius: 30,
    border: { width: 5, color: '#ee6d04' },
    scale: 1,
    focus: {
      color: ['#58807d', { duration: 2000 }],
      scale: 1.2,
      border: { width: 5, color: '#ff0000' },
      alpha: [1, { duration: 1500, delay: 200, timing: 'easy-in' }]
    },
    active: {
      color: '#33ff55'
    },
    disabled: {
      alpha: 1
    }
  }
};

const Text: ButtonTextStyle = {
  fontSize: 32,
  lineHeight: styles.container.height,
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: '#F6F6F9',
  height: styles.container.height,
  width: styles.container.width,
  focus: {
    fontSize: 64
  }
};

styles.Text = Text;

export default styles;
