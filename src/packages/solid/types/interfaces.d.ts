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

import { NodeProps } from '@lightningjs/solid';
import type { Tone } from './types.js';

type AddUndefined<T> = {
  [K in keyof T]: T[K] | undefined;
};

// TODO extends NodeProps, we may want to narrow this
/**
 * ensures all our components provide the same API for tone
 * omits children, not all ui-components support children
 * overrides color - strings are accepted by the renderer even though the type
 * is number, and all our colors are strings due to JSON limitations
 */
export interface UIComponentProps extends Omit<NodeProps, 'children'> {
  color?: NodeProps['color'] & string;
  /**
   * applied to the root node of the component, primarily used to handle state-based styling
   * ie.
   * Component.style.alpha = 0
   * Component.style.focus.alpha = 1
   */
  style?: NodeProps | NodeProps[] | undefined | undefined[];

  /**
   * sets the component's color palette
   */
  tone?: Tone;
}
