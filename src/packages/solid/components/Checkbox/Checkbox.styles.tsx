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

// taken from LUI
// probably used to take into account if strokeWidth changes
const strokeWidth = theme.stroke.sm;
const size = theme.spacer.xxl - strokeWidth * 2;

type CheckboxStyle = {
  container: {
    /**
     * width of checkbox
     */
    width: number;
    /**
     * height of checkbox
     */
    height: number;
    /**
     * color of checkbox background
     */
    color: number;
    borderRadius: number;
    border: object;
  };
};

const styles: CheckboxStyle = {
  container: {
    width: size,
    height: size,
    color: getHexColor(...(theme.color.fillNeutral as [string, number])),
    borderRadius: size / 2,
    border: {
      width: strokeWidth,
      color: getHexColor(...(theme.color.strokeInverse as [string, number]))
    }
  }
};

export default styles;
