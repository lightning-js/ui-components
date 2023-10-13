import type { Component } from 'solid-js';
import { Text, View } from '@lightningjs/solid';
import styles from './Badge.styles';
//import { withPadding } from '@lightningjs/solid-primitives';

// TODO: Add Icon component

type BadgeProps = {
  /**
   * color of the backdrop bar, representing the total progress
   */
  color: number;
  /**
   * total width of the component
   */
  width: number;
  /**
   * Badge text
   */
  title: string;
};

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  //const padding = [styles.container.paddingY, styles.container.paddingX];
  return (
    <View
      //use:withPadding={padding}
      {...props}
      style={styles.container}
      color={props.color}
      width={props.width}
    >
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

export default Badge;
