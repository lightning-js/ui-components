/**
 * This method accepts an element style config and returns a fully formed style object,
 * which can be directly assigned to a solid element.
 *
 * the element style config is make up of the following properties:
 * - `themeKeys` - key/value pairs defining a solid style property,
 *    and the componentConfig property it should receive.
 * - `base` - the default styles of a component
 * - `toneModes` - any tone/mode/toneMode styles that a component has
 * - `themeStyles` - the componentConfig provided by the theme
 * - `toneModeFallbackMap`(optional) - an override to the defaultToneModeFallbackMap found below
 *
 * each method below has a comment explaining it, this is a rough overview of the steps this method goes through:
 *
 * 1. generate the base component styles, merging the style file values and themeStyle values(priority to the themeStyle values)
 * 2. generate the tones and modes included in the toneModes object, again with priority to the themeStyles
 * 3. generate styles for any tones and modes not included in the toneModes object using the fallback map
 * 4. return the object to the style file
 */

// TODO how can we reduce the number of objects?
// TODO types, sub components

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
}) {
  /**
   * helper function to access theme.componentConfig values
   */
  const themeStyleLookup = (toneModeName, themeKey) => themeStyles?.[toneModeName]?.[themeKey];

  const fallBackTrace = toneModeName => toneModeFallbackMap[toneModeName];

  const addMissingToneModes = (styleObject, themeKeys) => {
    const toneModeKeyArray = Object.keys(toneModeFallbackMap);

    /* find which toneModes are missing from the final object */
    const missingToneModes = toneModeKeyArray.filter(
      toneMode => !Object.keys(styleObject).includes(toneMode)
    );
    /* create missing toneModes using fallback values */
    missingToneModes.forEach(toneMode => {
      // console.log(toneMode, styleObject);
      if (styleObject[toneModeFallbackMap[toneMode]]) {
        /* merge fallback object with theme.componentConfig values to create missing toneModes */
        styleObject[toneMode] = mapThemeStylesToSolidStyles(
          toneMode,
          styleObject[toneModeFallbackMap[toneMode]],
          themeKeys
        );
      }
    });

    return styleObject;
  };

  /**
   * takes an object of name/StyleConfig pairs, and assign each style in the config
   * a value of either the themeStyle[toneModeName][themeKey] or the fallback
   */
  const mapThemeStylesToSolidStyles = (toneModeName, toneModeStyle, themeKeys) => {
    const entries = Object.entries(toneModeStyle);
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
  const makeToneModeStyles = (baseStyles, toneModes, themeKeys) => {
    if (!toneModes) {
      return baseStyles;
    }
    const entries = Object.entries(toneModes);
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
  const makeBaseStyles = (baseStyles, themeKeys) => {
    const entries = Object.entries(baseStyles);
    return Object.fromEntries(
      entries.map(([styleKey, styleValue]) => {
        const baseStyleValue = themeKeys?.[styleKey]
          ? themeStyleLookup('base', themeKeys[styleKey]) ?? styleValue
          : styleValue;
        return [styleKey, baseStyleValue];
      })
    );
  };

  const generateSolidStylesFromLookupObject = (baseStyleConfig, toneModes, themeKeys) => {
    const baseStyles = makeBaseStyles(baseStyleConfig, themeKeys);

    const styleObject = makeToneModeStyles(baseStyles, toneModes, themeKeys);

    const updatedStyleObject = addMissingToneModes(styleObject, themeKeys); // mutates incoming object, doesn't create a new one

    return updatedStyleObject;
  };
  return generateSolidStylesFromLookupObject(base, toneModes, themeKeys);
}
