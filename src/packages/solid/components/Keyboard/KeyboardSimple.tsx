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

import { For, Show, createMemo, createSignal, type Component } from 'solid-js';
import Column from '../Column/Column.jsx';
import Row from '../Row/Row.jsx';
import Key from '../Key/Key.jsx';
import type { KeyProps } from '../Key/Key.types.js';
import styles from './Keyboard.styles.js';
import type { KeyboardProps } from './Keyboard.types.js';

const getTone = (props: KeyProps) => props.tone ?? styles.tone;

// rows created from each array passed in
const KeyboardSimple: Component<KeyboardProps> = (props: KeyboardProps) => {
  // eslint-disable-next-line solid/reactivity
  const [_, setKeySignal] = props.keySignal ?? createSignal('');
  const [activeKeyboard, setActiveKeyboard] = createSignal('default');

  const setOnEnter = (key: string | KeyProps) => {
    if (typeof key === 'string') {
      return () => setKeySignal(key);
    } else if (key.toggle) {
      return () => setActiveKeyboard(key.toggle);
    } else {
      return () => setKeySignal(typeof key === 'string' ? key : key.title ?? '');
    }
  };

  const tone = createMemo(() => getTone(props));

  return (
    <Column
      autofocus={props.autofocus}
      scroll={'none'}
      plinko
      gap={
        props.gap ??
        props.keySpacing ??
        styles.Container.tones[tone()]?.keySpacing ??
        styles.Container.base.keySpacing
      }
      justifyContent={props.centerKeyboard ? 'center' : 'flexStart'}
      width={props.width}
    >
      <For each={Object.keys(props.formats)}>
        {keyboard => (
          <Show when={activeKeyboard() === keyboard}>
            <For each={props.formats[keyboard]}>
              {(row: (string | KeyProps)[]) => (
                <Row
                  width={props.width}
                  justifyContent={props.centerKeys ? 'center' : 'flexStart'}
                  gap={
                    props.gap ??
                    props.keySpacing ??
                    styles.Container.tones[tone()]?.keySpacing ??
                    styles.Container.base.keySpacing
                  }
                  height={
                    props.height ?? styles.Container.tones[tone()]?.height ?? styles.Container.base.height
                  }
                  wrap={props.rowWrap}
                >
                  <For each={row}>
                    {(key: string | KeyProps) => (
                      <Key
                        {...(typeof key === 'string' ? {} : key)}
                        onEnter={setOnEnter(key)}
                        title={typeof key === 'string' ? key : key.title ?? ''}
                      />
                    )}
                  </For>
                </Row>
              )}
            </For>
          </Show>
        )}
      </For>
    </Column>
  );
};

export default KeyboardSimple;
