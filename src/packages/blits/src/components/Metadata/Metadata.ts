import Blits from '@lightningjs/blits';
import styles from './Metadata.styles';
import { States, Tone } from '../../types/types';
import { getStyledProp } from '../../utils/styleUtils';
import Details, { DetailsProps } from './Details';
import { UnrequiredString, isValidState, isValidTone } from '../../utils';

export type MetadataProps = {
  title: string;
  description: string;
  maxLines: number;
  details?: DetailsProps;
  width: number;
  tone: Tone;
  states: States;
};

type MetadataState = {
  titleProps: {
    size: number;
    lineheight: number;
    font: string;
    maxlines: number;
  };
  descriptionProps: {
    size: number;
    lineheight: number;
    font: string;
  };
};

const Metadata = Blits.Component('Metadata', {
  props: [
    {
      key: 'title',
      cast: UnrequiredString
    },
    {
      key: 'description',
      cast: UnrequiredString
    },
    {
      key: 'maxLines',
      default: 3,
      cast: Number
    },
    {
      key: 'width',
      default: 770,
      cast: Number
    },
    {
      key: 'states',
      default: 'focus',
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
      key: 'details',
      cast: (v: unknown) => {
        if (!v || typeof v === 'object') return v;
        throw new Error(`Invalid details object '${v}'`);
      }
    }
  ],
  components: {
    Details
  },
  template: `
    <Element :alpha="$containerAlpha">
      <Text
        :content="$title"
        :size="$titleProps.size"
        :lineheight="$titleProps.lineheight"
        :font="$titleProps.font"
        :maxlines="$titleProps.maxlines"
        :wordwrap="$width"
        :color="$titleColor"
      />
      <Text
        :y="$titleProps.lineheight"
        :content="$description"
        :size="$descriptionProps.size"
        :lineheight="$descriptionProps.lineheight"
        :font="$descriptionProps.font"
        :maxlines="$maxLines"
        :wordwrap="$width"
        :color="$descriptionColor"
      />
      <Details
        ref="details"
        :width="$width"
        :y="$titleProps.lineheight + $descriptionProps.lineheight * ($maxLines + 1)"
        :title="$details?.title"
        :badges="$details?.badges"
        :ratings="$details?.ratings"
        :tone="$tone"
        :states="$states"
      />
    </Element>
  `,
  state(): MetadataState {
    return {
      titleProps: {
        size: styles.TitleText.base.fontSize,
        lineheight: styles.TitleText.base.lineHeight,
        font: styles.TitleText.base.fontFamily,
        maxlines: styles.TitleText.base.maxLines
      },
      descriptionProps: {
        size: styles.DescriptionText.base.fontSize,
        lineheight: styles.DescriptionText.base.lineHeight,
        font: styles.DescriptionText.base.fontFamily
      }
    };
  },
  computed: {
    containerAlpha(): number {
      return getStyledProp('alpha', styles.Container, this.tone, this.states) ?? 1;
    },
    titleColor(): string {
      return getStyledProp('color', styles.TitleText, this.tone, this.states) ?? '#fff';
    },
    descriptionColor(): string {
      return getStyledProp('color', styles.DescriptionText, this.tone, this.states) ?? '#fff';
    }
  }
});

export { Metadata as default };
