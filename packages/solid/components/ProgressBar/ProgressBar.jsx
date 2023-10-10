import { View } from '@lightningjs/solid';
import { useStyles } from '../../utils';
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
  const [mergedProps, dimensions] = useStyles(props, styles);
  return (
    <View {...mergedProps}>
      <View
        width={dimensions.width}
        effects={mergedProps.effects}
        color={mergedProps.backdropColor}
        height={dimensions.height}
      />
      <View
        width={dimensions.width * mergedProps.progress}
        effects={mergedProps.effects}
        height={mergedProps.height}
        color={mergedProps.overlayColor}
      />
    </View>
  );
};

export default ProgressBar;
