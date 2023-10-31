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
import type { Component } from 'solid-js';
import { View, Text, Show, For } from '@lightningjs/solid';
import Icon from '../Icon/Icon';
import styles from './Metadata.styles';

type Rating = {
  icon: string;
  title: string;
};

type Details = {
  badges?: Record<string, unknown>[]; // TODO: how to access BadgeProps
  ratings?: Rating[]; // TODO TS def for ratings
  title?: string;
};

type MetadataProps = {
  /**
   * title text
   */
  title: string;
  /**
   * description text
   */
  description?: string;
  /**
   * TODO: LUI uses Details component here
   */
  details: Details;
};

const Metadata: Component<MetadataProps> = (props: MetadataProps) => {
  const formatRatingTitle = (title: string | number) => {
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
    <View style={styles.container}>
      <Show when={props.title}>
        <Text style={styles.titleTextStyle}>{props.title}</Text>
      </Show>
      <Show when={props.description}>
        <Text style={styles.descriptionTextStyle}>{props.description}</Text>
      </Show>

      <For each={props.details.ratings}>
        {(rating: Rating) => (
          <View style={styles.rating.container}>
            <Show when={rating.icon}>
              <Icon icon={rating.icon} {...styles.rating.icon} />
            </Show>
            <Show when={formatRatingTitle(rating.title)}>
              <Text style={styles.rating.text}>{formatRatingTitle(rating.title)}</Text>
            </Show>
          </View>
        )}
      </For>
    </View>
  );
};

export default Metadata;

// add details befor Rating
// TODO: description text doesn't wrap and gets cut off
