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

import { For, type Component, Show } from 'solid-js';
import { type KeyboardProps } from './Keyboard.jsx';
import { Column, Row } from '@lightningjs/solid-primitives';
import Key, { type KeyProps } from '../Key/Key.jsx';
import styles from './Keyboard.styles.jsx';
import keyStyles from '../Key/Key.styles.js';
import { Text } from '@lightningjs/solid';
import { ButtonStyles } from '../Button/Button.jsx';

// rows created from each array passed in
const KeyboardSimple: Component<KeyboardProps> = (props: KeyboardProps) => {
  // // export type KeyboardFormat = Array<Array<string | Record<string, unknown>>>;
  return (
    <Column
      autofocus={props.autofocus}
      plinko
      itemSpacing={styles.Container.keySpacing}
      justifyContent={props.centerKeyboard != undefined && props.centerKeyboard ? 'center' : 'flexStart'}
    >
      <For each={props.formats}>
        {(row: Array<string | KeyProps>) => (
          <Row
            justifyContent={props.centerKeys != undefined && props.centerKeys ? 'center' : 'flexStart'}
            itemSpacing={styles.Container.keySpacing}
            height={ButtonStyles.Container.height}
            wrap={props.rowWrap}
          >
            <For each={row}>
              {(key: string | KeyProps) => (
                <Key {...keyStyles.Container} {...key} title={key.title || key.icon ? key.title : key} />
              )}
            </For>
          </Row>
        )}
      </For>
    </Column>
  );
};

export default KeyboardSimple;
