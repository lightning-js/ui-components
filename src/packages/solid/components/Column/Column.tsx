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
import { View, type ElementNode, type IntrinsicNodeCommonProps } from '@lightningjs/solid';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { withScrolling, type ScrollableElementNode } from '../../utils/withScrolling.js';
import { chainFunctions } from '../../utils/chainFunctions.js';
import styles from './Column.styles.js';

export interface ColumnProps extends UIComponentProps {
  /** function run on component mount */
  onCreate?: IntrinsicNodeCommonProps['onCreate'];
  /** function to be called on down click */
  onDown?: KeyHandler;

  /** function to be called when component gets focus */
  onFocus?: KeyHandler;

  /** function to be called on up click */
  onUp?: KeyHandler;

  /** function to be called when the selected of the component changes */
  onSelectedChanged?: (
    this: ScrollableElementNode,
    elm: ScrollableElementNode,
    active: ElementNode,
    selectedIndex: number,
    lastSelectedIndex: number
  ) => void;

  /** Determines when to scroll(shift items along the axis):
   * auto - scroll items immediately
   * edge - scroll items when focus reaches the last item on screen
   * always - focus remains at index 0, scroll until the final item is at index 0
   * none - disable scrolling behavior, focus shifts as expected
   * in both `auto` and `edge` items will only scroll until the last item is on screen */
  scroll?: 'always' | 'none' | 'edge' | 'auto';

  /** When auto scrolling, item index at which scrolling begins */
  scrollIndex?: number;

  /** The initial index */
  selected?: number;
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
      // @ts-expect-error need to fix type for onLayout
      onLayout={chainFunctions<ColumnProps['onLayout']>(
        (elm: ScrollableElementNode) =>
          withScrolling(props.y as number).call(
            elm,
            elm,
            elm.children[props.selected ?? 0] as ElementNode,
            props.selected ?? 0,
            undefined
          ),
        props.onLayout
      )}
      onSelectedChanged={chainFunctions(
        props.onSelectedChanged,
        props.scroll !== 'none' ? withScrolling(props.y as number) : undefined
      )}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    />
  );
};

export default Column;
