import Blits from '@lightningjs/blits';
import styles from './Details.styles';
import Badge, { BadgeProps } from '../Badge/Badge';
import { getStyledProp } from '../../utils/styleUtils';
import { getTextWidth } from '../../utils/textUtils';
import Rating, { RatingProps } from './Rating';
import { getFlexRects, getMaxHeight, type FlexRect, isValidState, isValidTone } from '../../utils';
import { States, Tone } from '../../types/types';

export type DetailsProps = {
  badges?: BadgeProps[];
  ratings?: RatingProps[];
  title?: string;
};

type DetailsState = {
  titleProps: {
    font: string;
    size: number;
    lineheight: number;
  };
  badgeProps: {
    gap: number;
    height: number;
    rects: FlexRect[];
    x: number;
  };
  ratingProps: {
    gap: number;
    height: number;
    rects: FlexRect[];
    x: number;
  };
  gap: number;
};

const Details = Blits.Component('Details', {
  props: [
    {
      key: 'states',
      default: 'focus',
      required: false,
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
      key: 'width',
      required: false,
      default: 770,
      cast: Number
    },
    {
      key: 'badges',
      required: false,
      cast: (v: unknown) => {
        if (Array.isArray(v)) return v;
        throw new Error('Badges must be an array');
      }
    },
    {
      key: 'ratings',
      required: false,
      cast: (v: unknown) => {
        if (Array.isArray(v)) return v;
        throw new Error('Ratings must be an array');
      }
    },
    {
      key: 'title',
      required: false,
      cast: String
    }
  ],
  components: {
    Badge,
    Rating
  },
  template: `
    <Element :w="$width" :h="$height">
      <Text
        :show="!!$title"
        :content="$title"
        :font="$titleProps.font"
        :size="$titleProps.size"
        :lineheight="$titleProps.lineheight"
        :color="$titleColor"
        :y="$height/2"
        mount="{y: 0.5}"
      />
    
      <Element :x="$badgeProps.x" :h="$badgeProps.height" :y="$height/2" mount="{y: 0.5}">
        <Component
          is="Badge"
          :for="(item, index) in $badges"
          index="$index"
          ref="badge"
          key="$index"
          :title="$item.title"
          :iconColor="$item.iconColor"
          :iconSrc="$item.iconSrc"
          :iconAlign="$item.iconAlign"
          :tone="$item.tone ?? $tone"
          :states="$item.states ?? $states"
          :x="$badgeProps.rects[$index]?.x ?? 0"
        />
      </Element>
    
      <Element :x="$ratingProps.x" :h="$ratingProps.height" :y="$height/2" mount="{y: 0.5}">
        <Component
          is="Rating"
          :for="(item, index) in $ratings"
          index="$index"
          title="$item.title"
          src="$item.src"
          ref="rating"
          key="$index"
          :x="$ratingProps.rects[$index]?.x ?? 0"
        />
      </Element>
    </Element>
  `,
  state(): DetailsState {
    return {
      titleProps: {
        font: styles.Text.base.fontFamily,
        size: styles.Text.base.fontSize,
        lineheight: styles.Text.base.lineHeight
      },
      badgeProps: {
        gap: styles.Container.base.badgeContentSpacing,
        height: 0,
        rects: [],
        x: 0
      },
      ratingProps: {
        gap: styles.Container.base.ratingContentSpacing,
        height: 0,
        rects: [],
        x: 0
      },
      gap: styles.Container.base.contentSpacing
    };
  },
  computed: {
    titleColor(): string {
      return getStyledProp('color', styles.Text, this.tone, this.states) as string;
    },
    titleWidth(): number {
      if (!this.title) return 0;
      return getTextWidth(this.title, this.titleProps.font, this.titleProps.size);
    },
    height(): number {
      return Math.max(this.badgeProps.height, this.ratingProps.height, this.titleProps.lineheight);
    },
    badgeCount(): number {
      return this.badges ? Object.keys(this.badges).length : 0;
    },
    ratingCount(): number {
      return this.ratings ? Object.keys(this.ratings).length : 0;
    }
  },
  watch: {
    // watch for changes to any element to recalculate flex
    titleWidth() {
      this.calculateFlex();
    },
    badgeCount() {
      this.generateBadgeRects();
      this.calculateFlex();
    },
    ratingCount() {
      this.generateRatingRects();
      this.calculateFlex();
    }
  },
  hooks: {
    ready() {
      // generate initial rects and flex after components are initialised
      this.generateBadgeRects();
      this.generateRatingRects();
      this.calculateFlex();
    }
  },
  methods: {
    // generate rect objects for each badge and get the maxHeight of them
    generateBadgeRects(this) {
      if (!this.badges) {
        this.badgeProps.rects = [];
        this.badgeProps.height = 0;
        return;
      }
      this.badgeProps.rects = getFlexRects(
        this,
        'badge',
        Object.keys(this.badges).length,
        this.badgeProps.gap
      );
      this.badgeProps.height = getMaxHeight(this.badgeProps.rects);
    },
    // generate rect objects for each rating and get the maxHeight of them
    generateRatingRects(this) {
      if (!this.ratings) {
        this.ratingProps.rects = [];
        this.ratingProps.height = 0;
        return;
      }
      this.ratingProps.rects = getFlexRects(
        this,
        'rating',
        Object.keys(this.ratings).length,
        this.ratingProps.gap
      );
      this.ratingProps.height = getMaxHeight(this.ratingProps.rects);
    },
    // get x positions for badges and ratings based on their sizing
    calculateFlex() {
      this.badgeProps.x = this.title ? this.titleWidth + this.gap : 0;
      const lastBadge: FlexRect | null =
        this.badgeProps.rects.length > 0 && this.badgeProps.rects[this.badgeProps.rects.length - 1];
      this.ratingProps.x =
        this.badgeProps.x + (lastBadge && (lastBadge.x ?? 0) + (lastBadge.w ?? 0) + this.gap);
    }
  }
});

export { Details as default };
