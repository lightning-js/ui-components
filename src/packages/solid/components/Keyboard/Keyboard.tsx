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

import { For, type Accessor, type Component } from 'solid-js';
import { type IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type KeyboardFormat } from './Keyboard.styles.js';
import KeyboardSingle from './KeyboardSingle.jsx';
import type { KeyProps } from '../Key/Key.jsx';

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
   * component to display for each key
   */
  // keyComponent?: lng.Component;

  /**
   * Default format of the keyboard to be shown. Should be a key of `formats`.
   */
  defaultFormat?: string;

  /**
   * number of columns across the keyboard if passing a flat array
   */
  columnCount?: number;

  /**
   * number of rows down the keyboard if passing a flat array
   */
  rowCount?: number;
}

// rows created from each array passed in
const Keyboard: Component<KeyboardProps> = (props: KeyboardProps) => {
  // const formatKeybaord = (formats: KeyboardFormat) => {
  // }

  // const formattedKeyboard = createMemo(() => formatKeyboard(props.formats))
  // export type KeyboardFormat = Record<string, Array<Array<string | Record<string, unknown>>>>;
  return (
    <For each={Object.keys(props.formats)}>
      {/* keyboard is each possibility we can toggle between */}
      {(keyboard: string) => (
        <KeyboardSingle formats={props.formats} format={props.formats[keyboard]} />
        // {...props} style={styles.Container} title={keyboard.key} format={keyboard.value} />
      )}
    </For>
  );
};

export default Keyboard;
