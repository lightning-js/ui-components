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
import styles from './Metadata.styles';

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
  // details: Record<string, any>;
};

const Metadata: Component<MetadataProps> = (props: MetadataProps) => {
  return (
    <View style={styles.container}>
      <Show when={props.title}>
        <Text style={styles.titleTextStyle}>{props.title}</Text>
      </Show>
      <Show when={props.description}>
        <Text style={styles.descriptionTextStyle}>{props.description}</Text>
      </Show>
    </View>
  );
};

export default Metadata;
