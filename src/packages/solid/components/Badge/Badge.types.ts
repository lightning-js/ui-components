import type { NodeStyles, TextProps } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone, TextStyleSet } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface BadgeProps extends UIComponentProps, BadgeStyleProperties {
  /**
   * Badge text
   */
  title?: TextProps['children'];
}

export type BadgeStyleProperties = Partial<{
  backgroundColor: NodeStyles['color'];
  textColor: NodeStyles['color'];
  iconColor: NodeStyles['color'];
  strokeColor: NodeStyles['color']; // TODO do we use this?
  borderColor: NodeStyles['color'];
}>
export interface BadgeStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Icon: NodeStyleSet;
  Text: TextStyleSet;
}

export type BadgeConfig = ComponentStyleConfig<BadgeStyleProperties>;
