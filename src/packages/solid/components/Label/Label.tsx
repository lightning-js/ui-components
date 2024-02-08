import { type Component } from 'solid-js';
import { Text } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import styles from './Label.styles.js';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

export interface LabelProps extends IntrinsicNodeProps {
  /**
   * text to display in label
   */
  title: string;
}

const Label: Component<LabelProps> = props => {
  return (
    <node
      use:withPadding={styles.Container.padding}
      {...props}
      style={styles.Container}
      tone={props.tone ?? styles.tone}
      animate
      forwardStates
    >
      <Text style={styles.Text} tone={props.tone ?? styles.tone}>
        {props.title}
      </Text>
    </node>
  );
};

export default Label;
