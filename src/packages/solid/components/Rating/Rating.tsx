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
import { View, Text, Show } from '@lightningjs/solid';
import Icon from '../Icon';
import styles from './Rating.styles';
type RatingProps = {
  /**
   * path to the rating's icon
   */
  icon?: string;
  /**
   * number to display
   */
  title?: number | string;
};

const Rating: Component<RatingProps> = (props: RatingProps) => {
  const formatTitle = () => {
    if (
      (typeof props.title !== 'string' && typeof props.title !== 'number') ||
      !String(props.title).trim().length
    ) {
      return;
    }

    let formatted = props.title;
    if (!Number.isNaN(props.title) && Number(props.title) >= 0 && Number(props.title) <= 100) {
      formatted += '%';
    }
    return formatted;
  };

  return (
    <View style={styles.container}>
      <Show when={props.icon}>
        <Icon icon={props.icon} {...styles.icon} />
      </Show>
      <Show when={formatTitle()}>
        <Text style={styles.text}>{formatTitle()}</Text>
      </Show>
    </View>
  );
};

export default Rating;
