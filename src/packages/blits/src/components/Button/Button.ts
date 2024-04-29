import Blits from '@lightningjs/blits'
import styles from './Button.styles.ts'

// Type definitions + type guards for Tone/States/JustifyContent
const ToneValues = ['neutral', 'inverse', 'brand'] as const;
type Tone = typeof ToneValues[number];
function isValidTone(v: unknown): v is Tone {
  return typeof v === 'string' && ToneValues.includes(v as Tone);
}

const StatesValues = ['focus', 'unfocused', 'disabled'] as const;
type States = typeof StatesValues[number];
function isValidState(v: unknown): v is States {
  return typeof v === 'string' && StatesValues.includes(v as States);
}

const JustifyContentValues = ['center', 'flexStart', 'flexEnd', 'spaceBetween', 'spaceEvenly'] as const;
type JustifyContent = typeof JustifyContentValues[number];
function isValidJustifyContent(v: unknown): v is JustifyContent {
  return typeof v === 'string' && JustifyContentValues.includes(v as JustifyContent);
}

export type ButtonProps = {
  text: string;
  states: States;
  tone: Tone;
  justifyContent: JustifyContent;
  width: number;
  height: number;
}

type ButtonState = {
  font: string;
  fontSize: number;
  fontWeight: number;
  textAlign: 'left' | 'center' | 'right';
  radius: number;
  lineHeight: number;
}

const Button = Blits.Component('Button', {
  props: [
    {
      key: 'text',
      default: '',
      required: false,
      cast: String
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
      cast: (v: string) => {
        if (isValidState(v)) return v;
        throw new Error(`Invalid state '${v}'`);
      }
    },
    {
      key: 'tone',
      default: 'neutral',
      required: false,
      cast: (v: string) => {
        if (isValidTone(v)) return v;
        throw new Error(`Invalid tone '${v}'`);
      }
    },
    {
      key: 'justifyContent',
      default: 'center',
      required: false,
      cast: (v: string) => {
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
      textAlign: styles.Container.base.alignItems,
      radius: styles.Container.base.borderRadius,
      lineHeight: styles.Text.base.lineHeight,
    }
  },
  computed: {
    containerColor(): string {
      if (this.states === 'unfocused') {
        if (this.tone === 'neutral') return styles.Container.base.color
        return styles.Container.tones[this.tone].color
      }
      return styles.Container.tones[this.tone][this.states].color
    },
    textColor(): string {
      if (this.states === 'unfocused') {
        if (this.tone === 'neutral') return styles.Text.base.color
        return styles.Text.tones[this.tone].color
      }
      return styles.Text.tones[this.tone][this.states].color
    },
  },
})

export { Button as default }
