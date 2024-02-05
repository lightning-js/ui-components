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
import type { NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from 'types';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface ColumnStyle {
  tone: Tone;
  Container: NodeStyleSet;
}

type ColumnStyleProperties = {
  itemSpacing?: NodeStyles['itemSpacing'];
  itemTransition?: NodeStyles['itemTransition'];
  scrollIndex?: NodeStyles['scrollIndex'];
  gap?: NodeStyles['gap'];
};

type ColumnConfig = ComponentStyleConfig<ColumnStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Column: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const container: ColumnConfig = {
  themeKeys: {
    itemSpacing: 'itemSpacing',
    scrollIndex: 'scrollIndex',
    itemTransition: 'itemTransition',
    gap: 'gap'
  },
  base: {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'column',
    gap: 30,
    x: 0,
    y: 0,
    height: theme.layout.screenH
  },
  toneModes: {},
  themeStyles
};

const Container = makeComponentStyles<ColumnStyle['Container']>(container);

const styles: ColumnStyle = {
  tone: tone,
  Container
};

export default styles;
