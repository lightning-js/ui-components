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

import { Show } from 'solid-js';
import type { Component } from 'solid-js';
import { IntrinsicNodeProps, View } from '@lightningjs/solid';
// import { type INode } from '@lightningjs/renderer';
import styles from './Image.styles';

interface ImageProps extends IntrinsicNodeProps {
  /* 
   * when `true`, icon width and height will not dynamically resize to the final texture's `finalW` and `finalH` properties
  fixed?: boolean; */

  /**
   * path to image or inline SVG XML
   */
  src?: string;

  /**
   * path to fallback image or inline SVG XML
   */
  fallback?: string;
}

const Image: Component<ImageProps> = (props: ImageProps) => {
  function onFail(element: any, error: Error): void {
    if (props.fallback) {
      element.src = props.fallback;
    }
    if (props.onFail) {
      props.onFail(element, error);
    }
  }
  return (
    <Show when={props.src}>
      <View {...props} onFail={onFail} styles={styles} />
    </Show>
  );
};

export default Image;
