/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import { View, ElementNode, type NodeProps } from '@lightningjs/solid';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import styles, { type RowStyles } from './Row.styles.js';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { withScrolling } from '../../utils/withScrolling.js';
import { chainFunctions } from '../../index.js';
import type { Tone } from '../../types/types.js';

export interface RowProps extends NodeProps {
  /** When auto scrolling, item index at which scrolling begins */
  scrollIndex?: number;

  /** Determines when to scroll(shift items along the axis):
   * auto - scroll items immediately
   * edge - scroll items when focus reaches the last item on screen
   * always - focus remains at index 0, scroll until the final item is at index 0
   * none - disable scrolling behavior, focus shifts as expected
   * in both `auto` and `edge` items will only scroll until the last item is on screen */
  scroll?: 'always' | 'none' | 'edge' | 'auto';

  /** The initial index */
  selected?: number;

  /** function to be called on right click */
  onRight?: KeyHandler;

  /** function to be called on right click */
  onLeft?: KeyHandler;

  /** function to be called when component gets focus */
  onFocus?: KeyHandler;

  /** function to be called when the selected of the component changes */
  onSelectedChanged?: (
    this: ElementNode,
    elm: ElementNode,
    active: ElementNode,
    selectedIndex: number,
    lastSelectedIndex: number
  ) => void;

  tone?: Tone;

  style?: Partial<RowStyles>;
}

const Row: Component<RowProps> = (props: RowProps) => {
  const onLeft = handleNavigation('left');
  const onRight = handleNavigation('right');

  return (
    <View
      {...props}
      selected={props.selected || 0}
      onLeft={chainFunctions(props.onLeft, onLeft)}
      onRight={chainFunctions(props.onRight, onRight)}
      forwardFocus={onGridFocus}
      onCreate={chainFunctions(
        elm =>
          withScrolling(props.x as number).call(
            elm,
            elm,
            elm.children[props.selected ?? 0] as ElementNode,
            props.selected ?? 0,
            undefined
          ),
        props.onCreate
      )}
      onSelectedChanged={chainFunctions(
        props.onSelectedChanged,
        props.scroll !== 'none' ? withScrolling(props.x as number) : undefined
      )}
      tone={props.tone ?? styles.tone}
      style={[
        ...[props.style].flat(),
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      states={props.tone ?? styles.tone}
    />
  );
};

export default Row;
