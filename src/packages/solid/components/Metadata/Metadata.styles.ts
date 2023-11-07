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
    contain: 'both'
  },
  descriptionTextStyle: {
    ...theme.typography.body2,
    contain: 'both',
    maxLines: 3
  },
  details: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    titleTextStyle: theme.typography.body2,
    contentSpacing: theme.spacer.lg
  },
  badge: {
    contentSpacing: theme.spacer.sm
  },
  rating: {
    icon: {
      color: getHexColor(...(theme.color.fillNeutral as [string, number])),
      height: theme.typography.body2.lineHeight,
      width: theme.typography.body2.lineHeight
    },
    text: theme.typography.body2,
    iconMarginRight: theme.spacer.sm,
    contentSpacing: theme.spacer.ratingsContentSpacing
  }
};

export default styles;
