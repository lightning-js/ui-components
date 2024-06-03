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

import { For, Show, createMemo, createSignal, type Accessor, type Component } from 'solid-js';
import Column from '../Column/Column.jsx';
import Row from '../Row/Row.jsx';
import Key from '../Key/Key.jsx';
import type { KeyProps } from '../Key/Key.types.js';
import styles from './Keyboard.styles.js';
import type { KeyboardProps } from './Keyboard.types.js';
import { ElementNode } from '@lightningjs/solid';

const getTone = (props: KeyProps) => props.tone ?? styles.tone;

// rows created from each array passed in
const KeyboardSimple: Component<KeyboardProps> = (props: KeyboardProps) => {
  // eslint-disable-next-line solid/reactivity
  const [_, setKeySignal] = props.keySignal ?? createSignal('');
  const [activeKeyboard, setActiveKeyboard] = createSignal('default');
  const [selectedRowIndex, setSelectedRowIndex] = createSignal(0);
  const [selectedColumnIndex, setSelectedColumnIndex] = createSignal(0);

  const setOnEnter = (key: string | KeyProps, rowIdx: Accessor<number>, colIdx: Accessor<number>) => {
    if (typeof key === 'string') {
      return () => setKeySignal(key);
    } else if (key.toggle) {
      return () => {
        setSelectedRowIndex(rowIdx);
        setSelectedColumnIndex(colIdx);
        setActiveKeyboard(key.toggle);
        keyboardRef[key.toggle]?.setFocus();
      };
    } else {
      return () => setKeySignal(typeof key === 'string' ? key : key.title ?? '');
    }
  };

  const tone = createMemo(() => getTone(props));
  const keyboardRef = new Map<string, ElementNode>();

  return (
    <For each={Object.keys(props.formats)}>
      {(keyboard, colIdx) => (
        <Show when={activeKeyboard() === keyboard}>
          <Column
            autofocus={props.autofocus}
            ref={element => {
              keyboardRef[keyboard] = element;
              if (activeKeyboard() === keyboard) {
                element.setFocus();
              }
              return keyboard;
            }}
            scroll={'none'}
            plinko
            selctedIndex={selectedColumnIndex()}
            gap={
              props.gap ??
              props.keySpacing ??
              styles.Container.tones[tone()]?.keySpacing ??
              styles.Container.base.keySpacing
            }
            justifyContent={props.centerKeyboard ? 'center' : 'flexStart'}
            width={props.width}
          >
            <For each={props.formats[keyboard]}>
              {(row: (string | KeyProps)[]) => (
                <Row
                  selectedIndex={selectedRowIndex()}
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
                    {(key: string | KeyProps, rowIdx) => (
                      <Key
                        {...(typeof key === 'string' ? {} : key)}
                        onEnter={setOnEnter(key, rowIdx, colIdx)}
                        title={typeof key === 'string' ? key : key.title ?? ''}
                      />
                    )}
                  </For>
                </Row>
              )}
            </For>
          </Column>
        </Show>
      )}
    </For>
  );
};

export default KeyboardSimple;
