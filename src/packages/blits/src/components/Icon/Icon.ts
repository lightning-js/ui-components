import Blits from '@lightningjs/blits';
import styles from './Icon.styles';
import { Tone } from '../../types/types';
import { UnrequiredString, getStyledProp, isValidTone } from '../../utils';

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
      cast: Number
    },
    {
      key: 'height',
      default: styles.Container.base.height,
      cast: Number
    },
    {
      key: 'iconSrc',
      cast: UnrequiredString
    },
    {
      key: 'iconColor',
      cast: UnrequiredString
    },
    {
      key: 'tone',
      default: 'neutral',
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
      return this.iconColor ?? getStyledProp('color', styles.Container, this.tone) ?? '#fff';
    }
  }
});

export { Icon as default };
