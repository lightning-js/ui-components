import Blits from '@lightningjs/blits'

import styles from './Button.styles.js'

const Button = Blits.Component('Button', {
  props: ['text', 'states', 'tone', 'justifyContent', 'width', 'height'],
  template: `
    <Element :w="$width" :h="$height" :color="$containerColor" :effects="[$shader('radius', {radius: $radius})]">
      <Element :w="$width" :h="$fontSize" :x="$width/2" :y="$height/2" mount="{x: 0.5, y: 0.5}">
        <Text :content="$text" :color="$textColor" :size="$fontSize" :wordwrap="$width" :align="$textAlign" />
      </Element>
    </Element>
  `,
  hooks: {
    ready() {
      console.log(styles)
    },
  },
  state() {
    return {
      font: styles.Text.base.fontFamily, // bug: different font messes up centering
      fontSize: styles.Text.base.fontSize,
      fontWeight: styles.Text.base.fontWeight,
      textAlign: styles.Container.base.alignItems,
      radius: styles.Container.base.borderRadius,
    }
  },
  computed: {
    containerColor() {
      if (this.states === 'unfocused') {
        if (this.tone === 'neutral') return styles.Container.base.color
        return styles.Container.tones[this.tone].color
      }
      return styles.Container.tones[this.tone][this.states].color
    },
    textColor() {
      if (this.states === 'unfocused') {
        if (this.tone === 'neutral') return styles.Text.base.color
        return styles.Text.tones[this.tone].color
      }
      return styles.Text.tones[this.tone][this.states].color
    },
  },
})

export { Button as default }
