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

import type { Component } from 'solid-js';
import { View, type IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type IconStyles } from './Icon.styles.js';
import type { Tone } from 'types';

export interface IconProps extends IntrinsicNodeProps {
  /**
   * icon color (can only be applied on png icons)
   */
  color?: number;
  /**
   * icon width
   */
  width?: number;

  /**
   * icon height
   */
  height?: number;

  /**
   * path to image or inline SVG XML
   */
  src?: string;

  style?: Partial<IconStyles>;

  tone?: Tone;
}

const Icon: Component<IconProps> = props => {
  return (
    <View
      {...props}
      tone={props.tone ?? styles.tone}
      style={props?.style?.Container ?? styles.Container}
      {...{
        ...styles.Container[props.tone || styles.tone],
        ...props?.style?.Container[props.tone || styles.tone]
      }}
      forwardStates
    />
  );
};

export default Icon;
