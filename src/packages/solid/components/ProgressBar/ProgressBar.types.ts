import type { NodeStyles } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface ProgressBarProps extends UIComponentProps, ProgressBarStyleProperties {
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;

  /**
   * color of the overlay portion of the progress bar
   */
  progressColor?: string | number;

  /**
   * total width of the component
   */
  width: number;

  /**
   * total height of the component
   */
  height?: number;

  /**
   * radius of the progress bar
   */
  radius?: number;
}

export interface ProgressBarStyleProperties {
  height?: NodeStyles['height'];
  progressColor?: NodeStyles['color'];
  barColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
}

export interface ProgressBarStyles {
  tone: Tone;
  Container: NodeStyleSet;
  ProgressBar: NodeStyleSet;
}

export type ProgressBarConfig = ComponentStyleConfig<ProgressBarStyleProperties>;
