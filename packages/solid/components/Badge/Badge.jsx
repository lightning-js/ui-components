import { View, Text } from '@lightningjs/solid';
import styles from './Badge.styles';
//import { withPadding } from '@lightningjs/solid-primitives';

// TODO: Add Icon component & padding

const Badge = props => {
  return (
    <View
      //use:withPadding={[7, 15, 13, 15]}
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
