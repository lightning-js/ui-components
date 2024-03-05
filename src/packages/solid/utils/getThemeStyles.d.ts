import { ComponentStyleConfig } from '../types/types.js';

export declare function makeComponentStyles<T>(
  { themeKeys, base, tones, modes, themeStyles, modeKeys, toneKeys }: ComponentStyleConfig,
  debug?: boolean
): T;
