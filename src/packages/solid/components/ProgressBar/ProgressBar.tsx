import { View } from '@lightningjs/solid';
import styles from './ProgressBar.styles';

type ProgressBarProps = {
  animationSettings: object,
  borderRadius: number
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number,
  barColor: number,
  progressColor: number,
  width: number;
  
}

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <View
      style={styles.container}
      {...props}
    >
      <View
        style={styles.progressBar}
        animate
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        borderRadius={props.borderRadius}
        color={props.progressColor}
      />
    </View>
  );
};

export default ProgressBar;
