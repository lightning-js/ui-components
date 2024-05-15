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
import { View, ElementNode } from '@lightningjs/solid';
import { chainFunctions } from '../../utils/chainFunctions.js';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { withScrolling, type ScrollableElement } from '../../utils/withScrolling.js';
import styles from './Row.styles.js';
import type { RowProps } from './Row.types.js';

const Row: Component<RowProps> = (props: RowProps) => {
  const onLeft = handleNavigation('left');
  const onRight = handleNavigation('right');

  return (
    <View
      {...props}
      selected={props.selected || 0}
      gap={props.itemSpacing}
      itemTransition={props.itemTransition}
      scrollIndex={props.scrollIndex}
      onLeft={chainFunctions(props.onLeft, onLeft)}
      onRight={chainFunctions(props.onRight, onRight)}
      forwardFocus={onGridFocus}
      onLayout={chainFunctions<RowProps['onLayout']>(
        (elm: ScrollableElement) =>
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
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
    />
  );
};

export default Row;
