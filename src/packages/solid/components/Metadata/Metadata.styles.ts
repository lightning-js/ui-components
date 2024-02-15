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

import type { TextStyles, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export interface MetadataStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  DescriptionText: TextStyleSet;
  TitleText: TextStyleSet;
}

type MetadataStyleProperties = {
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
};

type MetadataConfig = ComponentStyleConfig<MetadataStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Metadata: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

const container: MetadataConfig = {
  themeKeys: {
    justifyContent: 'justifyContent'
  },
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    gap: theme.spacer.sm
  },
  toneModes: {},
  themeStyles
};

const titletext: MetadataConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    maxLines: 1,
    contain: 'width',
    ...theme.typography.headline3
  },
  toneModes: {
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  themeStyles
};

const descriptiontext: MetadataConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    contain: 'width',
    maxLines: 2,
    ...theme.typography.body2
  },
  toneModes: {
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  themeStyles
};

const Container = makeComponentStyles<MetadataStyles['Container']>(container);
const DescriptionText = makeComponentStyles<MetadataStyles['DescriptionText']>(descriptiontext);
const TitleText = makeComponentStyles<MetadataStyles['TitleText']>(titletext);

const styles: MetadataStyles = {
  tone: defaultTone,
  Container,
  TitleText,
  DescriptionText
};

export default styles;
