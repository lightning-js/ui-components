/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
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

import { beforeEach, describe, expect, it } from 'vitest';
import { makeComponentStyles } from './getThemeStyles.js';

describe.only('makeComponentStyles', () => {
  let styleConfig, expectedStyles;
  beforeEach(() => {
    styleConfig = {
      themeKeys: {
        number: 'themeNumber',
        stringProp: 'stringTheme'
      },
      base: {
        number: 200,
        stringProp: 'base'
      },
      toneModes: {
        focus: {
          stringProp: 'focus'
        },
        disabled: {
          stringProp: 'disabled'
        },
        inverse: {
          stringProp: 'inverse'
        },
        brand: {
          stringProp: 'brand'
        },
        'brand-focus': {
          stringProp: 'brandFocus'
        }
      },
      themeStyles: {}
    };

    expectedStyles = {
      number: 200,
      stringProp: 'base',
      focus: {
        stringProp: 'focus'
      },
      disabled: {
        stringProp: 'disabled'
      },
      inverse: {
        stringProp: 'inverse'
      },
      'neutral-disabled': {
        stringProp: 'disabled'
      },
      'neutral-focus': {
        stringProp: 'focus'
      },
      'inverse-disabled': {
        stringProp: 'disabled'
      },
      'inverse-focus': {
        stringProp: 'focus'
      },
      brand: {
        stringProp: 'brand'
      },
      'brand-disabled': {
        stringProp: 'disabled'
      },
      'brand-focus': {
        stringProp: 'brandFocus'
      }
    };
  });
  it.only('converts a style config to a style object', async () => {
    const styles = makeComponentStyles(styleConfig);
    expect(styles).toStrictEqual(expectedStyles);
  });
  it('overrides style config values with theme style values using themeKeys', () => {
    styleConfig.themeStyles = {
      brand: {
        stringTheme: 'themed-override'
      }
    };
    expectedStyles.brand = {
      stringProp: 'themed-override'
    };
    const styles = makeComponentStyles(styleConfig);
    expect(styles).toStrictEqual(expectedStyles);
  });
  it("uses theme style values even if the toneMode doesn't exist in the config", () => {
    styleConfig.themeStyles = {
      'inverse-focus': {
        stringTheme: 'themed-override'
      }
    };
    expectedStyles['inverse-focus'] = {
      stringProp: 'themed-override'
    };
    const styles = makeComponentStyles(styleConfig);
    expect(styles).toStrictEqual(expectedStyles);
  });
});
