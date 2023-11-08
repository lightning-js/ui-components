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
import { Text, Show } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import Icon from '../Icon/Icon';
import styles from './Rating.styles';

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
          marginRight={formatTitle(props.title) ? styles.iconMarginRight : props.marginRight}
          {...styles.icon}
        />
      </Show>
      <Show when={formatTitle(props.title)}>
        <Text style={styles.textStyle} marginRight={props.marginRight}>
          {formatTitle(props.title)}
        </Text>
      </Show>
    </>
  );
};

export default Rating;
