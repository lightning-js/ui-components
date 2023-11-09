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
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import Details from './Details';
import type { DetailsProps } from './Details';
import styles from './Metadata.styles';

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

const Metadata: Component<MetadataProps> = (props: MetadataProps) => {
  return (
    <View style={styles.container} {...props}>
      <Text width={props.width} style={styles.titleTextStyle}>
        {props.title}
      </Text>
      <Show when={props.description}>
        <Text
          width={props.width}
          height={styles.descriptionTextStyle.lineHeight * styles.descriptionTextStyle.maxLines}
          style={styles.descriptionTextStyle}
        >
          {props.description}
        </Text>
      </Show>
      <Details width={props.width} {...props.details} />
    </View>
  );
};

export default Metadata;
