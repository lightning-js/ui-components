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

import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

// styles in LUI for Badge
//  contentSpacing: theme.spacer.sm,
//  offsetY: theme.spacer.xs,
//  paddingX: theme.spacer.md + theme.spacer.xxs,
//  paddingY: theme.spacer.xs,
//  radius: theme.radius.sm,
//  strokeWidth: theme.stroke.sm,
//   textStyle: {
//     ...theme.typography.tag1,
//     textAlign: 'center'
//    }

type BadgeStyle = {
  width: number;
  height: number;
  color: number;
  padding: number[];
  paddingX: number;
  paddingY: number;
  borderRadius: number;
  border: {
    width: number;
    color: number;
  };
  textStyle: {
    width: number;
    textAlign: string;
    color: number;
  };
};

const styles: BadgeStyle = {
  width: 300,
  height: theme.typography.tag1.lineHeight,
  paddingX: theme.spacer.md + theme.spacer.xxs,
  paddingY: theme.spacer.xs,
  padding: [theme.spacer.md + theme.spacer.xxs, theme.spacer.xs],
  color: getHexColor(...(theme.color.fillBrand as [string, number])),
  borderRadius: theme.radius.sm,
  border: {
    width: theme.stroke.sm,
    color: getHexColor(...(theme.color.strokeInverse as [string, number]))
  },
  textStyle: {
    width: 300,
    ...theme.typography.tag1,
    textAlign: 'center'
  }
};

export default styles;
