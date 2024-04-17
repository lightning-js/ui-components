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
import { View, ElementNode, type IntrinsicNodeCommonProps } from '@lightningjs/solid';
import type { KeyHandler } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import { chainFunctions } from '../../utils/chainFunctions.js';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { withScrolling, type ScrollableElementNode } from '../../utils/withScrolling.js';
import styles from './Row.styles.js';

export interface RowProps extends UIComponentProps {
  /** function run on component mount */
  onCreate?: IntrinsicNodeCommonProps['onCreate'];
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
      // @ts-expect-error need to fix type for onLayout
      onLayout={chainFunctions<RowProps['onLayout']>(
        (elm: ScrollableElementNode) =>
          withScrolling(props.x as number).call(
            elm,
            elm,
            elm.children[elm.selected] as ElementNode,
            elm.selected,
            undefined
          ),
        props.onLayout
      )}
      onSelectedChanged={chainFunctions(
        props.onSelectedChanged,
        props.scroll !== 'none' ? withScrolling(props.x as number) : undefined
      )}
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
    />
  );
};

export default Row;
