import type { NodeProps, NodeStyles, TextProps, TextStyles } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface ButtonProps extends UIComponentProps {
  children: TextProps['children'];
}

export interface ButtonContainerProps extends UIComponentProps {
  children: NodeProps['children'];
}

export interface ButtonStyleProperties {
  backgroundColor?: NodeStyles['color'];
  radius?: NodeStyles['borderRadius'];
  contentColor?: NodeStyles['color'];
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
  padding?: number[];
}

export interface ButtonStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Content: NodeStyleSet;
  Text: TextStyleSet;
}

export type ButtonConfig = ComponentStyleConfig<ButtonStyleProperties>;
