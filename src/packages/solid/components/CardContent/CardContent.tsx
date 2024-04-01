/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import { Text, Show } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import styles, { type CardContentStyles } from './CardContent.styles.js';
import type { Tone } from '../../types/types.js';
import Artwork, { type ArtworkProps } from '../Artwork/Artwork.jsx';
withPadding; // Preserve the import.

export type CardContentProps = {
  /**
   * prop object passed to the child Artwork component
   */
  artwork?: ArtworkProps;

  /**
   * sets the component's color palette
   */
  tone?: Tone;

  padding?: number[];

  style?: Partial<CardContentStyles>;
};

const Badge: Component<CardContentProps> = props => {
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container?.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Artwork />
    </node>
  );
};

export default Badge;
