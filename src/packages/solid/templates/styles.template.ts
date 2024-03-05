/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

/**
 * replace all instances of `Component` (as in ComponentStyle) with the component's name
 * ex. Button -> ButtonStyle
 */

// includes the tone and all returned style sets, usually one per element
export interface ComponentStyle {
  tone: Tone;
  // ex. Container: NodeStyleSet;
}

// list of all values expected in a componentConfig, and their type
// usually these map to a NodeStyle or TextStyle type
type ComponentStyleProperties = Partial<{
  // ex. backgroundColor: NodeStyles['color'];
}>;

type ComponentConfig = ComponentStyleConfig<ComponentStyleProperties>;

// replace Component with the component name, this line imports overrides from the theme's componentConfig if they exist
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Component: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

const container: ComponentConfig = {
  themeKeys: {
    // key/value pairs mapping this element's property to the incoming componentConfig value
    // the values here should be listed in the ComponentStyleProperties type
    // ex. color: 'backgroundColor'
  },
  base: {
    //  default styles of a component
    // ex. color: theme.color.red
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
// ex. const Container = makeComponentStyles<ComponentStyle['Container']>(container);

// the object returned to the component
const styles: ComponentStyle = {
  tone: tone
  // ex. Container
};

export default styles;
