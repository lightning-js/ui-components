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

import Button from './Button';
// import ProgressBar from '../ProgressBar/ProgressBar';
import theme from 'theme';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic = {
  args: {
    width: 400,
    height: 100,
    children: 'button'
  }
};

// export const Basic = {
//   args: {
//     width: 500,
//     height: theme.spacer.md,
//     progress: 0.5,
//     // TODO make it so we don't need to do this
//     color: theme.color.fillNeutralSecondary[0],
//     progressColor: theme.color.fillBrand[0],
//     borderRadius: theme.radius.xs
//   }
// };
