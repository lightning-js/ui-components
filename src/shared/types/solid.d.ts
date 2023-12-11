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

declare module 'theme' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any;
  export default theme;
}

export type Color = number | string;
export type AnimationSettings = { duration?: number; delay?: number; timing?: string };
export type TextAlign = 'left' | 'center' | 'right';
export type ContentAlign = 'center' | 'flexStart' | 'flexEnd' | 'spaceBetween' | 'spaceEvenly';
export type States = 'active' | 'focus' | 'disabled';

/**
 * allows the property to either be the supplied type,
 * or an array containing that type and an animationSettings object
 */
type Animatable<Type> = Type | [Type, AnimationSettings];

/**
 * states can contain any of the style object's properties, except other states
 */

type StateStyle<Type> = Partial<Omit<Type, States>>;

export interface ComponentConfig<T> {
  styles?: WithTonesModes<{
    [K in keyof T]?: T[K];
  }>;
  tone: keyof WithTonesModes;
}

export type Tone = keyof WithTonesModes<object>;

export interface WithTonesModes<T = object> {
  /**
   * base styles are `neutral`
   */
  neutral?: never;
  // TODO `base` is required in theme, but not valid to be passed to component
  base?: {
    [K in keyof T]?: T[K];
  };
  inverse?: {
    [K in keyof T]?: T[K];
  };
  brand?: {
    [K in keyof T]?: T[K];
  };
  focus?: {
    [K in keyof T]?: T[K];
  };
  disabled?: {
    [K in keyof T]?: T[K];
  };
  'neutral-focus'?: {
    [K in keyof T]?: T[K];
  };
  'inverse-focus'?: {
    [K in keyof T]?: T[K];
  };
  'brand-focus'?: {
    [K in keyof T]?: T[K];
  };
  'neutral-disabled'?: {
    [K in keyof T]?: T[K];
  };
  'inverse-disabled'?: {
    [K in keyof T]?: T[K];
  };
  'brand-disabled'?: {
    [K in keyof T]?: T[K];
  };
}
