import { type Component } from 'solid-js';
import { Text } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type LabelStyles, type LabelStyleProperties } from './Label.styles.js';
import { withPadding } from '@lightningjs/solid-primitives';
import type { Tone } from '../../types/types.js';
withPadding;

export interface LabelProps extends IntrinsicNodeProps {
  /**
   * text to display in label
   */
  title: string;

  padding: LabelStyleProperties['padding'];

  style?: Partial<LabelStyles>;

  tone?: Tone;
}

const Label: Component<LabelProps> = props => {
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        style={[
          props.style?.Text, //
          styles.Text.tones[props.tone || styles.tone],
          styles.Text.base
        ]}
      >
        {props.title}
      </Text>
    </node>
  );
};

export default Label;
