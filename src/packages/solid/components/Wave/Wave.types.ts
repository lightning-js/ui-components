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

import type { NodeStyles } from '@lightningjs/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface WaveProps extends UIComponentProps, WaveStyleProperties {
  toggleAnimation?: boolean;
}

export interface WaveStyleProperties {
  /**
   * color of each rectangle in the wave
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  color?: NodeStyles['color'];
  /**
   * spacing between each rectangle in the wave
   */
  itemSpacing?: NodeStyles['itemSpacing'];
  radius?: NodeStyles['borderRadius'];
}

export interface WaveStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Rectangles: NodeStyleSet;
}

export type WaveConfig = ComponentStyleConfig<WaveStyleProperties>;
