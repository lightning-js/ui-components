import type { NodeStyles, IntrinsicNodeProps } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface IconProps extends UIComponentProps {
  /**
   * icon color (can only be applied on png icons)
   */
  color?: UIComponentProps['color'];

  /**
   * icon height
   */
  height?: IntrinsicNodeProps['height'];

  /**
   * path to image or inline SVG XML
   */
  src?: IntrinsicNodeProps['src'];

  /**
   * icon width
   */
  width?: IntrinsicNodeProps['width'];
}

export interface IconStyleProperties {
  /**
   * icon color
   */
  color?: NodeStyles['color'];
}

export interface IconStyles {
  tone: Tone;
  Container: NodeStyleSet;
}

export type IconConfig = ComponentStyleConfig<IconStyleProperties>;
