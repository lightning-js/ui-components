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
import styles from './Input.styles.js';
import Button from '../Button/Button.jsx';

export interface InputProps extends IntrinsicNodeProps {
  /**
   * actualTitle is a proxy element for title which is used to store actual value typed when password is enabled
   */
  actualTitle?: string;

  /**
   * cursor indicates the current insertion or deletion position within the title
   */
  cursor: string;

  /**
   * eyebrow of input container.
   */
  eyebrow?: string;

  /**
   * help text for the input container.
   */
  helpText?: string;

  /**
   * when true, the listening property enables the input to accept changes from methods like clear, insert, and backspace. When false, these methods have no effect on the input
   */
  listening?: boolean;

  /**
   *  specifies the character used as a mask when the password is set to true.
   */
  mask?: string;

  /**
   * determines whether input should be masked
   */
  password?: boolean;

  /**
   * index of the current cursor positions
   */
  position?: number;
}

const Input: Component<InputProps> = props => {
  return (
    <Button
      {...props}
      // TODO, wait to see if fixed is needed
      style={styles.container}
    />
  );
};

export default Input;
