import Blits from '@lightningjs/blits';
import styles from './Icon.styles';
import { Tone } from '../../types/types';
import { getStyledProp, isValidTone } from '../../utils';

export type IconProps = {
  width?: number;
  height?: number;
  iconSrc: string;
  iconColor?: string;
  tone?: Tone;
};

const Icon = Blits.Component('Icon', {
  props: [
    {
      key: 'width',
      default: styles.Container.base.width,
      required: false,
      cast: Number
    },
    {
      key: 'height',
      default: styles.Container.base.height,
      required: false,
      cast: Number
    },
    {
      key: 'iconSrc',
      required: true
    },
    {
      key: 'iconColor',
      required: false
    },
    {
      key: 'tone',
      default: 'neutral',
      required: false,
      cast: (v: string): Tone => {
        if (isValidTone(v)) return v;
        throw new Error(`Invalid tone '${v}'`);
      }
    }
  ],
  template: `
    <Element :w="$width" :h="$height" :src="$iconSrc" :color="$color" />
  `,
  computed: {
    color(): string {
      return this.iconColor ?? (getStyledProp('color', styles.Container, this.tone) as string);
    }
  }
});

export { Icon as default };
