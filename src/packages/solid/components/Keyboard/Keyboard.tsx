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

import { type Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type KeyboardFormat } from './Keyboard.styles.js';
import KeyboardSimple from './KeyboardSimple.jsx';

export interface KeyboardProps extends IntrinsicNodeProps {
  /**
   * object containing arrays that represent different formats that the keyboard can be presented in. These arrays can contain strings or objects.
   */
  formats: KeyboardFormat;

  /**
   * center the keyboard within it's set width (must set the w property of Keyboard)
   */
  centerKeyboard?: boolean;

  /**
   * wrap keyboard rows when navigating left and right
   */
  rowWrap?: boolean;

  /**
   * center the keys within it's set width (must set the w property of Keyboard)
   */
  centerKeys?: boolean;

  /**
   * Default format of the keyboard to be shown. Should be a key of `formats`.
   */
  defaultFormat?: string;
}

// rows created from each array passed in
const Keyboard: Component<KeyboardProps> = (props: KeyboardProps) => {
  return <KeyboardSimple style={styles.Container} {...props} />;
};

export default Keyboard;
