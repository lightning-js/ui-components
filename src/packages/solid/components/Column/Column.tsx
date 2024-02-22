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
import styles from './Column.styles.js';
import { withScrolling } from '../../utils/withScrolling.js';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { chainFunctions } from '../../index.js';

export interface ColumnProps extends NodeProps {
  /** When auto scrolling, item index at which scrolling begins */
  scrollIndex?: number;
  /** Determines when to scroll(shift items along the axis):
   * auto - scroll items immediately
   * edge - scroll items when focus reaches the last item on screen
   * always - focus remains at index 0, scroll until the final item is at index 0
   * none - disable scrolling behavior, focus shifts as expected
   * in both `auto` and `edge` items will only scroll until the last item is on screen */
  scroll?: 'always' | 'none' | 'edge' | 'auto';

  /** The inital index */
  selected?: number;

  /** function to be called on up click */
  onUp?: KeyHandler;

  /** function to be called on down click */
  onDown?: KeyHandler;

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
}

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  const onUp = handleNavigation('up');
  const onDown = handleNavigation('down');

  return (
    <View
      {...props}
      onUp={chainFunctions(props.onUp, onUp)}
      onDown={chainFunctions(props.onDown, onDown)}
      selected={props.selected || 0}
      forwardFocus={onGridFocus}
      onSelectedChanged={chainFunctions(
        props.onSelectedChanged,
        props.scroll !== 'none' ? withScrolling(props.y as number) : undefined
      )}
      style={[props.style, styles.Container]}
    />
  );
};

export default Column;
