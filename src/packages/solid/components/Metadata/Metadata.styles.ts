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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  titleTextStyle: {
    ...theme.typography.headline3,
    contain: 'both',
    maxLines: 1
  },
  descriptionTextStyle: {
    ...theme.typography.body2,
    contain: 'both',
    wordWrap: true,
    maxLines: 3
  },
  details: {
    container: {
      display: 'flex',
      flexDirection: 'row'
    },
    titleTextStyle: {
      ...theme.typography.body2,
      contentSpacing: theme.spacer.sm,
      wordWrap: true,
      maxLines: 1
    }
  },
  rating: {
    icon: {
      color: getHexColor(...(theme.color.fillNeutral as [string, number])),
      height: theme.typography.body2.lineHeight,
      width: theme.typography.body2.lineHeight
    },
    text: theme.typography.body2
  }
};

export default styles;
