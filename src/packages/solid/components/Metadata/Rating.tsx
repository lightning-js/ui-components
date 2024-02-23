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
import { Text, Show, View } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import Icon from '../Icon/Icon.jsx';
import type { IconProps } from '../Icon/Icon.jsx';
import styles, { type RatingStyles } from './Rating.styles.js';
import type { Tone } from '../../types.js';

export interface RatingProps extends IntrinsicNodeProps {
  /**
   * path to the rating's icon
   */
  src: NonNullable<IconProps['src']>;
  /**
   * Text or number to display. Numbers from 0 to 100 will display as percentages.
   */
  title: string;

  style?: Partial<RatingStyles>;

  tone?: Tone;
}

const Rating: Component<RatingProps> = (props: RatingProps) => {
  const formatTitle = (title: string | number) => {
    if ((typeof title !== 'string' && typeof title !== 'number') || !String(title).trim().length) {
      return;
    }

    let formatted = title;
    if (!Number.isNaN(title) && Number(title) >= 0 && Number(title) <= 100) {
      formatted += '%';
    }
    return formatted;
  };
  const formattedTitle = createMemo(() => formatTitle(props.title));
  return (
    <View
      {...props}
      tone={props.tone ?? styles.tone}
      states={props.tone ?? styles.tone}
      forwardStates
      style={[
        ...[props.style].flat(),
        props.style?.Container,
        props.style?.Container?.[props.tone || styles.tone],
        styles.Container,
        styles.Container?.[props.tone || styles.tone]
      ]}
    >
      <Show when={props.src}>
        <Icon
          src={props.src}
          tone={props.tone ?? styles.tone}
          states={props.tone ?? styles.tone}
          forwardStates
          style={[
            props.style?.Icon,
            props.style?.Icon?.[props.tone || styles.tone],
            styles.Icon,
            styles.Icon[props.tone || styles.tone]
          ]}
        />
      </Show>
      <Show when={formattedTitle()}>
        <Text
          style={[
            props.style?.Text,
            props.style?.Text?.[props.tone || styles.tone],
            styles.Text,
            styles.Text[props.tone || styles.tone]
          ]}
          states={props.tone ?? styles.tone}
          tone={props.tone ?? styles.tone}
          marginRight={props.marginRight}
        >
          {formattedTitle()}
        </Text>
      </Show>
    </View>
  );
};

export default Rating;
