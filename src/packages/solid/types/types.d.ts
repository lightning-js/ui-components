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

export type ThemeKeys<
  ComponentStyleList = object,
  BaseStyleType extends NodeStyles | TextStyles = NodeStyles
> = {
  // solid style name: themed style name
  [k in keyof BaseStyleType as keyof BaseStyleType]?: keyof ComponentStyleList;
};

export interface ComponentStyleConfig<
  ComponentStyleList = object,
  BaseStyleType extends NodeStyles | TextStyles = NodeStyles
> {
  themeKeys: ThemeKeys<ComponentStyleList, BaseStyleType>;
  base: BaseStyleType;
  tones?: {
    [k in Tone]?:
      | ComponentStyleList
      | BaseStyleType
      | {
          [k in Mode]?: ComponentStyleList | BaseStyleType;
        };
  };
  modes?: {
    [k in Mode]?: ComponentStyleList | BaseStyleType;
  };
  modeKeys: string[];
  toneKeys: string[];
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

export interface WithTonesModes<StyleSet extends NodeStyles | TextStyles> {
  /**
   * base styles are `neutral`
   */
  neutral?: never;
  // TODO `base` is required in theme, but not valid to be passed to component
  base: StyleSet;
  focus?: Partial<StyleSet>;
  disabled?: Partial<StyleSet>;
  inverse?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
  brand?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
}

export type NodeStyleSet<AdditionalTypes = object> = {
  base: Required<NodeStyles & AdditionalTypes>;
  tones?: WithTonesModes<NodeStyles & AdditionalTypes>; // includes modes of tones
  modes?: WithTonesModes<NodeStyles & AdditionalTypes>;
};

export type TextStyleSet<AdditionalTypes = object> = {
  base: Required<TextStyles & AdditionalTypes>;
  tones: WithTonesModes<TextStyles & AdditionalTypes>;
  modes: WithTonesModes<TextStyles & AdditionalTypes>;
};
