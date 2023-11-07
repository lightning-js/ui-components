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
import { createSignal } from 'solid-js';
import { View, Text, Show, For } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import Icon from '../Icon/Icon';
import Badge from '../Badge/Badge';
import type { BadgeProps } from '../Badge/Badge';
import styles from './Metadata.styles';

export interface RatingProps extends IntrinsicNodeProps {
  /**
   * path to the rating's icon
   */
  icon: string;
  /**
   * Text or number to display. Numbers from 0 to 100 will display as percentages.
   */
  title: string;
}

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

export interface MetadataProps extends IntrinsicNodeProps {
  /**
   * title text
   */
  title: string;
  /**
   * description text
   */
  description?: string;
  /**
   * Text, Badges, and Icons to be displayed below the title and description
   */
  details: DetailsProps;
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
  return (
    <>
      <Show when={props.icon}>
        <Icon
          icon={props.icon}
          marginRight={formatTitle(props.title) ? styles.rating.iconMarginRight : props.marginRight}
          {...styles.rating.icon}
        />
      </Show>
      <Show when={formatTitle(props.title)}>
        <Text style={styles.rating.text} marginRight={props.marginRight}>
          {formatTitle(props.title)}
        </Text>
      </Show>
    </>
  );
};

const Details: Component<DetailsProps> = (props: DetailsProps) => {
  return (
    <View
      style={styles.details.container}
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
        <Text style={styles.details.titleTextStyle} marginRight={styles.details.contentSpacing}>
          {props.title}
        </Text>
      </Show>
      <For each={props.badges}>
        {(badge: BadgeProps, idx: Accessor<number>) => (
          <Badge
            {...badge}
            marginRight={
              props.badges?.length && idx() === props.badges.length - 1
                ? styles.details.contentSpacing
                : styles.badge.contentSpacing
            }
          />
        )}
      </For>
      <For each={props.ratings}>
        {(rating: RatingProps, idx: Accessor<number>) => (
          <Rating
            {...rating}
            marginRight={
              props.ratings?.length && idx() === props.ratings.length - 1 ? 0 : styles.rating.contentSpacing
            }
          />
        )}
      </For>
    </View>
  );
};

const Metadata: Component<MetadataProps> = (props: MetadataProps) => {
  const [detailsHeight, setDetailsHeight] = createSignal(0);

  return (
    <View style={styles.container} {...props}>
      <Text width={props.width} style={styles.titleTextStyle}>
        {props.title}
      </Text>
      <Show when={props.description}>
        <View height={styles.descriptionTextStyle.lineHeight * styles.descriptionTextStyle.maxLines}>
          <Text style={styles.descriptionTextStyle}>{props.description}</Text>
        </View>
      </Show>
      <Details
        width={props.width}
        height={detailsHeight()}
        {...props.details}
        onDimensionsChange={({ height }) => setDetailsHeight(height)}
      />
    </View>
  );
};

export default Metadata;
