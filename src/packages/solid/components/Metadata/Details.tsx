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
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import Badge from '../Badge/Badge';
import type { BadgeProps } from '../Badge/Badge';
import Rating from './Rating';
import type { RatingProps } from './Rating';
import styles from './Details.styles';

export interface DetailsProps extends IntrinsicNodeProps {
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

  onDimensionsChange?: (dimensions: { width: number; height: number }) => unknown;
}

const Details: Component<DetailsProps> = (props: DetailsProps) => {
  return (
    <View
      style={styles.container}
      onBeforeLayout={(_, dimensions) => {
        const width = dimensions?.width;
        const height = dimensions?.height;
        if (width !== undefined && height !== undefined && props.onDimensionsChange) {
          props.onDimensionsChange({ width, height });
        }
      }}
      {...props}
    >
      <Show when={props.title}>
        <Text style={styles.titleTextStyle} marginRight={styles.contentSpacing}>
          {props.title}
        </Text>
      </Show>
      <For each={props.badges}>
        {(badge: BadgeProps, idx: Accessor<number>) => (
          <Badge
            {...badge}
            marginRight={
              props.badges?.length && idx() === props.badges.length - 1
                ? styles.contentSpacing
                : styles.badgeContentSpacing
            }
          />
        )}
      </For>
      <For each={props.ratings}>
        {(rating: RatingProps, idx: Accessor<number>) => (
          <Rating
            {...rating}
            marginRight={
              props.ratings?.length && idx() === props.ratings.length - 1 ? 0 : styles.ratingContentSpacing
            }
          />
        )}
      </For>
    </View>
  );
};
export default Details;
