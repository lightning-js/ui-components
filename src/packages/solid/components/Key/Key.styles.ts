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

export type KeySizes = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

type keySize = keyof KeySizes;

export const styles = {
  Container: {
    height: theme.spacer.md * 9,
    minWidth: theme.spacer.md * 7,
    paddingX: theme.spacer.md,
    textStyle: theme.typography.headline2,
    borderRadius: theme.radius.sm,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    baseWidth: theme.spacer.md * 7,
    iconWidth: theme.typography.headline2.lineHeight,
    iconHeight: theme.typography.headline2.lineHeight
  }
} as const;

export default styles;
