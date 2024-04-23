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

import { createMemo, type Component } from 'solid-js';
import { Text, View, type NodeProps } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import { getWidthByColumnSpan } from '../../utils/getWidthByColumnSpan.js';
import styles, { type ListItemStyles } from './ListItem.styles.js';

interface ListItemProps extends UIComponentProps {
  /**
   * content of the title
   */
  title?: string;
  /**
   * content of the description
   */
  description?: string;
  /**
   * number of columns the component spans
   */
  columnSpan?: number;
}

interface ListItemContainerProps extends UIComponentProps {
  /**
   * number of columns the component spans
   */
  columnSpan?: number;
  children?: NodeProps['children'];
}

const getContainerWidth = (props: ListItemContainerProps | ListItemProps, styles: ListItemStyles): number => {
  if (props.columnSpan) {
    return getWidthByColumnSpan(props.columnSpan);
  } else {
    return styles.Container.tones[props.tone ?? styles.tone]?.width ?? styles.Container.base.width;
  }
};

const ListItem: Component<ListItemProps> = props => {
  return (
    <ListItemContainer
      {...props}
      // @ts-expect-error TODO style type needs to be updated to accept nested arrays
      style={[
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        style={[
          styles.Title.tones[props.tone ?? styles.tone], //
          styles.Title.base
        ]}
      >
        {props.title}
      </Text>
      <Text
        style={[
          styles.Description.tones[props.tone ?? styles.tone], //
          styles.Description.base
        ]}
      >
        {props.description}
      </Text>
    </ListItemContainer>
  );
};

const ListItemContainer: Component<ListItemContainerProps> = props => {
  const containerWidth = createMemo(() => getContainerWidth(props, styles));
  return (
    <View
      {...props}
      width={containerWidth()}
      // @ts-expect-error TODO style type needs to be updated to accept nested arrays
      style={[
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
    />
  );
};

export {
  ListItem as default, //
  ListItemContainer,
  type ListItemProps,
  type ListItemContainerProps
};
