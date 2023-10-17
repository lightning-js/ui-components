import { Show } from 'solid-js';
import type { Component } from 'solid-js';
import { View, Text, IntrinsicCommonProps } from '@lightningjs/solid';
import styles from './Button.styles';

/**
 * Primary UI component for user interaction
 */

const Button: Component<IntrinsicCommonProps> = (props) => {
  return (
    <View
      {...props}
      style={styles.container}
      animate
      forwardStates
    >
      <Show when={props.children}>
        <Text style={styles.Text}>
          {props.children}
        </Text>
      </Show>
    </View>
  );
}

export default Button;
