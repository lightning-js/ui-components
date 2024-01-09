import type { ComponentStyleConfig, ToneModeFallbackMap, StyleObject, VariantList } from '../types/types.js';
import type { ObjectEntries } from '../types/object-methods.js';
import type { NodeStyles, TextStyles } from '@lightningjs/solid';

// any value capable of being assigned to a node.style.<property>
// TODO this could probably be more specific
export type SolidStyleValue = NodeStyles | TextStyles;

// required style keys
const defaultToneModeFallbackMap: ToneModeFallbackMap = {
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
}: ComponentStyleConfig) {
  /**
   * helper function to access theme.componentConfig values
   */
  const themeStyleLookup = (
    toneModeName: VariantList,
    themeKey: keyof ComponentStyleConfig['themeKeys']
  ): SolidStyleValue => themeStyles?.[toneModeName]?.[themeKey];

  const addMissingToneModes = (styleObject: StyleObject): StyleObject => {
    // need to cast Object.keys, otherwise it has type `string[]`
    const toneModeKeyArray = Object.keys(toneModeFallbackMap) as Array<keyof ToneModeFallbackMap>;

    /* find which toneModes are missing from the final object */
    const missingToneModes: Array<keyof ToneModeFallbackMap> = toneModeKeyArray.filter(
      (toneMode): boolean => !Object.keys(styleObject).includes(toneMode)
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
    toneModeName: keyof ComponentStyleConfig['toneModes'],
    toneModeStyle: ComponentStyleConfig['toneModes'],
    themeKeys: ComponentStyleConfig['themeKeys']
  ) => {
    const entries = Object.entries(toneModeStyle) as [ComponentStyleConfig['toneModes'], unknown][];
    return Object.fromEntries(
      entries.map(([solidStyleKey, solidStyleValue]) => [
        solidStyleKey,
        themeStyleLookup(toneModeName, themeKeys[solidStyleKey]) ?? solidStyleValue
      ])
    );
  };

  /**
   * creates the object of tone and mode override styles
   *
   * for each key in the toneMode object, pass its set of styles to mapThemeStylesToSolidStyles for formatting
   */
  const makeToneModeStyles = (
    baseStyles: StyleObject,
    toneModes: ComponentStyleConfig['toneModes'],
    themeKeys: ComponentStyleConfig['themeKeys']
  ): StyleObject => {
    if (!toneModes) {
      return baseStyles;
    }
    // const entries = Object.entries(toneModes) as ObjectEntries<ComponentStyleConfig['toneModes']>;
    const entries = Object.entries(toneModes) as [keyof ComponentStyleConfig['toneModes'], unknown][];
    return {
      ...baseStyles,
      ...Object.fromEntries(
        entries.map(([toneModeName, toneModeStyle]) => [
          toneModeName,
          mapThemeStylesToSolidStyles(toneModeName, toneModeStyle, themeKeys)
        ])
      )
    };
  };

  /**
   * creates a base style object
   *
   * if a property has a themeable value(has a corresponding themeKey in the themeKeys object) check the
   * componentConfig for a base value. if one exists use it, otherwise use the value from the defaults object
   */
  const makeBaseStyles = (
    baseStyles: ComponentStyleConfig['base'],
    themeKeys: ComponentStyleConfig['themeKeys']
  ): StyleObject => {
    // const entries = Object.entries(baseStyles) as ObjectEntries<ComponentStyleConfig['base']>;
    const entries = Object.entries(baseStyles) as [keyof ComponentStyleConfig['base'], unknown][];
    return Object.fromEntries(
      entries.map(([styleKey, styleValue]) => {
        const baseStyleValue = themeKeys?.[styleKey]
          ? themeStyleLookup('base', themeKeys[styleKey]) ?? styleValue
          : styleValue;
        return [styleKey, baseStyleValue];
      })
    );
  };

  const generateSolidStylesFromLookupObject = (
    baseStyleConfig: ComponentStyleConfig['base'],
    toneModes: ComponentStyleConfig['toneModes'],
    themeKeys: ComponentStyleConfig['themeKeys']
  ): StyleObject => {
    const baseStyles = makeBaseStyles(baseStyleConfig, themeKeys);

    const styleObject = makeToneModeStyles(baseStyles, toneModes, themeKeys);

    const updatedStyleObject = addMissingToneModes(styleObject); // mutates incoming object, doesn't create a new one

    return updatedStyleObject;
  };
  return generateSolidStylesFromLookupObject(base, toneModes, themeKeys);
}
