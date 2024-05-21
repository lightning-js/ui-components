import type { NodeProps, NodeStyles, BorderStyleObject } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface ToggleProps extends UIComponentProps, ToggleStyleProperties {
  /**
   * Indicates whether the Toggle is checked or unchecked.
   * Setting this to `true` will check the toggle, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
  children?: NodeProps['children'];
}

export interface ToggleStyleProperties {
  /**
   * color of background when toggle is unchecked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */

  backgroundColor?: NodeStyles['color'];

  /**
   * color of background then toggle is checked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColorChecked?: NodeStyles['color'];

  /**
   * width of the knob inside the toggle
   */
  knobWidth?: NodeStyles['width'];

  /**
   * height of the knob inside the toggle
   */
  knobHeight?: NodeStyles['height'];

  /**
   * padding around the knob inside the toggle
   */
  knobPadding?: number;

  /**
   * radius of the knob of toggle
   */
  knobRadius?: NodeStyles['borderRadius'];

  /**
   * Color of the knob when unchecked
   */
  knobColor?: NodeStyles['color'];

  /**
   * Color of the knob when checked
   */
  knobColorChecked?: NodeStyles['color'];

  // /**
  //  * color of border around toggle
  //  *
  //  * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
  //  */
  // strokeColor?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
  // /**
  //  * color of border around toggle when checked
  //  *
  //  * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
  //  */
  // strokeColorChecked?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)

  /**
   * radius of the outer border of toggle
   */
  strokeRadius?: NodeStyles['borderRadius'];
  // /**
  //  * width of border around toggle
  //  */
  // strokeWidth?: NodeStyles['borderWidth'];
}

export interface ToggleStyles {
  tone: Tone;
  Container: NodeStyleSet<{ border: BorderStyleObject; colorChecked: NodeStyles['color'] }>;
  Knob: NodeStyleSet<{ padding: number; colorChecked: NodeStyles['color'] }>;
}

export type ToggleConfig = ComponentStyleConfig<ToggleStyleProperties>;
