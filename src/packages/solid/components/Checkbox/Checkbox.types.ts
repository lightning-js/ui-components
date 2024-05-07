import type { NodeProps, NodeStyles } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface CheckboxProps extends UIComponentProps, CheckboxStyleProperties {
  /**
   * Indicates whether the checkbox is checked or unchecked.
   * Setting this to `true` will check the checkbox, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
  children?: NodeProps['children'];
}

export interface CheckboxStyleProperties {
  /**
   * color of background then checkbox is checked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColorChecked?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (checked.color)
  /**
   * color of background when checkbox is unchecked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];
  radius?: NodeStyles['borderRadius'];
  border?: NodeStyles['border'];
  justifyContent?: NodeStyles['justifyContent'];
  /**
   * color of border around checkbox
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  strokeColor?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
  strokeWidth?: NodeStyles['borderWidth']; // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
  /**
   * width of icon in the checkbox
   */
  checkWidth?: NodeStyles['width'];
  /**
   * height of icon in the checkbox
   */
  checkHeight?: NodeStyles['height'];
}

export interface CheckboxStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Icon: NodeStyleSet;
}

export type CheckboxModes = 'checked' | 'focus' | 'disabled';

export type CheckboxConfig = ComponentStyleConfig<CheckboxStyleProperties, CheckboxModes>;
