// @ts-nocheck

import type { WithTonesModes, ComponentConfig } from 'types';
import { type NodeStyles } from '@lightningjs/solid';

export type LookupObject<T = LooseComponentConfig> = {
  [K in WithTonesModes as keyof WithTonesModes]?: LookupObjectStyleConfig<T>;
};

// export type LookupObjectStyleConfig<T = Record<string, unknown>> = Record<
//   keyof Partial<NodeStyles>,
//   { themeKey: keyof T; fallback: unknown }
// >;

export type LookupObjectStyleConfig<T = object> = {
  [K in NodeStyles as keyof NodeStyles]?: { themeKey: keyof T; fallback: unknown };
};

// TODO how do we ensure a parameter is of a generic<T>, is it just ComponentConfig<any>?
type LooseComponentConfig = ComponentConfig<WithTonesModes<LookupObjectStyleConfig>>;

// required style keys
const toneModeSet = {
  inverse: 'base',
  brand: 'base',
  focus: 'base',
  disabled: 'base',
  'neutral-focus': 'focus',
  'neutral-disabled': 'disabled',
  'inverse-focus': 'focus',
  'inverse-disabled': 'disabled',
  'brand-focus': 'focus',
  'brand-disabled': 'disabled'
};

export function makeComponentStyles(
  defaultStyles,
  lookupObject: LookupObject,
  themeStyles: LooseComponentConfig
) {
  /**
   *
   * takes an object of name/StyleConfig pairs, and assign each style in the config
   * a value of either the themeStyle[toneModeName][themeKey] or the fallback
   */
  const mapThemeStylesToSolidStyles = (
    toneModeName: keyof LookupObject,
    toneModeStyle: LookupObjectStyleConfig
  ) =>
    Object.entries(toneModeStyle).reduce(
      (toneModeStyle, [solidStyleKey, solidStyleObject]) => ({
        ...toneModeStyle,
        // themeStyles is destructured out of the componentConfig
        // TODO keys have typeof string, need to ensure they have the correct type
        [solidStyleKey]: themeStyles?.[toneModeName]?.[solidStyleObject.themeKey] || solidStyleObject.fallback
      }),
      {}
    );

  /**
   * for each key in the root of the lookup object, pass its object to mapThemeStylesToSolidStyles for formatting
   */
  const generateSolidStylesFromLookupObject = (defaultStyles, lookupObject: LookupObject) => {
    const styleObject = Object.entries(lookupObject).reduce(
      (
        /* final set of solid-formatted styles */
        styleObject,
        /* [tone/mode/toneMode, {style configs}] */
        [toneModeName, toneModeStyle]
      ) => ({
        ...styleObject,
        [toneModeName]: mapThemeStylesToSolidStyles(toneModeName as keyof LookupObject, toneModeStyle)
      }),
      defaultStyles
    );

    /* find which toneModes are missing from the final object */
    const missingToneModes = Object.keys(toneModeSet).filter(
      toneMode => !Object.keys(styleObject).includes(toneMode)
    );

    /* create missing toneModes using fallback values */
    missingToneModes.forEach(toneMode => {
      /* merge fallback object with theme.componentConfig values to create missing toneModes */
      styleObject[toneMode] = {
        ...styleObject[toneModeSet[toneMode as keyof typeof toneModeSet]],
        ...themeStyles?.[toneMode]
      };
    });

    return styleObject;
  };
  return generateSolidStylesFromLookupObject(defaultStyles, lookupObject);
}
