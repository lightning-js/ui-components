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
const defaultToneModeFallbackMap = {
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

export function makeComponentStyles({
  themeKeys,
  base,
  toneModes,
  themeStyles,
  toneModeFallbackMap = defaultToneModeFallbackMap
}: {
  themeKeys;
  baseStyles;
  lookupObject: LookupObject;
  themeStyles: LooseComponentConfig;
  toneModeFallbackMap;
}) {
  /**
   * helper function to access theme.componentConfig values
   */
  const themeStyleLookup = (toneModeName, themeKey) => themeStyles?.[toneModeName]?.[themeKey];

  const addMissingToneModes = styleObject => {
    /* find which toneModes are missing from the final object */
    const missingToneModes = Object.keys(toneModeFallbackMap).filter(
      toneMode => !Object.keys(styleObject).includes(toneMode)
    );

    /* create missing toneModes using fallback values */
    missingToneModes.forEach(toneMode => {
      /* merge fallback object with theme.componentConfig values to create missing toneModes */
      styleObject[toneMode] = {
        ...styleObject[toneModeFallbackMap[toneMode]],
        ...themeStyles?.[toneMode]
      };
    });

    return styleObject;
  };

  /**
   * takes an object of name/StyleConfig pairs, and assign each style in the config
   * a value of either the themeStyle[toneModeName][themeKey] or the fallback
   */
  const mapThemeStylesToSolidStyles = (
    toneModeName: keyof LookupObject,
    toneModeStyle: LookupObjectStyleConfig,
    themeKeys
  ) =>
    Object.fromEntries(
      Object.entries(toneModeStyle).map(([solidStyleKey, solidStyleValue]) => [
        solidStyleKey,
        themeStyleLookup(toneModeName, themeKeys[solidStyleKey]) ?? solidStyleValue
      ])
    );

  /**
   * creates the object of tone and mode override styles
   *
   * for each key in the root of the lookup object, pass its object to mapThemeStylesToSolidStyles for formatting
   */
  const makeToneModeStyles = (baseStyles, lookupObject, themeKeys) => ({
    ...baseStyles,
    ...Object.fromEntries(
      Object.entries(lookupObject).map(([toneModeName, toneModeStyle]) => [
        toneModeName,
        mapThemeStylesToSolidStyles(toneModeName as keyof LookupObject, toneModeStyle, themeKeys)
      ])
    )
  });

  /**
   * creates a base style object
   *
   * if a property has a themeable value(has a corresponding themeKey in the themeKeys object) check the
   * componentConfig for a base value. if one exists use it, otherwise use the value from the defaults object
   */
  const makeBaseStyles = (baseStyles, themeKeys) =>
    Object.fromEntries(
      Object.entries(baseStyles).map(([styleKey, styleValue]) => {
        const baseStyleValue = themeKeys?.[styleKey]
          ? themeStyleLookup('base', themeKeys[styleKey]) ?? styleValue
          : styleValue;
        return [styleKey, baseStyleValue];
      })
    );

  const generateSolidStylesFromLookupObject = (baseStyleConfig, lookupObject: LookupObject, themeKeys) => {
    const baseStyles = makeBaseStyles(baseStyleConfig, themeKeys);

    const styleObject = makeToneModeStyles(baseStyles, lookupObject, themeKeys);

    const updatedStyleObject = addMissingToneModes(styleObject); // mutates incoming object, doesn't create a new one

    return updatedStyleObject;
  };
  return generateSolidStylesFromLookupObject(base, toneModes, themeKeys);
}
