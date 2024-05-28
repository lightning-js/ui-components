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
import { type Component } from 'solid-js';
import { View, Text, Show } from '@lightningjs/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import Details, { type DetailsProps } from './Details.jsx';
import styles from './Metadata.styles.js';

export interface MetadataProps extends UIComponentProps {
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

  // width: UIComponentProps['width'];

  maxLines: number;
}

const Metadata: Component<MetadataProps> = (props: MetadataProps) => {
  return (
    <View
      {...props}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        width={props.width}
        style={[
          styles.TitleText.tones[props.tone || styles.tone], //
          styles.TitleText.base
        ]}
      >
        {props.title}
      </Text>
      <Show when={props.description}>
        <Text
          width={props.width}
          style={[
            styles.DescriptionText.tones[props.tone || styles.tone], //
            styles.DescriptionText.base
          ]}
        >
          {props.description}
        </Text>
      </Show>
      <Show when={props.details}>
        <Details width={props.width} {...props.details} tone={props.tone ?? styles.tone} />
      </Show>
    </View>
  );
};

export default Metadata;
