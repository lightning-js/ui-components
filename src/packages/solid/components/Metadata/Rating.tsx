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
import { type Component, createMemo } from 'solid-js';
import { Text, Show, View, type TextProps } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './Rating.styles.js';
import Icon from '../Icon/Icon.jsx';
import type { IconProps } from '../Icon/Icon.jsx';

export interface RatingProps extends UIComponentProps {
  /**
   * path to the rating's icon
   */
  src: NonNullable<IconProps['src']>;
  /**
   * Text or number to display. Numbers from 0 to 100 will display as percentages.
   */
  title: string | number;
}

const Rating: Component<RatingProps> = (props: RatingProps) => {
  const formatTitle = (title: string | number): TextProps['children'] => {
    if ((typeof title !== 'string' && typeof title !== 'number') || !String(title).trim().length) {
      return;
    }

    let formatted = title;
    if (!Number.isNaN(title) && Number(title) >= 0 && Number(title) <= 100) {
      formatted += '%';
    }
    return formatted as string;
  };
  const formattedTitle = createMemo(() => formatTitle(props.title));
  return (
    <View
      {...props}
      forwardStates
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
    >
      <Show when={props.src}>
        <Icon
          forwardStates
          src={props.src}
          style={[
            styles.Icon.tones[props.tone || styles.tone], //
            styles.Icon.base
          ]}
        />
      </Show>
      <Show when={formattedTitle()}>
        <Text
          marginRight={props.marginRight}
          style={[
            styles.Text.tones[props.tone || styles.tone], //
            styles.Text.base
          ]}
        >
          {formattedTitle()}
        </Text>
      </Show>
    </View>
  );
};

export default Rating;
