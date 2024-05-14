/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

type Style = {
  Container: {
    base: {
      [_prop: string]: unknown;
    };
  };
  Text: {
    base: {
      [_prop: string]: unknown;
    };
  };
  Icon: {
    base: {
      [_prop: string]: unknown;
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      itemSpacing: 8
    }
  },
  Text: {
    base: {
      color: '0xf8f7faff',
      fontFamily: 'Arial',
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 32
    }
  },
  Icon: {
    base: {
      height: 32,
      width: 32,
      color: '0xf8f7faff'
    }
  }
};

export default styles;
