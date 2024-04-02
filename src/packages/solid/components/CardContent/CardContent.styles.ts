/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TextStyles, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from '../../types/types.js';
import { makeComponentStyles, getDimensions, getWidthByUpCount } from '../../utils/index.js';

/**
 * replace all instances of `Component` (as in ComponentStyle) with the component's name
 * ex. Button -> ButtonStyle
 */

// includes the tone and all returned style sets, usually one per element
export interface CardContentStyles {
  tone: Tone;
  ArtworkContainer: NodeStyleSet<{ padding: number[] }>;
  Container: NodeStyleSet<{ padding: number[] }>;
  MetadataContainer: NodeStyleSet<{ padding: number[] }>;
  // ex. Container: NodeStyleSet;
}

// list of all values expected in a componentConfig, and their type
// usually these map to a NodeStyle or TextStyle type
type CardContentStyleProperties = Partial<{
  // ex. backgroundColor: NodeStyles['color'];
}>;

type CardContentConfig = ComponentStyleConfig<CardContentStyleProperties>;

// replace Component with the component name, this line imports overrides from the theme's componentConfig if they exist
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Component: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Surface: { defaultSurfaceTone, ...surfaceThemeStyles } = { styles: {} } } = theme?.componentConfig;

const container: CardContentConfig = {
  themeKeys: {
    // key/value pairs mapping this element's property to the incoming componentConfig value
    // the values here should be listed in the ComponentStyleProperties type
    // ex. color: 'backgroundColor'
  },
  base: {
    //  default styles of a component
    // ex. color: theme.color.red
    width: getWidthByUpCount(theme, 2),
    height:
      getDimensions(theme, {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      }).h ?? 0,
    padding: [theme.spacer.md * 1.5, theme.spacer.xl], // TODO support separate paddingX and paddingY values from theme, possibly formatter
    borderRadius: theme.radius.md,
  },
  toneModes: {
    // state and tone level overrides
    // ex:
    // focus: {
    //   color: theme.color.blue
    // },
    // brand: {
    //   color: theme.color.purple
    // },
    // 'brand-focus': {
    //   color: theme.color.red
    // }
  },
  themeStyles: {
    // passes the componentConfig values to makeComponentStyles()
    ...surfaceThemeStyles
  }
};

const artworkContainer: CardContentConfig = {
  themeKeys: {
    // key/value pairs mapping this element's property to the incoming componentConfig value
    // the values here should be listed in the ComponentStyleProperties type
    // ex. color: 'backgroundColor'
  },
  base: {
    //  default styles of a component
    // ex. color: theme.color.red
    width: getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).w,
    height: getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h,
    padding: [40, 10] // TODO support separate paddingX and paddingY values from theme, possibly formatter
  },
  toneModes: {
    // state and tone level overrides
    // ex:
    // focus: {
    //   color: theme.color.blue
    // },
    // brand: {
    //   color: theme.color.purple
    // },
    // 'brand-focus': {
    //   color: theme.color.red
    // }
  },
  themeStyles: {
    // passes the componentConfig values to makeComponentStyles()
  }
};

const metadataContainer: CardContentConfig = {
  themeKeys: {
    // key/value pairs mapping this element's property to the incoming componentConfig value
    // the values here should be listed in the ComponentStyleProperties type
    // ex. color: 'backgroundColor'
  },
  base: {
    //  default styles of a component
    // ex. color: theme.color.red
    width: (getWidthByUpCount(theme, 2) ?? 0) - getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).w,
    height: getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h,
    color: theme.color.fillInverseSecondary,
    padding: [theme.spacer.xl, theme.spacer.xl]
  },
  toneModes: {
    // state and tone level overrides
    // ex:
    // focus: {
    //   color: theme.color.blue
    // },
    // brand: {
    //   color: theme.color.purple
    // },
    // 'brand-focus': {
    //   color: theme.color.red
    // }
  },
  themeStyles // passes the componentConfig values to makeComponentStyles()
};

// generates the style object
// ex. const Container = makeComponentStyles<ComponentStyles['Container']>(container);
const Container = makeComponentStyles<CardContentStyles['Container']>(container);
const ArtworkContainer = makeComponentStyles<CardContentStyles['ArtworkContainer']>(artworkContainer);
const MetadataContainer = makeComponentStyles<CardContentStyles['MetadataContainer']>(metadataContainer);

// the object returned to the component
const styles: CardContentStyles = {
  tone: defaultTone || defaultSurfaceTone || 'neutral',
  Container,
  ArtworkContainer,
  MetadataContainer
  // ex. Container
};

export default styles;
