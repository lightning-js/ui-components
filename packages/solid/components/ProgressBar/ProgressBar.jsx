import { View } from '@lightningjs/solid';
import styles from './ProgressBar.styles';

// TODO TypeScript?
/**
 * @typedef {Object} Props
 * @property {object} animation
 * @property {number} progress a numeric value of the current progress represented as a decimal between 0 and 1
 * @property {string|number} barColor
 * @property {string|number} progressColor
 * @property {number} radius
 */

/**
 *
 * @param {Props} props
 * @returns Component
 */
const ProgressBar = props => {
  return (
    <View
      {...props}
      height={props.height || styles.height}
      color={props.backdropColor || styles.backdropColor}
      borderRadius={props.borderRadius || styles.borderRadius}
    >
      <View
        animate
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        borderRadius={props.borderRadius || styles.borderRadius}
        color={props.progressColor || styles.progressColor}
      />
    </View>
  );
};

export default ProgressBar;
