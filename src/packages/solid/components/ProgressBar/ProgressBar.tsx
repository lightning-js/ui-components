/** @jsxImportSource solid-js */
import type { Component } from 'solid-js';
import { View } from '@lightningjs/solid';
import styles from './ProgressBar.styles';

type ProgressBarProps = {
  animationSettings: object;
  borderRadius: number;
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;
  /**
   * color of the backdrop bar, representing the total progress
   */
  color: number;
  /**
   * color of the overlay bar, representing the current progress
   */
  progressColor: number;
  /**
   * total width of the component
   */
  width: number;
  
}

const ProgressBar: Component<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <View
      style={styles.container}
      {...props}
    >
      <View
        style={styles.progressBar}
        // @ts-expect-error remove when animate is added to View
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
