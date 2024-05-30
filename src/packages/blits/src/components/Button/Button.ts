import Blits from '@lightningjs/blits';
import styles from './Button.styles.ts';
import type { Tone, States, JustifyContent, Align } from '../../types/types';
import { isValidTone, isValidState, isValidJustifyContent, getStyledProp, UnrequiredString } from '../../utils/index.ts';

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
      cast: UnrequiredString
    },
    {
      key: 'states',
      default: 'focus',
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
      cast: (v: string): Tone => {
        if (isValidTone(v)) return v;
        throw new Error(`Invalid tone '${v}'`);
      }
    },
    {
      key: 'justifyContent',
      default: 'center',
      cast: (v: string): JustifyContent => {
        if (isValidJustifyContent(v)) return v;
        throw new Error(`Invalid justifyContent '${v}'`);
      }
    },
    {
      key: 'width',
      default: 400,
      cast: Number
    },
    {
      key: 'height',
      default: 100,
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
      return getStyledProp('color', styles.Container, this.tone, this.states) ?? '#00000000';
    },
    textColor(): string {
      return getStyledProp('color', styles.Text, this.tone, this.states) ?? '#fff';
    }
  }
});

export { Button as default };
