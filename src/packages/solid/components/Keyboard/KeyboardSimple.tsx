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

import { For, type Component } from 'solid-js';
import { type KeyboardProps } from './Keyboard.jsx';
import Column from '../Column/Column.jsx';
import Row from '../Row/Row.jsx';
import Key, { type KeyProps } from '../Key/Key.jsx';
import styles from './Keyboard.styles.js';

// rows created from each array passed in
const KeyboardSimple: Component<KeyboardProps> = (props: KeyboardProps) => {
  return (
    <Column
      autofocus={props.autofocus}
      scroll={'none'}
      plinko
      itemSpacing={
        props.keySpacing ??
        styles.Container.tones[props.tone ?? styles.tone]?.keySpacing ??
        styles.Container.base.keySpacing
      }
      justifyContent={props.centerKeyboard && props.centerKeyboard ? 'center' : 'flexStart'}
    >
      <For each={props.formats}>
        {(row: Array<string | KeyProps>) => (
          <Row
            justifyContent={props.centerKeys && props.centerKeys ? 'center' : 'flexStart'}
            itemSpacing={
              props.keySpacing ??
              styles.Container.tones[props.tone ?? styles.tone]?.keySpacing ??
              styles.Container.base.keySpacing
            }
            height={
              props?.height ??
              styles.Container.tones[props.tone ?? styles.tone]?.height ??
              styles.Container.base.height
            }
            wrap={props.rowWrap}
          >
            <For each={row}>
              {(key: string | KeyProps) => (
                <Key
                  style={props.style?.Key}
                  keySignal={props.keySignal}
                  {...(typeof key === 'string' ? {} : key)}
                  // @ts-expect-error the ternary handles for the type error
                  title={key.title || key.icon ? key.title : key}
                />
              )}
            </For>
          </Row>
        )}
      </For>
    </Column>
  );
};

export default KeyboardSimple;
