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
import type { Component, Accessor } from 'solid-js';
import { View, Text, Show, For } from '@lightningjs/solid';
import type { ElementNode } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './Details.styles.js';
import Badge, { type BadgeProps } from '../Badge/Badge.jsx';
import Rating, { type RatingProps } from './Rating.jsx';

export interface DetailsProps extends UIComponentProps {
  /**
   * an array of BadgeProps to render [Badges](?path=/docs/components-badge--docs)
   */
  badges?: BadgeProps[];
  /**
   * an array of RatingProps to render ratings
   */
  ratings?: RatingProps[];
  /**
   * text to display as details title
   */
  title?: string;
}

const Details: Component<DetailsProps> = (props: DetailsProps) => {
  return (
    <View
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
      onBeforeLayout={(node: ElementNode, dimensions) => {
        if (dimensions?.height && node.parent) {
          node.parent.height = dimensions.height;
          node.parent?.updateLayout();
        }
      }}
      {...props}
    >
      <Show when={props.title}>
        <Text
          style={[
            styles.Text.tones[props.tone || styles.tone], //
            styles.Text.base
          ]}
        >
          {props.title}
        </Text>
      </Show>
      <For each={props.badges}>
        {(badge: BadgeProps, idx: Accessor<number>) => (
          <Badge
            {...badge}
            marginRight={
              props.badges?.length && idx() === props.badges.length - 1
                ? styles.Container.tones[props.tone ?? styles.tone]?.contentSpacing ??
                  styles.Container.base.contentSpacing
                : styles.Container.tones[props.tone ?? styles.tone]?.badgeContentSpacing ??
                  styles.Container.base.badgeContentSpacing
            }
          />
        )}
      </For>
      <For each={props.ratings}>
        {(rating: RatingProps, idx: Accessor<number>) => (
          <Rating
            {...rating}
            style={[
              styles.Text.tones[props.tone || styles.tone], //
              styles.Text.base
            ]}
            forwardStates
            marginRight={
              props.ratings?.length && idx() === props.ratings.length - 1
                ? 0
                : styles.Container.tones[props.tone ?? styles.tone]?.ratingContentSpacing ??
                  styles.Container.base.ratingContentSpacing
            }
          />
        )}
      </For>
    </View>
  );
};
export default Details;
