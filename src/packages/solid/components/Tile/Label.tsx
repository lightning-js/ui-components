import { Component } from 'solid-js';
import { Text } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import styles from './Label.styles';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding;

export interface LabelProps extends LabelStyleProps, IntrinsicNodeProps {
  /**
   * text to display in label
   */
  title: string;
}

export interface LabelStyleProps {
  color?: number;
  borderRadius?: number;
}

const Label: Component<LabelProps> = props => {
  return (
    <node
      use:withPadding={styles.Container.padding}
      {...props}
      style={styles.Container}
      animate
      forwardStates
    >
      <Text style={styles.textStyle}>{props.title}</Text>
    </node>
  );
};

export default Label;
