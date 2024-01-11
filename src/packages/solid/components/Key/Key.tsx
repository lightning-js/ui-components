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
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import { ButtonContainer } from '../Button/Button.jsx';
import styles, { type KeySize } from './Key.styles.js';

export interface KeyProps extends IntrinsicNodeProps {
  /**
   * url for icon
   */
  icon?: string;
  /**
   * width of the Key
   */
  size?: KeySize;
  /**
   * path to image or inline SVG XML
   */
  src?: string;
  /**
   * The horizontal spacing between each key in a Keyboard. This value is factored into the width of the key so that it aligns with with the borders of other keys in a Keyboard.
   */
  keySpacing: number;
}

const Key: Component<KeyProps> = props => {
  return (
    <ButtonContainer
      {...props}
      style={styles.Container}
      width={
        styles.Container.sizes[props.size || 'sm'] * styles.Container.baseWidth +
        props.keySpacing * (styles.Container.sizes[props.size || 'sm'] - 1)
      }
      forwardStates
    />
  );
};

export default Key;
