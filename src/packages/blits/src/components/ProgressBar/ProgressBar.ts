import Blits from '@lightningjs/blits';
import styles from './ProgressBar.styles';
import type { Tone } from '../../types/types';
import { ToneValues, getStyledProp, isType } from '../../utils';

export type ProgressBarProps = {
  width: number;
  height: number;
  progress: number;
  borderRadius: number;
  containerColor: string;
  progressColor: string;
  tone: Tone;
};

const ProgressBar = Blits.Component('ProgressBar', {
  props: [
    {
      key: 'tone',
      default: 'neutral',
      required: false,
      cast: (v: string): Tone => {
        if (isType<Tone>(v, ToneValues)) return v;
        throw new Error(`Invalid tone '${v}'`);
      }
    },
    {
      key: 'width',
      default: 400,
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
      key: 'progress',
      default: 0.5,
      required: false,
      cast: (v: number): number => {
        if (v < 0 || v > 1) throw new Error(`Invalid progress '${v}' - must be between 0 and 1`);
        return v;
      }
    },
    {
      key: 'borderRadius',
      required: false,
      cast: (v: number): number => {
        if (v < 0) throw new Error(`Invalid border radius '${v}' - must be greater than 0`);
        return v;
      }
    },
    {
      key: 'containerColor',
      default: null,
      required: false
    },
    {
      key: 'progressColor',
      default: null,
      required: false
    }
  ],
  template: `
    <Element :w="$width" :h="$height" :color="$progressContainerColor" :effects="[$shader('radius', {radius: $radius})]">
      <Element
        :w="$width * $progress"
        :h="$height"
        :color="$progressBarColor"
        :effects="[$shader('radius', {radius: $radius})]"
      />
    </Element>
  `,
  computed: {
    progressContainerColor(): string {
      return this.containerColor ?? getStyledProp('color', styles.Container, this.tone) ?? '#00000000';
    },
    progressBarColor(): string {
      return this.progressColor ?? getStyledProp('color', styles.ProgressBar, this.tone) ?? '#fff';
    },
    radius(): number {
      return this.borderRadius ?? getStyledProp('borderRadius', styles.Container, this.tone) ?? 0;
    }
  }
});

export { ProgressBar as default };
