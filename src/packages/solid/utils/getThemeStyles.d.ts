import { ComponentStyleConfig } from '../types/types.js';
import { NodeStyleSet, TextStyleSet } from '../types/types.js';

export declare function makeComponentStyles<T extends NodeStyleSet | TextStyleSet>(
  { themeKeys, base, toneModes, themeStyles, toneModeFallbackMap }: ComponentStyleConfig,
  debug?: boolean
): T;
