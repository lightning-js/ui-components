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
import { withPadding } from '@lightningjs/solid-primitives';
import Icon, { type IconProps } from '../Icon/Icon.jsx';
import styles from './Badge.styles.jsx';
withPadding; // Preserve the import.

// props in LUI: title, icon, iconAlign, iconWidth, iconHeight
// NOTE: Badge can have an icon on left or right or no Icon

export type BadgeProps = {
  /**
   * Badge text
   */
  title: string;
  /**
   * side of the text where icon will appear on
   */
  iconAlign?: string;
  /**
   * Object containing all properties supported in the [Icon component](?path=/docs/components-icon--icon)
   */
  icon?: Partial<IconProps>;
};

const padding = styles.padding;
const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  return (
    <node use:withPadding={padding} style={styles.Container} {...props}>
      <Show when={props.iconAlign === 'left'}>
        <Icon {...props.icon} />
      </Show>
      <Text style={styles.textStyle}>{props.title}</Text>
      <Show when={props.iconAlign === 'right'}>
        <Icon {...props.icon} />
      </Show>
    </node>
  );
};

export default Badge;
