import { type Component } from 'solid-js';
import { Text } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type LabelStyles } from './Label.styles.js';
import { withPadding } from '@lightningjs/solid-primitives';
import type { Tone } from 'types';
withPadding;

export interface LabelProps extends IntrinsicNodeProps {
  /**
   * text to display in label
   */
  title: string;

  style?: Partial<LabelStyles>;

  tone?: Tone;
}

const Label: Component<LabelProps> = props => {
  return (
    <node
      use:withPadding={props?.style?.Container?.padding ?? styles.Container.padding}
      {...props}
      style={[
        ...[props.style].flat(),
        props.style?.Container,
        props.style?.Container?.[props.tone || styles.tone],
        styles.Container,
        styles.Container?.[props.tone || styles.tone]
      ]}
      states={props.tone ?? styles.tone}
      tone={props.tone ?? styles.tone}
      forwardStates
    >
      <Text
        style={[
          props.style?.Text,
          props.style?.Text?.[props.tone || styles.tone],
          styles.Text,
          styles.Text[props.tone || styles.tone]
        ]}
        tone={props.tone ?? styles.tone}
        states={props.tone ?? styles.tone}
      >
        {props.title}
      </Text>
    </node>
  );
};

export default Label;
