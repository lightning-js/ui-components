import Blits from '@lightningjs/blits';
import styles from './Rating.styles';
import { getTextWidth } from '../../utils/textUtils';

export type RatingProps = {
  src: string;
  title: string | number;
};

type RatingState = {
  iconProps: {
    width: number;
    height: number;
    color: string;
  };
  titleProps: {
    size: number;
    font: string;
    lineheight: number;
    color: string;
  };
  gap: number;
};

const Rating = Blits.Component('Rating', {
  props: [
    {
      key: 'src',
      required: false,
      cast: String
    },
    {
      key: 'title',
      required: false,
      cast: String
    }
  ],
  template: `
    <Element :x="$width()/2">
      <Element :src="$src" :w="$iconProps.width" :h="$iconProps.height" mount="{x:0.5}" :color="$iconProps.color" />
      <Text
        :content="$formattedTitle"
        :size="$titleProps.size"
        :font="$titleProps.font"
        :lineheight="$titleProps.lineheight"
        :color="$titleProps.color"
        :y="$iconProps.height + $gap"
        mount="{x:0.5}"
      />
    </Element>
  `,
  state(): RatingState {
    return {
      iconProps: {
        width: styles.Icon.base.width,
        height: styles.Icon.base.height,
        color: styles.Icon.base.color
      },
      titleProps: {
        size: styles.Text.base.fontSize,
        font: styles.Text.base.fontFamily,
        lineheight: styles.Text.base.lineHeight,
        color: styles.Text.base.color
      },
      gap: styles.Container.base.itemSpacing
    };
  },
  computed: {
    textWidth() {
      return getTextWidth(this.formattedTitle, this.titleProps.font, this.titleProps.size);
    },
    formattedTitle() {
      const number = parseInt(this.title);
      if (!isNaN(number) && number >= 0 && number <= 100) return `${number}%`;
      return this.title;
    }
  },
  methods: {
    width() {
      return Math.max(this.iconProps.width, this.textWidth);
    },
    height() {
      return this.iconProps.height + this.gap + this.titleProps.lineheight;
    }
  }
});

export { Rating as default };
