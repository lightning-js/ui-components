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

import { type Component, createMemo } from 'solid-js';
import { View, type Effects, type NodeProps } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles from './Artwork.styles.js';
withPadding;

export interface ArtworkProps extends UIComponentProps {
  /**
   * solid color background, will be displayed if no src is provided or
   * URI is invalid
   */
  color?: UIComponentProps['color'];

  /**
   * Handles any blur/gradient/shader effects
   */
  effects?: Effects;

  /**
   * Sets the fallback image that will be shown in if the src request fails
   */
  fallbackSrc?: NodeProps['src'];

  /**
   * Which image will be displayed
   */
  src?: NodeProps['src'];

  /**
   * optional callback that can be used to generate custom strings to request an image. The callback will be passed an object containing the following parameters: aspectRatio, src, w, h. Be default aspect ratio will match the closest value from srcCallbackAspectRatios
   */
  srcCallback?: (obj: {
    closestAspectRatio: string | undefined;
    aspectRatio: string | undefined;
    src: string;
    width: number;
    height: number;
  }) => string;
}

export interface ArtworkStyleProps {}

const formatArtwork = (props: ArtworkProps) => {
  /* eslint-disable solid/reactivity */ // this is fine, the call is wrapped in a memo
  let src = props.src ? props.src : props.fallbackSrc;

  if (src && props.srcCallback && typeof props.srcCallback === 'function') {
    src = props.srcCallback({
      closestAspectRatio: undefined,
      aspectRatio: undefined,
      src: src,
      width: Number(props.width),
      height: Number(props.height)
    });
  }
  return src;
};

const Artwork: Component<ArtworkProps> = props => {
  const formattedArtwork = createMemo(() => formatArtwork(props));

  return (
    <View
      {...props}
      // only apply color if no src is provided
      color={
        Boolean(formattedArtwork())
          ? undefined
          : props.color ??
            styles.Container.tones[props.tone ?? styles.tone]?.fillColor ??
            styles.Container.base.fillColor
      }
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      src={formattedArtwork()}
    />
  );
};

export default Artwork;
