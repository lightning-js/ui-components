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
import { Color, Animatable } from '../../../../shared/types/solid';
import { getHexColor } from 'utils';

type ProgressBarStyle = {
  container: {
    height: number;
    color: Animatable<Color>;
    borderRadius: number;
  };
  progressBar: {
    color: Animatable<Color>;
    borderRadius: number;
  };
};

const styles: ProgressBarStyle = {
  container: {
    height: theme.spacer.md,
    color: getHexColor(...(theme.color.fillNeutralTertiary as [string, number])),
    borderRadius: theme.radius.xs
  },
  progressBar: {
    borderRadius: theme.radius.xs,
    color: getHexColor(...(theme.color.fillNeutral as [string, number])),
  }
};

export default styles;
