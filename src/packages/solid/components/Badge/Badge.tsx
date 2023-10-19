import type { Component } from 'solid-js';
import { Text, View } from '@lightningjs/solid';
import styles from './Badge.styles';
import { withPadding } from '@lightningjs/solid-primitives';
withPadding; // Preserve the import.

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
  // NOTE: directive needs to be before props
  return (
    <node use:withPadding={[20, 30]} {...props} style={styles.container}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </node>
  );
};

export default Badge;
