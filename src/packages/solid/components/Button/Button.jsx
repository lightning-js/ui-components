import { View, Text } from '@lightningjs/solid';
import theme from 'theme';

/**
 * Primary UI component for user interaction
 */

const styles = {
  container: {
    width: 386,
    height: 136,
    color: theme.color.black[0],
    alpha: theme.alpha.alpha3,
    borderRadius: 30,
    border: { width: 5, color: '#ee6d04' },
    scale: 1,
    focus: {
      color: ['#58807d', { duration: 2000 }],
      scale: 1.2,
      border: { width: 5, color: '#ff0000' },
      alpha: [1, { duration: 1500, delay: 200, timing: 'easy-in' }]
    },
    active: {
      color: '#33ff55'
    },
    disabled: {
      alpha: 1
    }
  }
};

styles.text = {
  fontSize: 32,
  lineHeight: styles.container.height,
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: '#F6F6F9',
  height: styles.container.height,
  width: styles.container.width,
  focus: {
    fontSize: 64
  }
};

export default function Button(props) {
  return (
    <View {...props} forwardStates animate style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}
