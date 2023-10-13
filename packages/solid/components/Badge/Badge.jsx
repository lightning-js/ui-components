import { View, Text } from '@lightningjs/solid';
import styles from './Badge.styles';
import { withPadding } from '@lightningjs/solid-primitives';

// TODO: Add Icon component

// paddingX and paddingY should use withPadding

// mountY, iconAlign, offsetY

const Badge = props => {
  return (
    <View
      use:withPadding={[7, 15, 13, 15]} // how it's implemented with <node> in demo and docs but not working with <View>
      {...props}
      style={styles.container}
      color={props.color}
      width={props.width}
    >
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
  );
};

export default Badge;
