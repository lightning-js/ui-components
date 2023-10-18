import type { Component } from 'solid-js';
import { Text, View } from '@lightningjs/solid';
import styles from './Badge.styles';
import { withPadding } from '@lightningjs/solid-primitives';

// TODO: Add Icon component
// props in LUI: title, icon, iconAlign, iconWidth, iconHeight

type BadgeProps = {
  /**
   * Badge text
   */
  title: string;
};

// use <Show> to conditionally show icons &/or text?

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  return (
    <node {...props} use:withPadding={[20, 30]} style={styles.container}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </node>
  );
};

export default Badge;
