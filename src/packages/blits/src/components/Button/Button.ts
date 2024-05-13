import Blits from '@lightningjs/blits';
import styles from './Button.styles.ts';
import type { Tone, States, JustifyContent, Align } from '../../types/types';
import { isValidTone, isValidState, isValidJustifyContent } from '../../utils/index.ts';

export type ButtonProps = {
  text: string;
  states: States;
  tone: Tone;
  justifyContent: JustifyContent;
  width: number;
  height: number;
};

type ButtonState = {
  font: string;
  fontSize: number;
  fontWeight: number;
  textAlign: Align;
  radius: number;
  lineHeight: number;
};

const Button = Blits.Component('Button', {
  props: [
    {
      key: 'text',
      default: '',
      required: false,
      cast: (v: string): string => {
        if (typeof v === 'string') return v;
        throw new Error(`Invalid text input '${v}' - must be of type string`);
      }
    },
    {
      key: 'states',
      default: 'focus',
      required: false,
      /*
       * Wanted to use validate from docs - but not yet implemented?
       * validate(v: string) {
       *   isValidState(v);
       * }
       */
      cast: (v: string): States => {
        if (isValidState(v)) return v;
        throw new Error(`Invalid state '${v}'`);
      }
    },
    {
      key: 'tone',
      default: 'neutral',
      required: false,
      cast: (v: string): Tone => {
        if (isValidTone(v)) return v;
        throw new Error(`Invalid tone '${v}'`);
      }
    },
    {
      key: 'justifyContent',
      default: 'center',
      required: false,
      cast: (v: string): JustifyContent => {
        if (isValidJustifyContent(v)) return v;
        throw new Error(`Invalid justifyContent '${v}'`);
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
      default: 100,
      required: false,
      cast: Number
    }
  ],
  template: `
    <Element :w="$width" :h="$height" :color="$containerColor" :effects="[$shader('radius', {radius: $radius})]">
      <Text
        :content="$text"
        :color="$textColor"
        :x="$width/2"
        :y="$height/2"
        :lineheight="$lineHeight"
        :size="$fontSize"
        :wordwrap="$width"
        :align="$textAlign"
        :font="$font"
        mount="{x: 0.5, y: 0.5}"
      />
    </Element>
  `,
  state(): ButtonState {
    return {
      font: styles.Text.base.fontFamily,
      fontSize: styles.Text.base.fontSize,
      fontWeight: styles.Text.base.fontWeight,
      textAlign: styles.Container.base.alignItems as Align,
      radius: styles.Container.base.borderRadius,
      lineHeight: styles.Text.base.lineHeight
    };
  },
  computed: {
    containerColor(): string {
      return styles.Container.tones[this.tone as Tone][this.states as States].color;
    },
    textColor(): string {
      return styles.Text.tones[this.tone as Tone][this.states as States].color;
    }
  }
});

export { Button as default };