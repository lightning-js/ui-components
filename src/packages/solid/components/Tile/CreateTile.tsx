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

import Tile, { type TileProps } from './Tile.jsx';
import styles from './Tile.styles.js';
import { useItemLayout, type ItemLayout } from '../../index.js';
import type { Tone } from '../../types.js';

export const CreateTile = ({
  upcount,
  tone,
  ...props
}: {
  upcount?: ItemLayout;
  tone?: Tone;
  props: Partial<TileProps>;
}) => {
  const style = {
    ...styles.Container.base,
    ...styles.Container.tones[tone ?? styles.tone]
  };
  const instanceTone = tone ?? styles.tone;
  const { width, height } = upcount ? useItemLayout(upcount) : { width: style.width, height: style.height };
  return Tile({ ...props, width, height, tone: instanceTone });
};
