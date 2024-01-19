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
  Container: NodeStyleSet<{ padding: number[] }>;
}

type ColumnStyleProperties = {
  display?: NodeStyles['display'];
  justifyContent?: NodeStyles['justifyContent'];
  flexDirection?: NodeStyles['flexDirection'];
};

type ColumnConfig = ComponentStyleConfig<ColumnStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Column: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const container: ColumnConfig = {
  themeKeys: {
    display: 'display',
    justifyContent: 'justifyContent',
    flexDirection: 'flexDirection'
  },
  base: {
    display: 'flex',
    justifyContent: 'flexStart',
    flexDirection: 'column',
    scrollIndex: 0,
    gap: 30,
    x: theme.layout.marginX,
    y: [200, { ...theme.animation.standard, duration: theme.animation.duration.fast }] as any
  },
  toneModes: {},
  themeStyles
};

const Container = makeComponentStyles<ColumnStyle['Container']>(container);

const styles: ColumnStyle = {
  tone: tone || 'neutral',
  Container
};

export default styles;
