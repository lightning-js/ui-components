import type { WithTonesModes, Tone } from 'types';
import { type TextStyles, type NodeStyles } from '@lightningjs/solid';

export type LookupObject = Record<
  keyof WithTonesModes<object>,
  Record<
    keyof NodeStyles,
    {
      themeKey: string;
      fallback: unknown;
    }
  >
>;

export const makeComponentStyles = (lookupObject, themeStyles) => {
  /**
   *
   * takes an object of name/StyleConfig pairs, and assign each style in the config
   * a value of either the themeStyle[toneModeName][themeKey] or the fallback
   */
  const mapThemeStylesToSolidStyles = (toneModeName, toneModeStyle) =>
    Object.entries(toneModeStyle).reduce(
      (toneModeStyle, [solidStyleKey, solidStyleObject]) => ({
        ...toneModeStyle,
        // themeStyles is destructured out of the componentConfig
        [solidStyleKey]: themeStyles?.[toneModeName]?.[solidStyleObject.themeKey] || solidStyleObject.fallback
      }),
      {}
    );

  /**
   * for each key in the root of the lookup object, pass its object to mapThemeStylesToSolidStyles for formatting
   */
  const generateSolidStylesFromLookupObject = lookupObject => {
    return Object.entries(lookupObject).reduce(
      (
        styleObject /* final set of solid-formatted styles */,
        [toneModeName, toneModeStyle] /* [tone/mode/toneMode, {style configs}] */
      ) => ({
        ...styleObject,
        [toneModeName]: mapThemeStylesToSolidStyles(toneModeName, toneModeStyle)
      }),
      {}
    );
  };
};
