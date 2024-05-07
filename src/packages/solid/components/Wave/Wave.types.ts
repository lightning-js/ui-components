import type { NodeStyles } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface WaveProps extends UIComponentProps {
  toggleAnimation?: boolean;
}

export interface WaveStyleProperties {
  color?: NodeStyles['color'];
  radius?: NodeStyles['borderRadius'];
  itemSpacing?: NodeStyles['itemSpacing'];
}

export interface WaveStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Rectangles: NodeStyleSet;
}

export type WaveConfig = ComponentStyleConfig<WaveStyleProperties>;
