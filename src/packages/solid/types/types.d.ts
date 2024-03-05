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

// import * as Solid from '@lightningjs/solid';
import type { TextStyles, NodeStyles } from '@lightningjs/solid';

export type ThemeKeys<BaseStyleType, ComponentStyleList = object> = {
  // solid style name: themed style name
  [k in keyof BaseStyleType as keyof BaseStyleType]?: keyof ComponentStyleList;
};

export interface ComponentStyleConfig<
  ComponentStyleList = object,
  BaseStyleType extends NodeStyles | TextStyles | NodeColor = NodeStyles | TextStyles
> {
  themeKeys: ThemeKeys<BaseStyleType, ComponentStyleList>;
  base: BaseStyleType;
  tones?: {
    [k in Tone]?:
      | (ComponentStyleList & BaseStyleType)
      | {
          [k in Mode]?: ComponentStyleList & BaseStyleType;
        };
  };
  modes?: {
    [k in Mode]?: ComponentStyleList & BaseStyleType;
  };
  modeKeys?: string[];
  toneKeys?: string[];
  // TODO type incoming theme styles
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  themeStyles: {
    [k in VariantList]?: ComponentStyleList;
  };
}

export type Tone = 'neutral' | 'inverse' | 'brand';
export type Mode = 'focus' | 'disabled';

export type VariantList = 'base' | Tone | Mode;

export type VariantPropertySet<T> = {
  [key in VariantList]?: {
    [K in keyof T]?: T[K];
  };
};

export interface WithTonesModes<StyleSet> {
  /**
   * base styles are `neutral`
   */
  // TODO `base` is required in theme, but not valid to be passed to component
  // base: StyleSet;
  // focus?: Partial<StyleSet>;
  // disabled?: Partial<StyleSet>;
  neutral?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
  inverse?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
  brand?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
}

export interface WithModes<StyleSet> {
  focus?: Partial<StyleSet>;
  disabled?: Partial<StyleSet>;
}

export type FlexibleNodeStyles<AdditionalTypes = undefined> = NodeStyles & AdditionalTypes;
export type FlexibleTextStyles<AdditionalTypes = undefined> = TextStyles & AdditionalTypes;

// could be a nested object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NodeStyleSet<AdditionalTypes = undefined> = {
  base: Required<FlexibleNodeStyles<AdditionalTypes>> & WithModes<FlexibleNodeStyles<AdditionalTypes>>;
  tones: WithTonesModes<FlexibleNodeStyles<AdditionalTypes>>; // includes modes of tones
};

// could be a nested object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TextStyleSet<AdditionalTypes = undefined> = {
  base: Required<TextStyles & AdditionalTypes> & WithModes<TextStyles & AdditionalTypes>;
  tones: WithTonesModes<TextStyles & AdditionalTypes>;
};

/**
 * renderer accepts 0xRGBA as either a number or string
 */
export type NodeColor = number | string;
