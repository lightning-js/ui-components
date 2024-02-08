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

const styles = {
  tone: 'neutral',
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  titleText: {
    ...theme.typography.headline3,
    fontSize: 20,
    contain: 'width',
    maxLines: 1
  },
  descriptionText: {
    ...theme.typography.body2,
    fontSize: 20,
    contain: 'width',
    maxLines: 2
  },
  disabled: {
    titleText: { textColor: theme.color.textNeutralDisabled },
    descriptionText: {
      textColor: theme.color.textNeutralDisabled
    }
  }
};

export default styles;
