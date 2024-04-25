import Blits from '@lightningjs/blits'

import styles from './Button.styles.ts'

export type ButtonProps = {
  text: string;
  states: 'focus' | 'unfocused' | 'disabled';
  tone: 'neutral' | 'inverse' | 'brand';
  justifyContent: 'center' | 'flexStart' | 'flexEnd' | 'spaceBetween' | 'spaceEvenly';
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
      cast: String
    },
    {
      key: 'tone',
      default: 'neutral',
      required: false,
      cast: String
    },
    {
      key: 'justifyContent',
      default: 'center',
      required: false,
      cast: String
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
