import { View, Text } from '@lightningjs/solid';
import styles from './Badge.styles';

const Badge = props => {
  // TODO: add Icon component
  console.log('Badge props', props);
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
  );
};

export default Badge;
