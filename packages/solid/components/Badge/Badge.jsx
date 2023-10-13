import { Text } from '@lightningjs/solid';
import { useStyles } from '../../utils/useStyles';
import styles from './Badge.styles';
import { withPadding } from '@lightningjs/solid-primitives';

// TODO: Add Icon component

const Badge = props => {
  const padding = [styles.container.paddingY, styles.container.paddingX];
  return (
    <node
      use:withPadding={padding} // how it's implemented with <node> in demo and docs but not working with <View>
      {...props}
      style={styles.container}
      color={props.color}
      width={props.width}
    >
      <Text style={styles.textStyle}>{props.title}</Text>
    </node>
  );
};

export default Badge;
