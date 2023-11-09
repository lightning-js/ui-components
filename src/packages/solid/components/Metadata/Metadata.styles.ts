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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart'
  },
  titleText: {
    ...theme.typography.headline3,
    contain: 'both'
  },
  descriptionText: {
    ...theme.typography.body2,
    contain: 'both',
    maxLines: 3,
    /*
    TODO: The fontFamily on the current theme is not an open sourced font,
    and is not loaded as a font face to the application. This overwrites that
    font to one that is loaded so that we can utilize the SdfTextRenderer.
    */
    fontFamily: 'Ubuntu'
  }
};

export default styles;
